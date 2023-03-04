import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { apiContext } from "../context/api";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { CheckCircle, Comment } from "@mui/icons-material";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import VideoCard from "./../VideoCard";
export default function Video() {
  const data = useContext(apiContext);
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [related, setRelated] = useState(null);

  const fetchData = (varr) => {
    data(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (result) => {
        setVideoDetail(result.items[0]);
        data(
          `search?relatedToVideoId=${result.items[0].id}&part=snippet&order=date`
        ).then((channelResult) => {
          setRelated(channelResult.items);
        });
      }
    );
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <>
      <Stack sx={{ width: "100%" }} flexDirection={"row"}>
        {videoDetail && related ? (
          <>
            <div style={{ width: "70%" }}>
              <ReactPlayer
                controls
                width={"100%"}
                url={`https://www.youtube.com/watch?v=${id}`}
              />
              {}
              <Box
                sx={{
                  padding: "20px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography width={"80%"} variant="h5">
                    {videoDetail.snippet.title}
                  </Typography>

                  <Typography variant="body1" color={"gray"}>
                    {videoDetail.statistics.viewCount} view
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "15px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CheckCircle
                      sx={{ fontSize: "14px", marginRight: "5px" }}
                    />

                    <Typography>
                      {" "}
                      {videoDetail.snippet.channelTitle}{" "}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", color: "gray" }}>
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      {videoDetail.statistics.likeCount}{" "}
                      <ThumbDownOffAltIcon sx={{ marginLeft: "10px" }} />{" "}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "10px",
                      }}
                    >
                      {videoDetail.statistics.likeCount}{" "}
                      <Comment sx={{ marginLeft: "10px" }} />{" "}
                    </Typography>
                  </Box>
                </div>
                <div style={{ marginTop: "20px", color: "#bdbdbd" }}>
                  {videoDetail.snippet.description}
                </div>
              </Box>
            </div>

            <Stack sx={{ width: "30%", padding: "0 20px" }}>
              {related.map((vid ,i) => (
                <VideoCard key={i} vid={vid} fullWidth={true} />
              ))}
            </Stack>
          </>
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
      </Stack>
    </>
  );
}
