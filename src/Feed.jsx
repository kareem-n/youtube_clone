import { Box, CircularProgress, Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { apiContext } from "./context/api";
import VideoCard from "./VideoCard";

export default function Feed({ sidebarActive, catSelected }) {
  const data = useContext(apiContext);

  const [vidios, setVideos] = useState(null);

  const receiveData = () => {
    data(`search?part=snippet&q=${catSelected}`).then((dataa) => {
      setVideos(dataa.items);
    });
  };

  useEffect(() => {
    receiveData();
  }, []);

  useEffect(() => {
    setVideos(null);
    receiveData();
  }, [catSelected]);

  return (
    <Stack
      sx={{
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      {vidios ? (
        vidios.map((vid, i) => <VideoCard key={i} vid={vid} />)
      ) : (
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
      )}
    </Stack>
  );
}
