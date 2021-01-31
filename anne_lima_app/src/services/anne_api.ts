import axios from 'axios'

export const anne_api = axios.create(
    {
        baseURL: 'https://anne-lima-api.herokuapp.com'
    }
)

