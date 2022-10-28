import Skeleton from 'react-loading-skeleton'
import ReactMarkdown from 'react-markdown'
import { PostBodyContainer } from './styles'

interface PostBodyProps {
  body: string
  isLoading: boolean
}

export function PostBody({ body, isLoading }: PostBodyProps) {
  return (
    <PostBodyContainer>
      {isLoading ? (
        <Skeleton
          baseColor="#0B1B2B"
          highlightColor="#1C2F41"
          count={25}
        />
      ) : (
        <ReactMarkdown>{body}</ReactMarkdown>
      )}
    </PostBodyContainer>
  )
}
