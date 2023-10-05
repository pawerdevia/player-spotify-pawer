import React from 'react'
import { addTrack } from '../../store/slices/tracks.slices'
import { useDispatch } from 'react-redux'
import { Link, useNavigate} from 'react-router-dom'
import '../../assets/styles/TrackCard.css'

const TrackCard = ({ track }) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleAddTrack = () => {
        dispatch(addTrack(track))
    }

    const handleArtist = (id) => {
        navigate(`/artist/${id}`)
    }

    
    return (
        <section className='track-result'>
            <header className='header-result'>
                <img src={track.album.images[0].url} alt="img-result" className='img-result'/>
            </header>
            <article className='description-result'>
                <Link to={`/track/${track.id}`} className='title-track-result'><h3 className='title-track'>{track.name}</h3></Link> 
                <ul className='artist-track-name'>
                    {
                        track.artists.map((artist) => (
                            <li className='artist' key={artist.id} onClick={() => handleArtist(artist.id)}>{artist.name}</li>
                        ))
                    }
                </ul>
            </article>
            <footer className='icons-track-result'>
                <a className='icon_result spotify' target='_blank' href={track.external_urls.spotify}>
                    <i className='bx bxl-spotify' ></i>
                </a>
                <button className='icon_result plus' onClick={handleAddTrack}>
                    <i className='bx bx-plus-circle' ></i>
                </button>
            </footer>
        </section>
    )
}

export default TrackCard