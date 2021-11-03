import axios from 'react-native-axios'
import { BASE_URL } from '../constants'

export default function callAPI(endpoint, method = 'GET', body){
    return axios({
        method: method,
        url: `${BASE_URL}/${endpoint}`,
        data: body,
    }).catch(err => {
        console.log(JSON.stringify(err));
    })
}