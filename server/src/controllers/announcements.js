import { Announcement } from "../models/Announcement.js";
// create new announcement
export const createAnnouncement = async (req, res) => {
  try {
    const announcement = new Announcement(req.body);
    await announcement.save();
    res.status(201).send(announcement);
  } catch (error) {
    res.status(400).send({"message":"could not create announcement"})
  }
};
export const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.status(201).send(announcements);
  } catch (error) {
    res.status(400).send({"message":"could not get announcements"})
  }
};
export const updateAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).send(announcement);
  } catch (error) {
    res.status(400).send({"message":"could not update announcement"})
  }
};
export const deletAnnouncement = async (req, res) => {
  try {
    await Announcement.findByIdAndDelete(req.params.id);
    res.send({ message: "Announcement deleted" });
  } catch (error) {
    res.status(400).send({"message":"could not delete announcement"})
  }
};
