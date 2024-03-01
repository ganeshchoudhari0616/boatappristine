import React, {useState} from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import {TextField, Typography, Grid, Container, InputLabel, InputAdornment} from "@mui/material";

function MyForm() {
  return (
    <Container
      maxWidth="sm"
      div
      className="rounded-lg border-2  bg-white container"
      style={{height: "34em", width: "28em", display: "flex", flexDirection: "column", gap: "10px"}}
    >
      <Typography
        variant="h4"
        gutterBottom
        style={{fontSize: "1.5rem", fontWeight: "bold", marginTop: "30px", paddingBottom: "10px"}}
      >
        The best solution for your yachtify
      </Typography>

      <Typography
        variant="h7"
        gutterBottom
        className="font-poppins text-26 font-450 leading-38 tracking-normal text-left"
      >
        Book your ideal boat on Yachtify with ease and set sail on an unforgettable voyage with just
        one click.
      </Typography>

      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel style={{fontWeight: "bold", fontSize: "13px"}}>
              Place of departure
            </InputLabel>

            <TextField
              placeholder="Spain"
              fullWidth
              className="rounded-lg w-96 h-12"
              style={{borderRadius: "12px", width: "25em", height: "3rem"}}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              style={{fontWeight: "bold", fontSize: "13px"}}
              className="font-bold text-base"
            >
              Time
            </InputLabel>

            <TextField
              placeholder="Select Time"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarMonthRoundedIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel style={{fontWeight: "bold", fontSize: "13px"}}>Date</InputLabel>

            <TextField
              placeholder="15 february 2024"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccessTimeIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-lg focus:outline-none w-56">
                Search
              </button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default MyForm;
