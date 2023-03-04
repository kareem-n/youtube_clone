import { Paper, IconButton, Box } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();

    if (searchTerm !== "") {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: { xs:"250px" , sm: "400px", md: "450px" },
        height:{xs:'30px' , sm:'35px'},
        borderRadius: 200,
        border: "1px solid #fff",
        paddingLeft: "15px",
        display:'flex' , 
      }}
    >
      <Box
        sx={{
          width: { xs: "90%" },
          height: '100%',
          display:'flex' , 
          alignItems:'center'
        }}
      >
        <input
          style={{
            width: "100%",
            fontSize: 16,
            outline: 0,
            border: 0,
          }}
          type="text"
          placeholder="search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </Box>

      <IconButton type="submit" sx={{ color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
