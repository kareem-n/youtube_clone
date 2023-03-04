import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { apiContext } from "./../context/api";
import { useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import VideoCard from "../VideoCard";

export default function Channel() {
  const { searchTerm } = useParams();
  const data = useContext(apiContext);

  const [searchVideos, setSearchVideos] = useState(null);

  useEffect(() => {
    data(`search?part=snippet&q=${searchTerm}`).then((result) => {
      setSearchVideos(result.items);
    });
  }, [searchTerm]);

  return (
    <Box sx={{ width: "100%" }}>
      {searchVideos !== null && searchVideos !== null ? (
        <Stack flexDirection={'row'} justifyContent="space-between" flexWrap={'wrap'}> 
          {searchVideos.map((vid, i) => {
            return <VideoCard key={i} vid={vid} />;
          })}
        </Stack>
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress color="error" size={30} />
          </Box>
        </>
      )}
    </Box>
  );
}
