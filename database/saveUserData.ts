import { TableName } from 'pg-promise'
import { userDetails } from '../@types/types'
import * as insertQuery from './runDbScripts'
const { db } = require('./getDbInstance')

console.log('antes do async')
export default async (userData: Omit<userDetails, 'additionalInfo'>) => {

  const userDataInsert: userDetails = {
    additionalInfo:  { 
      languages: userData.languages.map(language => ({ name: language.toLowerCase() })) 
    },
    ...userData
  }
  console.log('antes de criar a Tabela')
	
  console.log('depois de criar a Tabela')
  await db.any(`${insertQuery}`,
  {$1 :'id'},
  {$2 :'login'}, 
  {$3 :'location'},
  {$4:'username'},
  {$5: 'additional_info'},
   userDataInsert)

  return userDataInsert.id
}