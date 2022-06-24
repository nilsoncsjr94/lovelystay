import fs from 'fs'
const getDbInstance = require('../../getDbInstance')
describe('DB Functions test', () => {

    test('should return a DB Instance', async () => {
        const db = getDbInstance.db()
        expect(db.none).toBeTruthy()
        expect(db.map).toBeTruthy()
    })

})
