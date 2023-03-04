import { Box, Button } from "@mui/material";
import { categories } from "./utils/constants";
import { Link } from "react-router-dom";

export default function Sidebar({ active, catSelected, setcatSelected }) {
  return (
    <Box
      className="sidebar"
      sx={{
        padding: "10px 15px",
        width: { xs: "85px", md: active ? "220px" : "85px" },
        position: "fixed",
        top: "55px",
        bottom: "0px",
        backgroundColor: "#202425",
        overflowY: "scroll",
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        {categories.map((cat, i) => {
          return (
            <Link key={i} to={"/"}>
              <Button
                onClick={() => {
                  setcatSelected(cat.name);
                }}
                variant={catSelected === cat.name ? "contained" : ""}
                color="error"
                sx={{
                  whiteSpace: "nowrap",
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                  backgroundColor: catSelected === cat.name ? "red" : "",
                }}
              >
                <span
                  style={{ color: catSelected === cat.name ? "white" : "" }}
                >
                  {cat.icon}
                </span>
                <span
                  style={{
                    marginLeft: 15,
                    color: catSelected === cat.name ? "white" : "gray",
                  }}
                >
                  {cat.name}
                </span>
              </Button>
            </Link>
          );
        })}
      </div>
    </Box>
  );
}
