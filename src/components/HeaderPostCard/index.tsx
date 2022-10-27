import Skeleton from 'react-loading-skeleton'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatsCircle,
  GithubLogo,
} from 'phosphor-react'
import { convertDateToNow } from './../../libs/dateFormatter'

import { PostProps } from '../../pages/Post'

import {
  CardContainer,
  CardContent,
  LinkAnchor,
  PostCardHeader,
  UserInfoContainer,
  UserSocialContainer,
} from './styles'

interface HeaderPostProps {
  post: PostProps | undefined
  isLoading: boolean
}

export function HeaderPostCard({ isLoading, post }: HeaderPostProps) {
  console.log(post)
  const dateNow = post?.created_at.toString()

  return (
    <CardContainer>
      <CardContent>
        <PostCardHeader>
          <LinkAnchor to={'/'}>
            <CaretLeft weight="bold" size={'1rem'} /> Voltar
          </LinkAnchor>
          <a href={`${post?.html_url}`} target={'_blank'}>
            Ver no GitHub <ArrowSquareOut weight="bold" size={'1rem'} />
          </a>
        </PostCardHeader>
        <UserInfoContainer>
          {isLoading ? (
            <Skeleton
              baseColor="#0B1B2B"
              highlightColor="#1C2F41"
              height={'2rem'}
            />
          ) : (
            <h1>{post?.title}</h1>
          )}
          <UserSocialContainer>
            <div>
              <GithubLogo size={'1.125rem'} weight={'fill'} />
              {isLoading ? (
                <Skeleton
                  baseColor="#0B1B2B"
                  highlightColor="#1C2F41"
                  height={'1rem'}
                  width={'5rem'}
                />
              ) : (
                <a href={post?.user.html_url}>
                  <span>{post?.user.login}</span>
                </a>
              )}
            </div>
            <div>
              <Calendar size={'1.125rem'} weight={'fill'} />
              {isLoading ? (
                <Skeleton
                  baseColor="#0B1B2B"
                  highlightColor="#1C2F41"
                  height={'1rem'}
                  width={'5rem'}
                />
              ) : (
                <span>{convertDateToNow(dateNow)}</span>
              )}
            </div>
            <div>
              <ChatsCircle size={'1.125rem'} weight={'fill'} />
              <span>
                {post?.comments}
                {post?.comments > 1 ? ' comentários' : ' comentário'}
              </span>
            </div>
          </UserSocialContainer>
        </UserInfoContainer>
      </CardContent>
    </CardContainer>
  )
}
