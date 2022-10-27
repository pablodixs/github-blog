import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ApiContext } from '../../contexts/ApiContext'
import { PostCardItem } from '../PostCard'

import { PostsContainer } from './styles'

export function Posts() {
  const { issueData } = useContext(ApiContext)

  return (
    <PostsContainer>
      {issueData.map((issue) => {
        return <PostCardItem key={issue.id} issueData={issue} />
      })}
    </PostsContainer>
  )
}
