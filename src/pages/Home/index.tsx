import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Posts } from '../../components/Posts'
import { SearchBar } from '../../components/SearchBar'
import { UserCard } from '../../components/UserCard'
import { api } from '../../libs/axios'
import { Container } from '../../styles/global'

export interface IssueDataProps {
  id: number
  title: string
  created_at: string
  body: string
  number: number
}

export function Home() {
  const [posts, setPosts] = useState<IssueDataProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function getIssueData(query?: string) {
    if (query === undefined) {
      const { data } = await api.get(
        `/search/issues?q=%20repo:pablodixs/github-blog`
      )
      setPosts(data.items)
      setIsLoading(false)
    } else {
      const { data } = await api.get(
        `/search/issues?q=${query}%20repo:pablodixs/github-blog`,
        {
          params: {
            q: query,
          },
        }
      )
      setPosts(data.items)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getIssueData()
  }, [])

  return (
    <>
      <Header />
      <UserCard />
      <Container>
        <SearchBar postsData={posts} getIssueData={getIssueData} />
        <Posts postData={posts} isLoading={isLoading} />
      </Container>
      <Footer />
    </>
  )
}
