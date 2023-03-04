import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { logo } from "./../utils/constants";
import SearchBar from "./SearchBar";
import Auth from "./Auth";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";
import Sidebar from "./../Sidebar";
const Navbar = ({
  sidebarActive,
  setSidebarActive,
  catSelected,
  setcatSelected,
}) => {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          backgroundColor: "#202425",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "7px 25px",
          position: "sticky",
          top: "0px",
        }}
      >
        <Stack direction={"row"} alignItems="center">
          <IconButton
            onClick={() => {
              sidebarActive ? setSidebarActive(false) : setSidebarActive(true);
            }}
            color="error"
            sx={{ marginRight: "15px" }}
          >
            <MenuIcon sx={{ color: "gray" }} />
          </IconButton>
          <Link style={{ display: "flex" }} to={"/"}>
            <img src={logo} height="35" alt="" />
          </Link>
        </Stack>

        <SearchBar />
        <Box
          sx={{
            display: {xs:'none', sm: "none", md: "block" },
          }}
        >
          <Auth />
        </Box>
      </Stack>
      <Sidebar
        catSelected={catSelected}
        setcatSelected={setcatSelected}
        active={sidebarActive}
      />
    </>
  );
};

export default Navbar;
