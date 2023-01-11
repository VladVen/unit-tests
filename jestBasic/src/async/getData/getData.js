const axios = require('axios')
const mapArrToString = require('../../sync/mapArrToString/mapArrToString')

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const userIds = response.data.map(item => item.id)
        return mapArrToString(userIds)
    } catch (e) {
        console.log(e)
    }

}

module.exports = getData