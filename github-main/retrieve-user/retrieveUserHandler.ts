import { argRetrieve } from '../../@types/types'
import queryUserData from '../../database/queryUserData'

export const retrieveUserHandler = async (argv: argRetrieve) => {
  try {
    const users = await queryUserData(argv)
    console.table(users)
  } catch (error) {
    throw new Error(error)
  }
}