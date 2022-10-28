import ReactMarkdown from 'react-markdown'
import { PostBodyContainer } from './styles'

interface PostBodyProps {
  body: string 
}

export function PostBody({ body }: PostBodyProps) {
  return (
    <PostBodyContainer>
      <ReactMarkdown>
        {body}
      </ReactMarkdown>
    </PostBodyContainer>
  )
}
