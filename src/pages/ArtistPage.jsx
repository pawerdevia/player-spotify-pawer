import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ArtistAlbum from '../components/ArtistPage/ArtistAlbum'
import { ArtistInfo } from '../components/ArtistPage/ArtistInfo'
import ArtistSongsTop from '../components/ArtistPage/ArtistSongsTop'
import useFetch from '../hooks/useFetch'

const ArtistPage = () => {


    const { id } = useParams()
    const [ artist, getArtist ] = useFetch()

    useEffect(() => {
        getArtist(`/api/artists/${id}`)
    }, [id])
    
    console.log(artist)

    return (
        <div>
            <Link to={'/'}> Atras </Link>
            <ArtistInfo artist={artist}/>
            <ArtistAlbum albums={artist?.albums}/>
            <ArtistSongsTop
                tracks={artist?.songsTop}
            />
        </div>
    )
}

export default ArtistPage