import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTrack } from '../../store/slices/tracks.slices'
import '../../assets/styles/TrackList.css'

const TrackList = ({ track }) => {

  const dispatch = useDispatch()


  const handleDelete = () => {
    dispatch(deleteTrack(track))
  }


  return (
    <section className='track-playlist'>
      <header className='header-track'>
        <img src={track.album.images[0].url} alt="img-album" className='img-track' />
      </header>
      <article className='description-track'>
        <h3>{track.name}</h3>
        <ul>
          {
            track.artists.map(artist => (
              <li key={artist.id}>{artist.name}</li>
            ))
          }
        </ul>
      </article>
        <footer onClick={handleDelete} className='footer-track'>
            <i className='bx bx-minus-circle'></i>
        </footer>
    </section>
  )
}

export default TrackList