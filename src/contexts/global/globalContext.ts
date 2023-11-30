import { createContext, useContext } from 'react'
import { ModepharmType } from '@/helpers/zod'

const GlobalContext = createContext<ModepharmType | undefined>(undefined)

export const GlobalContextProvider = GlobalContext.Provider
export const useGlobalContext = () => useContext(GlobalContext)!
