import { GithubLogo, Buildings, Users, ArrowSquareOut } from 'phosphor-react'
import { useContext } from 'react'
import { ApiContext } from '../../contexts/ApiContext'

import {
  CardContainer,
  CardContent,
  UserInfoContainer,
  UserSocialContainer,
} from './styles'

export function UserCard() {
  const { userData } = useContext(ApiContext)

  return (
    <CardContainer>
      <CardContent>
        <img src={userData?.avatar_url} />
        <UserInfoContainer>
          <h1>{userData?.name}</h1>
          <p>{userData?.bio}</p>
          <UserSocialContainer>
            <div>
              <GithubLogo size={18} weight={'fill'} />
              <span>{userData?.login}</span>
            </div>
            {userData?.company !== null && (
              <div>
                <Buildings size={18} weight={'fill'} />
                <span>{userData?.company}</span>
              </div>
            )}
            <div>
              <Users size={18} weight={'fill'} />
              <span>{userData?.followers}</span>
            </div>
          </UserSocialContainer>
          <a target={'_blank'} href={userData?.html_url}>
            GITHUB <ArrowSquareOut weight="bold" size={'1rem'} />
          </a>
        </UserInfoContainer>
      </CardContent>
    </CardContainer>
  )
}
