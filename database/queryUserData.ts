import { argRetrieve, userDetails } from '../@types/types'
const initOptions = {/* initialization options */};
const {db}= require('./getDbInstance');

console.log("queryuserdata")
const getQueryParams = (argv: argRetrieve) => {
  const langQuery = argv.language 
    ? 'additional_info @> \'{ "languages": [{ "name": "$/language:value/" }] }\'' 
    : '1=1'
  
  const locQuery = argv.location 
    ? 'Lower(location) like \'%$/location:value/%\'' 
    : '1=1'

  const params = {
    language: argv.language?.toLowerCase(),
    location: argv.location?.toLowerCase()
  }

  const query = `SELECT * FROM users WHERE ${langQuery} and ${locQuery}`
  return { query, params }
}		

export default async (argv: argRetrieve): Promise<Omit<userDetails, 'additionalInfo'>[]> => {
  const { query, params } = getQueryParams(argv)

  const users = await db.any(query, params, (item) => ({
    id: item.id,
    location: item.location,
    login: item.login,
    languages: item.additional_info.languages.map(language => language.name),
  }))
	
  return users
}