import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import {InputLabel} from "@mui/material";

const GridContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  justifyContent: "center",
});

const data = [
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    number: "9",
    pets: "Pets aren't allowed",
    boatType: "Boat Type",
    price: "$200 Per Hour",
    src: "/public/images/Rectangle1.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    number: "9",
    pets: "Pets aren't allowed",
    boatType: "Boat Type",
    price: "$200 Per Hour",
    src: "/public/images/Rectangle2.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    number: "9",
    pets: "Pets aren't allowed",
    boatType: "Boat Type",
    price: "$200 Per Hour",
    src: "/public/images/Rectangle3.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    number: "9",
    pets: "Pets aren't allowed",
    boatType: "Boat Type",
    price: "$200 Per Hour",
    src: "/public/images/Rectangle4.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    number: "9",
    pets: "Pets aren't allowed",
    boatType: "Boat Type",
    price: "$200 Per Hour",
    src: "/public/images/Rectangle5.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    number: "9",
    pets: "Pets aren't allowed",
    boatType: "Boat Type",
    price: "$200 Per Hour",
    src: "/public/images/Rectangle6.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    number: "9",
    pets: "Pets aren't allowed",
    boatType: "Boat Type",
    price: "$200 Per Hour",
    src: "/public/images/Rectangle7.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    number: "9",
    pets: "Pets aren't allowed",
    boatType: "Boat Type",
    price: "$200 Per Hour",
    src: "/public/images/Rectangle8.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    number: "9",
    pets: "Pets aren't allowed",
    boatType: "Boat Type",
    price: "$200 Per Hour",
    src: "/public/images/Rectangle9.png",
  },
];

function BoatCard() {
  return (
    <>
      <GridContainer>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              border: "1px solid #C3C3C3",
              borderRadius: "17px",
              marginTop: "10px",
            }}
          >
            <div className="relative">
              
              <img src={item.src} alt={item.title} className="w-full h-full" />
              <FavoriteBorderRoundedIcon className="absolute top-0 right-0 mt-2 mr-2" />
            </div>
            <div className="ml-4">
              <p  component="div" className="text-base font-bold ">
                {item.title}
              </p>
              <div className="flex items-center">
                <LocationOnRoundedIcon className="text-gray-500 mr-1 h-4" />
                <Typography
                  variant="body2"
                  component="div"
                  style={{color: "rgba(79, 79, 79, 1)", fontSize: "12px"}}
                >
                  {item.address}
                </Typography>
              </div>
              <Typography variant="body2" component="div">
                <div className="flex justify-around">
                  <div className="flex gap-2">
                    <div>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_0_183)">
                          <path
                            d="M0.560547 10.9386C0.997549 10.2667 1.59545 9.71461 2.29997 9.3324C3.00449 8.95019 3.79332 8.75 4.59484 8.75C5.39636 8.75 6.18519 8.95019 6.88971 9.3324C7.59424 9.71461 8.19214 10.2667 8.62914 10.9386"
                            stroke="#4C4C4C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.40625 8.75C10.2077 8.74953 10.9966 8.9494 11.7012 9.33144C12.4058 9.71347 13.0037 10.2656 13.4405 10.9375"
                            stroke="#4C4C4C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.59375 8.75C6.16431 8.75 7.4375 7.47681 7.4375 5.90625C7.4375 4.33569 6.16431 3.0625 4.59375 3.0625C3.02319 3.0625 1.75 4.33569 1.75 5.90625C1.75 7.47681 3.02319 8.75 4.59375 8.75Z"
                            stroke="#4C4C4C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.34961 3.26484C8.73861 3.10969 9.15708 3.04238 9.57511 3.06771C9.99315 3.09304 10.4004 3.21039 10.7678 3.41137C11.1353 3.61235 11.4538 3.89201 11.7006 4.23036C11.9474 4.5687 12.1164 4.95739 12.1956 5.36864C12.2748 5.77989 12.2621 6.20355 12.1586 6.60934C12.055 7.01514 11.8631 7.39306 11.5966 7.7161C11.3301 8.03913 10.9955 8.29931 10.6167 8.47804C10.238 8.65676 9.82442 8.74963 9.40562 8.75"
                            stroke="#4C4C4C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_183">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div> {item.number} </div>
                  </div>

                  <div className="flex gap-2">
                    <div>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_0_191)">
                          <path
                            d="M11.5938 7C12.1978 7 12.6875 6.51031 12.6875 5.90625C12.6875 5.30219 12.1978 4.8125 11.5938 4.8125C10.9897 4.8125 10.5 5.30219 10.5 5.90625C10.5 6.51031 10.9897 7 11.5938 7Z"
                            stroke="#4C4C4C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.40625 7C3.01031 7 3.5 6.51031 3.5 5.90625C3.5 5.30219 3.01031 4.8125 2.40625 4.8125C1.80219 4.8125 1.3125 5.30219 1.3125 5.90625C1.3125 6.51031 1.80219 7 2.40625 7Z"
                            stroke="#4C4C4C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.03125 4.375C5.63531 4.375 6.125 3.88531 6.125 3.28125C6.125 2.67719 5.63531 2.1875 5.03125 2.1875C4.42719 2.1875 3.9375 2.67719 3.9375 3.28125C3.9375 3.88531 4.42719 4.375 5.03125 4.375Z"
                            stroke="#4C4C4C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.96875 4.375C9.57281 4.375 10.0625 3.88531 10.0625 3.28125C10.0625 2.67719 9.57281 2.1875 8.96875 2.1875C8.36469 2.1875 7.875 2.67719 7.875 3.28125C7.875 3.88531 8.36469 4.375 8.96875 4.375Z"
                            stroke="#4C4C4C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.00032 5.6875C6.57369 5.68766 6.15865 5.8264 5.81769 6.08284C5.47672 6.33927 5.22829 6.69953 5.10978 7.10938C4.93466 7.71218 4.52834 8.22132 3.97939 8.52578C3.58087 8.73826 3.27993 9.09658 3.1395 9.52581C2.99906 9.95504 3.03 10.4219 3.22584 10.8289C3.42169 11.2358 3.76728 11.5513 4.19034 11.7093C4.6134 11.8674 5.08119 11.8558 5.49587 11.6769C6.45955 11.2818 7.54001 11.2818 8.50368 11.6769C8.91837 11.8558 9.38615 11.8674 9.80921 11.7093C10.2323 11.5513 10.5779 11.2358 10.7737 10.8289C10.9696 10.4219 11.0005 9.95504 10.8601 9.52581C10.7196 9.09658 10.4187 8.73826 10.0202 8.52578C9.47151 8.22124 9.06556 7.71208 8.89087 7.10938C8.77236 6.69953 8.52392 6.33927 8.18296 6.08284C7.842 5.8264 7.42696 5.68766 7.00032 5.6875Z"
                            stroke="#4C4C4C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_191">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div> {item.pets} </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <div>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_0_198)">
                          <path
                            d="M10.0625 4.375H2.1875C1.94588 4.375 1.75 4.57088 1.75 4.8125V10.9375C1.75 11.1791 1.94588 11.375 2.1875 11.375H10.0625C10.3041 11.375 10.5 11.1791 10.5 10.9375V4.8125C10.5 4.57088 10.3041 4.375 10.0625 4.375Z"
                            stroke="#4C4C4C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.5 2.625H11.8125C11.9285 2.625 12.0398 2.67109 12.1219 2.75314C12.2039 2.83519 12.25 2.94647 12.25 3.0625V9.625"
                            stroke="#4C4C4C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_198">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div> {item.boatType} </div>
                  </div>
                </div>
              </Typography>
              <div className="w-98 h-px border-dotted border border-gray-300"></div>
              <div className="flex gap-2">
                <InputLabel style={{fontSize: "15px"}}>Price</InputLabel>
                <Typography variant="body2" component="div" className="text-blue-500">
                  {item.price}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </GridContainer>
    </>
  );
}

export default BoatCard;
