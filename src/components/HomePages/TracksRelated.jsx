import React from 'react'
import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import TrackCard from './TrackCard'

const TracksRelated = ({artist}) => {


    const [trackLists, getTracksList] =useFetch()

    useEffect(() => {
        if (artist) {
            getTracksList(`/api/tracks?limit=10&q=${artist}`)
        }
    }, [artist])
    

    console.log(trackLists)

    return (
        <section>
            <h3> Tracks related </h3>

            <div>
                {
                    trackLists?.tracks.items.map(track => (
                        <TrackCard
                            key={track.id}
                            track={track}
                        />

                    ))
                }
            </div>
        </section>
    )
}

export default TracksRelated