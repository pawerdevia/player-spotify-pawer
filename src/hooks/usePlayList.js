import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import getConfigToken from "../services/getConfigToken"
import { setTrackSlice } from "../store/slices/tracks.slices"


const usePlayList = () => {

    const [playlist, setPlaylist] = useState([])

    const baseURL = 'https://playlist-share-dev.fl0.io'

    const dispatch = useDispatch()

    const getPlaylist = () => {
        const url = `${baseURL}/api/playlists/me`
        axios.get(url, getConfigToken())
            .then(res => setPlaylist(res.data))
            .catch(err => console.log(err))
    }

    const postPlaylist = (data) => {
        const url = `${baseURL}/api/playlists`
        axios.post(url, data, getConfigToken())
            .then(res => {
                console.log(res.data)
                setPlaylist([...playlist,res.data.info])
                dispatch(setTrackSlice([]))
            })
            .catch(err => console.log(err))
    }


    const deletePlaylist = (id) => {
        const url = `${baseURL}/api/playlists/${id}`
        axios.delete(url, getConfigToken())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }


    return {playlist, getPlaylist, postPlaylist, deletePlaylist}
}

export default usePlayList