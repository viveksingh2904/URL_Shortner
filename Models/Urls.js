import mongoose from "mongoose";
import {shortUrl} from "../Controllers/url.js";

const urlSchema = new mongoose.Schema({
    shortCode:String,
    longUrl:String
})

export const Url = mongoose.model("shortURL", urlSchema)