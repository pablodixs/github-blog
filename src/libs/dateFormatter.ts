import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function convertDateToNow(date: string | undefined) {
  if (date !== undefined) {
    const dateFormated = formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: ptBR,
    })
    return dateFormated
  }
}
