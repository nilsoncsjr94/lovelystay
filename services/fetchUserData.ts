import axios from 'axios'
import { gitHubUser, userDetails } from '../@types/types'
import fetchUserRepos from './fetchUserRepos'

const gitHubUrlGet = 'https://api.github.com/users/'
console.log("fetchUserData")
export  default async(username: string): Promise<Omit<userDetails, 'additionalInfo'>> => {
  console.log("fetchUserData2")
  const {
    data: {
      id,
      login,
      location,
      email,
      repos_url: reposUrl
    }
  }:{ data: gitHubUser } = await axios.get(`${gitHubUrlGet}${encodeURIComponent(username)}`)
	
  const languages = await fetchUserRepos(reposUrl)
  console.log("antes do return")

  return {
    id,
    login,
    location,
    email,
    languages
  }
}