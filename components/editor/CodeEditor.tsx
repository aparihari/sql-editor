import { useCallback } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { xcodeLight } from '@uiw/codemirror-theme-xcode'
import { sql } from '@codemirror/lang-sql'

import { Dropdown } from './Dropdown'
import { useEditor } from '../../lib/hooks/useEditor'
import {
  useResultDispatch,
  useResultState,
} from '../../lib/context/ResultContext'
import orders from '../../lib/data/orders.json'
import customers from '../../lib/data/customers.json'

const extensions = [sql()]

interface Props {
  dimensions?: {
    height: string
    width: string
  }
}

export const CodeEditor: React.FC<Props> = ({
  dimensions = { height: '200px', width: '100%' },
}) => {
  const { code, onChange } = useEditor()

  const result = useResultState()!
  const setResult = useResultDispatch()!

  const changeResult = useCallback(() => {
    if (result?.title === 'Customer') {
      setResult(orders)
    } else {
      setResult(customers)
    }
  }, [setResult, result])

  return (
    <>
      <div className='relative flex flex-col border border-gray-200 opacity-100 dark:border-gray-700 overflow-hidden w-full mb-1'>
        <div className='flex flex-col items-end justify-between p-2 pr-4 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:items-center'>
          <p>
            Enter your query below and hit <em>execute</em> or select from the
            dropdown a query
          </p>
          <Dropdown />
        </div>
        <CodeMirror
          value={code}
          extensions={extensions}
          onChange={onChange}
          height={dimensions.height}
          width={dimensions.width}
          theme={xcodeLight}
        />
      </div>

      <button
        className='group relative h-12 w-full overflow-hidden bg-white text-lg shadow'
        onClick={() => changeResult()}
        disabled={!code}
      >
        <div className='absolute inset-0 bg-indigo-500 hover:bg-indigo-600 group-disabled:bg-indigo-300 w-full'></div>
        <span className='relative text-white'>Execute</span>
      </button>
    </>
  )
}
