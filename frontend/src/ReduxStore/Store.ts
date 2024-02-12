import { configureStore } from '@reduxjs/toolkit';
import { appointmentDataState } from './AppointmentDataSlice';

export const store = configureStore({
  reducer: {
    appointmentData: appointmentDataState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



