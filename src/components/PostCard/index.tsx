import { Link } from 'react-router-dom'
import { IssueDataProps } from '../../contexts/ApiContext'
import { convertDateToNow } from '../../libs/dateFormatter'
import { PostCard } from './styles'

interface PostCardItemProps {
  issueData: IssueDataProps
}

export function PostCardItem({ issueData }: PostCardItemProps) {
  return (
    <Link to={`/post/${issueData.number}`}>
      <PostCard>
        <header>
          <h1>{issueData.title}</h1>
          <span>{convertDateToNow(issueData.created_at)}</span>
        </header>
        <p>{issueData.body}</p>
      </PostCard>
    </Link>
  )
}
