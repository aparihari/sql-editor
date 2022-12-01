import { useCallback, useState } from 'react'

export const useEditor = () => {
  const [code, setCode] = useState('')
  const onChange = useCallback(
    (code: string) => {
      setCode(code)
    },
    [setCode]
  )

  return {
    code,
    onChange,
  }
}
