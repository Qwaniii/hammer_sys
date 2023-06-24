import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from 'services/api'

export const initialState = {
	loading: false,
  users: [],
	client: {},
}

export const getClients = createAsyncThunk(
    'clients',
    async (data, { rejectWithValue }) => {
	try {
		const responce = api.getUsers()
		return responce;
	} catch (err) {
		return rejectWithValue(err.response?.data?.message || 'Error')
	}
})

export const workSlice = createSlice({
	name: 'work',
	initialState,
	reducers: {
    updateClient: (state, action) => {
			state.client = action.payload
			},
    },
  extraReducers: (builder) => {
		builder
			.addCase(getClients.pending, (state) => {
				state.loading = true
			})
			.addCase(getClients.fulfilled, (state, action) => {
				state.users = action.payload
				state.loading = false
			})
			.addCase(getClients.rejected, (state, action) => {
				console.log(action.payload)
				state.loading = false
			})
    }
})

export const { 
	updateClient,
} = workSlice.actions

export default workSlice.reducer