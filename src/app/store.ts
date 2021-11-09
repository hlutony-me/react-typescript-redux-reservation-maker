import {configureStore} from '@reduxjs/toolkit';
import customerSlice from '../features/customerSlice';
import reservationReducer from '../features/reservationSlice'

export const store = configureStore({
    reducer: {
        reservation: reservationReducer,
        customer:customerSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch