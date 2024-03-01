import React from "react";

function ButtonRow() {
  return (
    <div style={{textAlign: "center", marginTop: "10px"}}>
      <div style={{display: "flex", justifyContent: "center", gap: "20px", alignItems: "center"}}>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.25 12H3.75"
              stroke="#4691F2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5 5.25L3.75 12L10.5 18.75"
              stroke="#4691F2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.767 11.169C2.98149 11.1657 2.31032 10.9586 1.7535 10.5476C1.19669 10.1366 0.770787 9.53835 0.475806 8.75284C0.180825 7.96733 0.0333342 7.02107 0.0333342 5.91406C0.0333342 4.81037 0.180825 3.86742 0.475806 3.08523C0.774101 2.30303 1.20166 1.70644 1.75848 1.29545C2.31861 0.884469 2.98812 0.678977 3.767 0.678977C4.54588 0.678977 5.21373 0.886126 5.77055 1.30043C6.32737 1.71141 6.75327 2.308 7.04825 3.0902C7.34654 3.86908 7.49569 4.81037 7.49569 5.91406C7.49569 7.02438 7.3482 7.9723 7.05322 8.75781C6.75824 9.54001 6.33234 10.1383 5.77552 10.5526C5.2187 10.9635 4.5492 11.169 3.767 11.169ZM3.767 9.84162C4.45639 9.84162 4.99498 9.50521 5.38277 8.83239C5.77386 8.15956 5.96941 7.18679 5.96941 5.91406C5.96941 5.06889 5.87993 4.35464 5.70095 3.77131C5.52529 3.18466 5.27173 2.74053 4.94029 2.43892C4.61217 2.134 4.22107 1.98153 3.767 1.98153C3.08092 1.98153 2.54233 2.3196 2.15123 2.99574C1.76013 3.67187 1.56293 4.64465 1.55961 5.91406C1.55961 6.76255 1.64744 7.48011 1.82311 8.06676C2.00208 8.65009 2.25564 9.09257 2.58376 9.39418C2.91189 9.69247 3.3063 9.84162 3.767 9.84162ZM12.9823 0.818182V11H11.4411V2.35938H11.3814L8.94536 3.95028V2.47869L11.4858 0.818182H12.9823Z"
              fill="#1D2026"
            />
          </svg>
        </div>
        <div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#4691F2" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="16"
              fill="rgba(255, 255, 255, 1)"
            >
              02
            </text>
          </svg>
        </div>
        <div>
          {" "}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="16"
            fill="rgba(255, 255, 255, 1)"
          >
            03
          </text>
        </div>
        <div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#EAF3FF" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="16"
              fill="rgba(70, 145, 242, 1)"
            >
              04
            </text>
          </svg>
        </div>
        <div>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="16"
            fill="black"
          >
            05
          </text>
        </div>
        <div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 12H20.25" stroke="#4691F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#4691F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
      </div>
    </div>
  );
}

export default ButtonRow;
