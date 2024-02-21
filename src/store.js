import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './Action/CounterSlice'

export default configureStore({
    reducer:{
        counter:counterReducer,
    },
})