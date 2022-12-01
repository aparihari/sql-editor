import React, { createContext, useContext, useState } from 'react'

export type ResultDispatch = React.Dispatch<any>

interface Props {
  children: React.ReactNode
}

export interface ResultState {
  [key: string]: any
}

export const ResultStateContext = createContext<ResultState | undefined>(undefined)
export const ResultDispatchContext = createContext<ResultDispatch | undefined>(
  undefined
)

const ResultContextProvider = ({ children }: Props) => {
  const [state, setState] = useState({})

  return (
    <ResultDispatchContext.Provider value={setState}>
      <ResultStateContext.Provider value={state}>
        {children}
      </ResultStateContext.Provider>
    </ResultDispatchContext.Provider>
  )
}

export const useResultState = () => {
  const state = useContext(ResultStateContext)
  return state
}

export const useResultDispatch = () => {
  const dispatch = useContext(ResultDispatchContext)
  return dispatch
}

export default ResultContextProvider
