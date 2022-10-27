import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { HeaderPostCard } from '../../components/HeaderPostCard'
import { PostBody } from '../../components/Posts/PostBody'
import { IssueDataProps } from '../../contexts/ApiContext'
import { api } from '../../libs/axios'
import { Container } from '../../styles/global'

export interface PostProps {
  body: string
  title: string
  created_at: string
  html_url: string
  comments: number
  user: {
    login: string
    html_url: string
  }
}

export function PostPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [postData, setPostData] = useState<PostProps>()

  const { id } = useParams()

  async function getPostData(id: string | undefined) {
    const response = await api.get(
      `/repos/pablodixs/github-blog/issues/${id}`
    )
    setPostData(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    getPostData(id)
  }, [])

  return (
    <>
      <Header />
      <Container>
        <HeaderPostCard isLoading={isLoading} post={postData} />
        <PostBody body={postData?.body} />
      </Container>
    </>
  )
}
