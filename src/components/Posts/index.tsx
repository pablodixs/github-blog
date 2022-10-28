import { IssueDataProps } from '../../pages/Home'

import { PostCardItem } from '../PostCard'

import { PostsContainer } from './styles'

interface PostsProps {
  postData: IssueDataProps[]
}

export function Posts({ postData }: PostsProps) {
  return (
    <PostsContainer>
      {postData.map((posts) => {
        return <PostCardItem key={posts.id} data={posts} />
      })}
    </PostsContainer>
  )
}
