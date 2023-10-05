import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import TracksRelated from '../components/HomePages/TracksRelated'
import TrackInfo from '../components/TrackPage.jsx/TrackInfo'
import useFetch from '../hooks/useFetch'
import '../assets/styles/TrackPage.css'

const TrackPage = () => {

    
    const { id } = useParams()
    
    const [track, getTrack] = useFetch()
    
    useEffect(() => {
        getTrack(`/api/tracks/${id}`)
    }, [id])
    
    console.log(track)
    const navigate = useNavigate()
    
    const handleBack = () => {
        navigate(-1)
    }
    

    return (
        <div className='container-result-infotrack'>
            <div onClick={handleBack} className='button-back'> ← Back </div>
            <TrackInfo track={track}/>
            <TracksRelated artist={ track?.artists[0].name }/>
        </div>
    )
}

export default TrackPage