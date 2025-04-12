import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
const backendUrl = import.meta.env.VITE_BACKEND_URL


const initialState = {
    productData:[],
    blogData:[],
    status: false,
    error:null,
}


export const fetchproductData = createAsyncThunk('data/fetchproductData',async()=>{
    const response = await axios.get(`${backendUrl}/product/getall`)
    console.log(response)
    return response.data.products
})

export const fetchBlogData = createAsyncThunk('data/fetchBlogData',async()=>{
    const response = await axios.get(`${backendUrl}/blog/getall`)
    return response.data
})

const dataSlice = createSlice({
    name:'Data',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchproductData.pending, 
            (state)=>{state.status = 'loading'; state.error = null})

        .addCase(fetchproductData.fulfilled,
             (state, action)=>{state.productData = action.payload ; state.status = 'success'; state.error = null})

        .addCase(fetchproductData.rejected,
             (state, action)=>{ state.status = 'failed'; state.error = 'Error Fetching Product Data'})

//blog 
        .addCase(fetchBlogData.pending, 
            (state)=>{state.status = 'loading'; state.error = null})

        .addCase(fetchBlogData.fulfilled,
             (state, action)=>{state.blogData = action.payload ; state.status = 'success'; state.error = null})

        .addCase(fetchBlogData.rejected,
             (state, action)=>{ state.status = 'failed'; state.error = 'Error Fetching Blog Data'})
    }
})

export default dataSlice.reducer
