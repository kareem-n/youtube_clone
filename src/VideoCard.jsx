import { Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function VideoCard({ vid , fullWidth }) {
  const vidDetial = vid.snippet;

  return (
    <Card
      className="card"
      sx={{ width: fullWidth ? '100%' : { xs: "100%" , sm:'49%' , md:'49%' , lg:'24%'}, overflow: "hidden", color: "white" }}
    >
      <Link to={`/video/${vid.id.videoId}`}>
        <CardMedia
          component="img"
          width="100%"
          image={vidDetial.thumbnails.high.url}
          title={vidDetial.title}
        />
        <CardContent>
          <Stack>
            <Typography
              sx={{
                lineHeight: "1.5em",
                height: "3em",
                overflow: "hidden",
              }}
              variant="subtitle2"
            >
              {vidDetial.title}
            </Typography>
          </Stack>
          <Link to={`/channel/${vidDetial.channelId}`}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CheckCircle sx={{ fontSize: "14px", marginRight: "5px" }} />
              <Typography
                sx={{
                  lineHeight: "1.5em",
                  height: "3em",
                  overflow: "hidden",
                  color: "gray",
                  display: "flex",
                  alignItems: "center",
                }}
                variant="body2"
              >
                {vidDetial.channelTitle}
              </Typography>
            </Stack>
          </Link>
        </CardContent>{" "}
      </Link>
    </Card>
  );
}
