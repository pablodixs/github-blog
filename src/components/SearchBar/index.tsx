import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { MoonLoader } from 'react-spinners'

import { ApiContext } from '../../contexts/ApiContext'

import { SearchBarContainer, SearchContainer } from './styles'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInput = zod.infer<typeof searchFormSchema>

export function SearchBar() {
  const { issueData, getIssueData } = useContext(ApiContext)
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
        <span>{issueData.length} publicações</span>
      </div>
      <SearchBarContainer onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="search"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
        <button>
          {isSubmitting ? <MoonLoader size={'2rem'} color={'#000'} /> : 'Enviar'}
        </button>
      </SearchBarContainer>
    </SearchContainer>
  )
}
