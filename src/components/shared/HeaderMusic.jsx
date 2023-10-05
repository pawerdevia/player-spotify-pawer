import React from 'react'
import { useSelector } from "react-redux"
import TrackList from './TrackList'
import '../../assets/styles/HeaderMusic.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import usePlayList from '../../hooks/usePlayList'

const HeaderMusic = () => {

    const tracksPlaylist = useSelector(store => store.tracks)

    const [styleForm, setstyleForm] = useState('false')
    const [sideA, setsideA] = useState('active')

    const handleForm = () => {
        if (styleForm === 'false') {
            setstyleForm('true')
        } else {
            setstyleForm('false')
        }
    }

    const { reset, handleSubmit, register } = useForm()

    const { postPlaylist } = usePlayList()

    const submit = data => {

        console.log(data)

        const obj = {
            ...data,
            tracks: tracksPlaylist.map(e => ({
                id: e.id
            }))
        }
        postPlaylist(obj)

        reset({
            title: '',
            to: '',
            message: ''
        })
    }

    const handleSide = () => {
        if (sideA === 'active') {
            setsideA('false')
        } else {
            setsideA('active')
        }
    }

    return (
        <header className='header__navbar'>
            <h1 className='title-principal'>Gift Music</h1>
            <div className='container-new-playlist'>
                <div className='header__container-btns-header'>
                    <button className='btn-header my-account'>My account</button>
                    <button className='btn-header creating-playl' onClick={handleForm}><span className='span-list'><i className='bx bx-list-ul'></i> </span>  Creating Playlist {tracksPlaylist.length}</button>
                </div>
                <div className={`container-form ${styleForm}`}>
                    <form className='form-new-playlist' onSubmit={handleSubmit(submit)}>
                        <div className={`${(sideA === 'active' ? 'active' : 'inactive')} form-play-listA `}>
                            <label htmlFor="title"></label>
                            <input {...register('title')} type="text" id="title" placeholder='New Playlist' className='input-title' />
                        </div>
                        <div className={`${(sideA === 'active' ? 'inactive' : 'active')} form-play-listB `}>
                            <div className='form__container-to'>
                                <label htmlFor="to"></label>
                                <input {...register('to')} type="text" id="to" className='to-playlist' placeholder='To:'/>
                            </div>
                            <div className='form__container-message'>
                                <label htmlFor="message"></label>
                                <textarea {...register('message')} id="message"  className='message-playlist' placeholder='Message '/>
                            </div>
                        </div>
                        <div className='container-handle-side'>
                            <span onClick={handleSide} className='btns-form side'>{sideA === 'active' ? 'SideA ⇄' : 'SideB ⇄'}</span>
                        </div>
                        <div className='container__new-tracks-list'>
                            {
                                tracksPlaylist.map(track => (
                                    <TrackList
                                        key={track.id}
                                        track={track}
                                    />
                                ))
                            }
                        </div>
                        <button className='btns-form create'>Create</button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default HeaderMusic