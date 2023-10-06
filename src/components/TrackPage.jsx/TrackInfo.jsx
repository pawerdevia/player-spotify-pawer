import React from 'react'
import { useState } from 'react'
import '../../assets/styles/TrackInfo.css'

const TrackInfo = ({ track }) => {

    

    const [isShowPlayer, setIsShowPlayer] = useState(false)

    const handlePlayer = () => {
        setIsShowPlayer(!isShowPlayer);
    }



    return (
        <>
            <article className='container-info-track'>
                <header className='header-info-track'>
                    <img onClick={handlePlayer} src={track?.album.images[0].url} alt="album" className='img-info-track' />
                </header>
                <section className='description-info-track'>
                    <h3 className='title-info-description'>{track?.name}</h3>
                    <ul className='artist-info-track'>
                        {
                            track?.artists.map(artist => (
                                <li key={artist.id}>{artist.name}</li>
                            ))
                        }
                    </ul>
                    <p><span className='type-info'  >Album: </span>{track?.album.name}</p>
                    <p><span className='type-info' >Release date: </span>{track?.album.release_date}</p>
                </section>
            </article>

            {
                isShowPlayer
                && (
                    <iframe style={{ borderRadius: '12px' }}
                        src={`https://open.spotify.com/embed/track/${track?.id}?utm_source=generator&theme=0`}
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy">
                    </iframe>
                )
            }
        </>
    )
}

export default TrackInfo