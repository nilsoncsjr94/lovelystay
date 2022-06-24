import axios from 'axios'
import { gitHubLanguages, gitHubRepo } from '../@types/types'

export default async (reposUrl: string): Promise<FlatArray<any[], number>> => {
  const { data: item }:{ data: gitHubRepo[] } = await axios.get(reposUrl)
	
  const languages = await Promise.all(
    await item.map(
      async (element) => {
        const { data } : { data: gitHubLanguages } = await axios.get(
          element.languages_url)
        return Object.keys(data)
      })
  )

  return [...new Set(languages.flat(Infinity))]
}