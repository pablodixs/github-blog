import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { MoonLoader } from 'react-spinners'

import { SearchBarContainer, SearchContainer } from './styles'
import { IssueDataProps } from '../../pages/Home'
import { HourglassMedium, MagnifyingGlass } from 'phosphor-react'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInput = zod.infer<typeof searchFormSchema>

interface SearchBarProps {
  postsData: IssueDataProps[]
  getIssueData: (query?: string) => Promise<void>
}

export function SearchBar({ postsData, getIssueData }: SearchBarProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getIssueData(data.query)
  }

  return (
    <SearchContainer>
      <div>
        <h2>Publicações</h2>
        <span>{postsData.length} publicações</span>
      </div>
      <SearchBarContainer onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="search"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
        <button>
          {isSubmitting ? (
            <HourglassMedium size={'1.25rem'} weight={'bold'} />
          ) : (
            <MagnifyingGlass size={'1.25rem'} weight={'bold'} />
          )}
        </button>
      </SearchBarContainer>
    </SearchContainer>
  )
}
