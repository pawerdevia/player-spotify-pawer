import React from 'react'
import { useEffect } from 'react'
import usePlayList from '../hooks/usePlayList'

const PlaylistPage = () => {

    const {getPlaylist, playlist} = usePlayList()

    useEffect(() => {
        getPlaylist()
    }, [])

    console.log(playlist)
    

    return (
        <article>
            {
                playlist.map(track => (
                    <div key={track.div}>
                        <h2>{track.title}</h2>
                    </div>
                ))
            }
        </article>
    )
}

export default PlaylistPage