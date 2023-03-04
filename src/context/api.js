import axios from "axios";
import { createContext, useState } from "react";

export const apiContext = createContext(0);

export function ApiContextProvider(props) {
  const baseUrl = "https://youtube-v31.p.rapidapi.com/";

  const options = {
    method: "GET",
    params: {
      type: "video",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "7d6aa3359bmsh0f8c8370b683a44p1cfc8fjsnc166599e7d4a",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const apiFun = async (url) => {
    const { data } = await axios.request(`${baseUrl}${url}`, options);
    return data;
  };

  return (
    <apiContext.Provider value={apiFun}>{props.children}</apiContext.Provider>
  );
}
