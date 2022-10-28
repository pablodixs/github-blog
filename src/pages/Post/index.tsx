import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { HeaderPostCard } from '../../components/HeaderPostCard'
import { PostBody } from '../../components/Posts/PostBody'
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

const defaultData = {
  title: '',
  comments: 0,
  created_at: '',
  user: {
    login: '',
    html_url: '',
  },
  html_url: '',
  body: '',
}

export function PostPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [postData, setPostData] = useState<PostProps>(defaultData)

  const { id } = useParams()

  async function getPostData(id: string | undefined) {
    const response = await api.get(`/repos/pablodixs/github-blog/issues/${id}`)

    const { title, comments, created_at, user, html_url, body } = response.data

    const postDataResponse = {
      title,
      comments,
      created_at,
      user,
      html_url,
      body,
    }
    setPostData(postDataResponse)
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
        <PostBody isLoading={isLoading} body={postData.body} />
      </Container>
      <Footer />
    </>
  )
}
