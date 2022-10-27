import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../libs/axios'

interface UserDataProps {
  name: string
  bio: string
  avatar_url: string
  followers: number
  company: string | null
  html_url: string
  login: string
}

interface UserDataContextProps {
  userData: UserDataProps | undefined
}

export const ApiContext = createContext({} as UserDataContextProps)

interface ApiContextProviderProps {
  children: ReactNode
}

export function ApiContextProvider({ children }: ApiContextProviderProps) {
  const [userData, setUserData] = useState<UserDataProps>()

  async function getUserData() {
    const response = await api.get('/users/pablodixs')
    setUserData(response.data)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <ApiContext.Provider value={{ userData }}>{children}</ApiContext.Provider>
  )
}
