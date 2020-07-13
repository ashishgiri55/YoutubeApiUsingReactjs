import axios from "axios";
let KEY = "AIzaSyCuxCBDJEYzHo4gpSjuFPA76HzczHTPp1s";

export const baseParams = {
    part: "snippet",
    maxResults:10,
    key:KEY,

};

let YoutubeApi = axios.create({
    baseURL:"https:www.googleapis.com/youtube/v3",
   
});


export default YoutubeApi;