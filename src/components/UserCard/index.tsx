import { GithubLogo, Buildings, Users, ArrowSquareOut } from 'phosphor-react'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { api } from '../../libs/axios'

import {
  CardContainer,
  CardContent,
  UserInfoContainer,
  UserSocialContainer,
} from './styles'

interface UserDataProps {
  name: string
  bio: string
  avatar_url: string
  followers: number
  company: string | null
  html_url: string
  login: string
}

export function UserCard() {
  const [userData, setUserData] = useState<UserDataProps>()
  const [isLoading, setIsLoading] = useState(true)

  async function getUserData() {
    const { data } = await api.get('/users/pablodixs')
    setUserData(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <CardContainer>
      <CardContent>
        {isLoading ? (
          <Skeleton
            baseColor="#0B1B2B"
            highlightColor="#1C2F41"
            height={'9.25rem'}
            width={'9.25rem'}
          />
        ) : (
          <img src={userData?.avatar_url} />
        )}
        <UserInfoContainer>
          {isLoading ? (
            <Skeleton
              baseColor="#0B1B2B"
              highlightColor="#1C2F41"
              height={'2rem'}
            />
          ) : (
            <h1>{userData?.name}</h1>
          )}
          {isLoading ? (
            <Skeleton
              baseColor="#0B1B2B"
              highlightColor="#1C2F41"
              height={'1rem'}
              count={3}
            />
          ) : (
            <p>{userData?.bio}</p>
          )}
          <UserSocialContainer>
            <div>
              <GithubLogo size={18} weight={'fill'} />
              {isLoading ? (
                <Skeleton
                  baseColor="#0B1B2B"
                  highlightColor="#1C2F41"
                  height={'0.875rem'}
                  width={'5rem'}
                />
              ) : (
                <span>{userData?.login}</span>
              )}
            </div>
            {userData?.company !== null && (
              <div>
                <Buildings size={18} weight={'fill'} />
                <span>{userData?.company}</span>
              </div>
            )}
            <div>
              <Users size={18} weight={'fill'} />
              {isLoading ? (
                <Skeleton
                  baseColor="#0B1B2B"
                  highlightColor="#1C2F41"
                  height={'0.875rem'}
                  width={'5rem'}
                />
              ) : (
                <span>{userData?.followers} seguidores</span>
              )}
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
