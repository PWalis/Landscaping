import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface galleryUpload {
    beforeImage: string;
    afterImage: string;
}

export const GalleryUploadSlice = createSlice({
  name: "galleryUpload",
  initialState: {
    value: { beforeImage: "", afterImage: "" } as galleryUpload,
  },
  reducers: {
    setBeforeImage: (state, action: PayloadAction<string>) => {
      state.value.beforeImage = action.payload;
    },
    setAfterImage: (state, action: PayloadAction<string>) => {
      state.value.afterImage = action.payload;
    },
  },
});

export const { setBeforeImage, setAfterImage } = GalleryUploadSlice.actions;
