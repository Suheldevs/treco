import {configureStore} from '@reduxjs/toolkit'
import DataReducer from './dataSlice.js'

const store = configureStore({
    reducer:{
        data:DataReducer
    }
})

export {store}