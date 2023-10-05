import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"


const useFetch = () => {
    const [infoApi, setinfoApi] = useState()

    const baseURL = 'https://playlist-share-dev.fl0.io'

    const getApi = (path) => {
        const url = `${baseURL}${path}`
        axios.get(url, getConfigToken())
            .then(res => setinfoApi(res.data))
            .catch(err => console.log(err))
    }


    return [infoApi, getApi]
}

export default useFetch