import axios from 'axios'
import { baseURL } from './env'

const axiosClient = axios.create({baseURL})

export default axiosClient;