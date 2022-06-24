import { argFetch } from '../../@types/types'
import userDataInsert  from '../../database/saveUserData'
console.log('teste')
import fetchUserData from '../../services/fetchUserData'
const { db } = require('../../database/getDbInstance')
import * as executeScript from '../../database/runDbScripts'
console.log("import")
export const fetchUserHandler = async (argv: argFetch) => {
console.log("import2")
  try { 
    await db.any(`${executeScript}`,
  { $1 :'id' },
  { $2 :'login' }, 
  { $3 :'location' },
  { $4:'username' }, 
  { $5: 'additional_info' }) 
    console.log("try")
    const userDetails = await fetchUserData(argv.username)
    console.log("argv")

    await userDataInsert(userDetails)
    console.log("table")
    console.table([userDetails])
  } catch (error) {
    throw new Error("")
  }
}