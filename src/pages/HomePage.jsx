import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import TrackCard from '../components/HomePages/TrackCard'
import useFetch from '../hooks/useFetch'
import '../assets/styles/HomePage.css'

const HomePage = () => {

  const [listTracks, getListTracks] = useFetch()
  const [inputValue, setInputValue] = useState('ricardo arjona')
  const [quantityPerPage, setQuantityPerPage] = useState(10)


  useEffect(() => {
    getListTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`)
  }, [inputValue, quantityPerPage])



  const inputSearch = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const handleTracksPerPage = e => {
    setQuantityPerPage(e.target.value)
  }


  return (
    <div className='container-result-search'>
      <div className='result-search'>
        <form onSubmit={handleSearch} className='form-search'>
          <div className='container-search'>
            <input type="text" ref={inputSearch} className='input-search' placeholder='Search...'/>
          <select defaultValue={10} onChange={handleTracksPerPage} className='select-search'>
            {
              [2, 4, 6, 8, 10].map(tracksPerPage => (
                <option key={tracksPerPage} value={tracksPerPage}>{tracksPerPage}</option>
              ))
            }
          </select>
          </div>
        </form>
        <div className='container-results'>
          {
            listTracks?.tracks.items.map(track => (
              <TrackCard
                key={track.id}
                track={track}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage