import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from 'services/api'

export const initialState = {
	loading: false,
	message: '',
	showMessage: false,
	redirect: '',
    users: [],
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
	// reducers: {
    //     toggleCollapsedNav: (state, action) => {
	// 		state.navCollapsed = action.payload
	// 	},
    // },
    extraReducers: (builder) => {
		builder
			// .addCase(getClients.pending, (state) => {
			// 	state.loading = true
			// })
			.addCase(getClients.fulfilled, (state, action) => {
				state.users = action.payload
			})
			.addCase(getClients.rejected, (state, action) => {
				state.message = action.payload
				state.showMessage = true
				state.loading = false
			})
    }
})

// export const { 
//     toggleCollapsedNav,
// } = workSlice.actions

export default workSlice.reducer