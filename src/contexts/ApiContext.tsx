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

export interface IssueDataProps {
  id: number
  title: string
  created_at: string
  body: string
  number: number
}

interface UserDataContextProps {
  userData: UserDataProps | undefined
  issueData: IssueDataProps[]
  getIssueData: (query?: string) => Promise<void>
}

export const ApiContext = createContext({} as UserDataContextProps)

interface ApiContextProviderProps {
  children: ReactNode
}

export function ApiContextProvider({ children }: ApiContextProviderProps) {
  const [userData, setUserData] = useState<UserDataProps>()
  const [issueData, setIssueData] = useState<IssueDataProps[]>([])

  async function getUserData() {
    const response = await api.get('/users/pablodixs')
    setUserData(response.data)
  }

  async function getIssueData(query: string = '') {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:pablodixs/github-blog`,
      {
        params: {
          q: query,
        },
      }
    )
    setIssueData(response.data.items)
  }

  useEffect(() => {
    getUserData()
    getIssueData()
  }, [])

  return (
    <ApiContext.Provider value={{ userData, issueData, getIssueData }}>
      {children}
    </ApiContext.Provider>
  )
}
