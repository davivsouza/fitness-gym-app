import axios from "axios";
export const Exercise_DB_URL = import.meta.env.VITE_EXERCISE_DB_API_URL
export const Youtube_Search_URL = import.meta.env.VITE_YOUTUBE_SEARCH_API_URL

export const exerciseOptions = {
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_EXERCISE_DB_RAPID_API_HOST
  }
};

export const youtubeSearchOptions = {
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_YOUTUBE_SEARCH_RAPID_API_HOST
  }
}

type OptionsRequest = typeof exerciseOptions

export async function fetchData(url: string, options: OptionsRequest){
  const response = await axios.get(url, options)
  const data = response.data
  return data
}