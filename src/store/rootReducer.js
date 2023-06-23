import { combineReducers } from 'redux'
import theme from './slices/themeSlice'
import auth from './slices/authSlice'
import work from './slices/workSlice'


const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        work,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}
  
export default rootReducer
