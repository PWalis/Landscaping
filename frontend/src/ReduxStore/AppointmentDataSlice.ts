import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface appointmentData {
  services: string[];
  date: string;
  additionalService: string;
  name: string;
  email: string;
  phone: string;
  image: string[];
}

export const appointmentDataState = createSlice({
  name: "appointmentData",
  initialState: {
    value: {services: [""], date: "", additionalService: "", name: "", email: "", phone: "", image: []} as appointmentData,
  },
  reducers: {
    setServices: (state, action: PayloadAction<string[]>) => {
      state.value.services =  action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.value.date = action.payload;
    },
    setAdditionalService: (state, action: PayloadAction<string>) => {
      state.value.additionalService = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.value.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.value.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.value.phone = action.payload;
    },
    addImage: (state, action: PayloadAction<string[]>) => {
      state.value.image = state.value.image.concat(action.payload);
    },
  },
});

export const {
    setServices,
    setDate,
    setAdditionalService,
    setName,
    setEmail,
    setPhone,
    addImage,
  } = appointmentDataState.actions;