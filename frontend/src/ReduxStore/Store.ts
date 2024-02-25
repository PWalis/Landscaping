import { configureStore } from '@reduxjs/toolkit';
import { appointmentDataState } from './AppointmentDataSlice';
import { GalleryUploadSlice } from './GalleryUploadSlice';

export const store = configureStore({
  reducer: {
    appointmentData: appointmentDataState.reducer,
    galleryUpload: GalleryUploadSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



