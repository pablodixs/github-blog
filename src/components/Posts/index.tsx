import Skeleton from 'react-loading-skeleton'
import { IssueDataProps } from '../../pages/Home'

import { PostCardItem } from '../PostCard'

import { PostsContainer } from './styles'

interface PostsProps {
  postData: IssueDataProps[]
  isLoading: boolean
}

export function Posts({ postData, isLoading }: PostsProps) {
  return (
    <PostsContainer>
      {isLoading ? (
        <>
          <Skeleton
            baseColor="#0B1B2B"
            highlightColor="#1C2F41"
            height={'16rem'}
          />
          <Skeleton
            baseColor="#0B1B2B"
            highlightColor="#1C2F41"
            height={'16rem'}
          />
          <Skeleton
            baseColor="#0B1B2B"
            highlightColor="#1C2F41"
            height={'16rem'}
          />
          <Skeleton
            baseColor="#0B1B2B"
            highlightColor="#1C2F41"
            height={'16rem'}
          />
        </>
      ) : (
        postData.map((posts) => {
          return <PostCardItem key={posts.id} data={posts} />
        })
      )}
    </PostsContainer>
  )
}
