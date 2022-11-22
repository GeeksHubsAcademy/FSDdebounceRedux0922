
import { configureStore } from '@reduxjs/toolkit';
import filmSlice from '../Containers/filmSlice';

export default configureStore({
    reducer: {
        film : filmSlice
    }
    
});