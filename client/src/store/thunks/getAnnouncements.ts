import { createAsyncThunk } from "@reduxjs/toolkit";
import {fetchAnnouncements} from '../../apis/apis'
interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
}

export const getAnnouncements = createAsyncThunk<Announcement[]>(
  'announcements/get',
  async () => {
    const response =  await fetchAnnouncements();
    return response  as Announcement[]; 
  }
);
