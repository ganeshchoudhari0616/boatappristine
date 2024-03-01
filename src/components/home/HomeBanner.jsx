import React from "react";
import {InputLabel, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

function HomeBanner() {
  const bannerStyle = {
    backgroundImage:
      'url("https://s3-alpha-sig.figma.com/img/0c22/6ce0/279ad47fee1f48dcd8b4e2fc07723731?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pl0-x9YOwq8lmcG4bZxd6BBkd9bJOjq1sQ~vpGMrYHB24M~C4NuE14L0Rm5tl8-NAJ6R97BEj8SbkZqcC32XPMcJAZ2YLuHuW4gCyU~JVHDl7JXvr-Ur0UxNsn~gSKMYJKOyAx7982RAD~cHUxd-Rp~ec~G2V3naJ1JK7KHlSOXLLvH~SekmV7IQ13BubvVAQbJj9m6FS9HoRsRQKT6coFhQXSN97HfHrmjlDi6eFNMn~tTUto4KCIsESq9VxO8DFadBav9-BVy989VcOMbISJvWnQdVVEf9vinDX1QWmfin-0W6pPYLd~cchOWvbZgJPJJ4fBKZnOC5hiN4ebct1Q__")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={{
        ...bannerStyle,
        width: "100%",
        textAlign: "center",
        height: "70vh",
        padding: "48px",
        color: "white",
      }}
    >
      
      <div className="flex justify-center flex-col h-[70vh] w-full">
      <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
        <h1 style={{fontWeight: "bold", fontSize: "3rem"}}>TO Rent a Boat Never Easy Before</h1>
        <span style={{fontSize: "26px", marginTop: "20px"}}>
          Select your preferences as per your convenience
        </span>
      </div>
      

    <div className="flex bg-white mx-auto text-black rounded-full justify-around h-20 w-[60em] items-center mt-14 ">
        <div className="flex p-18">
          <div>
            <InputLabel style={{fontWeight: "bold", marginRight: "50px"}}>
              Place to departure
            </InputLabel>
            <TextField
              placeholder="City to departure"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </div>
          <div className="border-2 border-black w-12 h-12 p-3 flex items-center justify-center rounded-full bg-gray-300">
            <GpsFixedIcon style={{color: "#3b82f6"}} />
          </div>
        </div>
        <div className="w-[2px] h-12 bg-gray-200"></div>
        <div className="flex flex-col">
          <InputLabel style={{fontWeight: "bold", marginRight: "130px"}}>Select date</InputLabel>
          <TextField
            placeholder="Select Dates"
            variant="standard"
            style={{height: "40px"}}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </div>
        <div className="w-[2px] h-12 bg-gray-200"></div>
        <div className="flex">
          <div>
            <InputLabel style={{fontWeight: "bold", marginLeft: "-88px"}}>Time</InputLabel>
            <TextField
              placeholder="Select Times"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </div>
          <div className="w-12 h-12 p-5 flex items-center justify-center rounded-full bg-blue-500">
            <SearchIcon className="text-white text-3xl" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HomeBanner;
