import { configureStore } from "@reduxjs/toolkit";
import credentials from './slices/credentials.slice';
import tracks from './slices/tracks.slices';

const store = configureStore({
    reducer:{
        credentials,
        tracks
    }
})


export default store