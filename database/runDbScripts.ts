import { scriptName } from "yargs";
const {db}= require('../getDbInstance');
const {QueryFile} = require('pg-promise');
const {join: joinPath} = require('path');

// Helper for linking to external query files:
function sql(file) {
    const fullPath = joinPath(__dirname, file); // generating full path;
    return new QueryFile(fullPath, {minify: true});
}
module.exports = {
  executeScript :  sql('createtable.sql'),
  insertQuery : sql('insertQuery.sql')
};
console.log('antes de criar a Tabela na runDbScripts')

  


