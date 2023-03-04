import { Routes, Route } from "react-router-dom";
import { Stack } from "@mui/material";
import Navbar from "./compenents/Navbar";
import Video from "./compenents/Video";
import Channel from "./compenents/Channel";
import Search from "./compenents/Search";
import Feed from "./Feed";
import { useEffect, useState } from "react";

export default function App() {
  const [sidebarActive, setSidebarActive] = useState(true);
  const [catSelected, setcatSelected] = useState("New");

  return (
    <>
      <Navbar
        catSelected={catSelected}
        setcatSelected={setcatSelected}
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive}
      />
      <Stack
        sx={{
          flexDirection: "row",
          marginLeft: { xs: "85px", md: sidebarActive ? "220px" : "85px" },
          transition: "0.5s",
          padding: "50px",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Feed catSelected={catSelected} sidebarActive={sidebarActive} />
            }
          />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="/search/:searchTerm" element={<Search />} />
          <Route path="*" element={<Feed />} />
        </Routes>
      </Stack>
    </>
  );
}
