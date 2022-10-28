import { Link } from 'react-router-dom'
import { convertDateToNow } from '../../libs/dateFormatter'
import { IssueDataProps } from '../../pages/Home'
import { PostCard } from './styles'

interface PostCardItemProps {
  data: IssueDataProps
}

export function PostCardItem({ data}: PostCardItemProps) {
  return (
    <Link to={`/post/${data.number}`}>
      <PostCard>
        <header>
          <h1>{data.title}</h1>
          <span>{convertDateToNow(data.created_at)}</span>
        </header>
        <p>{data.body}</p>
      </PostCard>
    </Link>
  )
}
