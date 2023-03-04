import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { apiContext } from "./../context/api";
import { useState } from "react";
import { Box, Button, CardMedia, CircularProgress, Stack, Typography } from "@mui/material";
import VideoCard from "../VideoCard";

export default function Channel() {
  const { id } = useParams();
  const data = useContext(apiContext);

  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState(null);

  useEffect(() => {
    data(`channels?part=snippet&id=${id}`).then((result) => {
      setChannelDetail(result.items[0]);
    });

    data(`search?channelId=${id}&part=snippet&order=date`).then((result) => {
      setChannelVideos(result.items);
    });
  }, [id]);

  return (
    <Box sx={{ width: "100%" }}>
      {channelDetail !== null && channelVideos !== null ? (
        <Box>
          <CardMedia
            component="img"
            width="100%"
            height="230px"
            image={channelDetail.brandingSettings.image.bannerExternalUrl}
            title={channelDetail.snippet.title}
          />
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent="space-between"
            sx={{ padding: "10px 60px" }}
          >
            <Stack flexDirection="row" alignItems="center">
              <CardMedia
                component="img"
                sx={{ width: "100px", borderRadius: "50%" }}
                height="100px"
                image={channelDetail.snippet.thumbnails.high.url}
                title={channelDetail.snippet.title}
              />
              <Box sx={{ marginLeft: "15px" }}>
                <Typography variant="h5">
                  {channelDetail.snippet.title}
                </Typography>
                <Typography color={"gray"}>
                  {channelDetail.snippet.customUrl}
                </Typography>
                <Typography color={"gray"}>
                  {channelDetail.statistics.subscriberCount} subscriber
                </Typography>
              </Box>
            </Stack>
            <Button color="primary" variant="contained">Subscribe</Button>

          </Stack>

          <Stack
            sx={{
              flexWrap: "wrap",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: "50px",
            }}
          >
            {channelVideos.map((vid, i) => {
              return <VideoCard key={i} vid={vid} />;
            })}
          </Stack>
        </Box>
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
