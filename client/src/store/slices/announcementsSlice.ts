import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAnnouncements } from "../thunks/getAnnouncements";

// Define a type for the Announcement object
interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
}

const initialState: Announcement[] = [];

const announcementsSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(getAnnouncements.fulfilled, (state, action: PayloadAction<Announcement[]>) => {
      return action.payload; 
    });
  },
});
export const announcementReducer =  announcementsSlice.reducer;
