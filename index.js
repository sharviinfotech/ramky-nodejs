// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const axios = require("axios"); // To make HTTP requests to SAP

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(cors());
// // SAP API Endpoint
// const SAP_API_URL = "http://10.10.10.50:8001/drum/demo?sap-client=400";

// // 1. Route to fetch material data from SAP based on material type
// app.get("/api/material/:materialType", async (req, res) => {
//   const { materialType } = req.params;

//   try {
//     // Call SAP API with materialType as a query parameter
//     const response = await axios.get(
//       `${SAP_API_URL}&materialType=${materialType}`
//     );

//     // Return the data fetched from SAP to the Angular frontend
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching material data:", error.message);
//     res.status(500).json({ error: "Error fetching material data from SAP" });
//   }
// });

// // 2. Route to submit reservation data to SAP
// app.post("/api/reservation", async (req, res) => {
//   const reservationData = req.body;

//   try {
//     // Call SAP API to submit reservation data (assuming POST request to SAP API)
//     const response = await axios.post(SAP_API_URL, reservationData, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     // Return the response from SAP (confirmation, etc.)
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error submitting reservation:", error.message);
//     res.status(500).json({ error: "Error submitting reservation to SAP" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const SAP_API_URL = "http://10.10.10.50:8001/drum/demo?sap-client=400";

// Route to fetch material data based on material type
app.get("/api/material/:materialType", async (req, res) => {
  const { materialType } = req.params;

  try {
    // Call SAP API with materialType
    const response = await axios.get(
      `${SAP_API_URL}&materialType=${materialType}`
    );

    // Return the fetched data to Angular frontend
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error fetching material data:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Error fetching material data from SAP" });
  }
});

// Route to submit reservation data
app.post("/api/reservation", async (req, res) => {
  const reservationData = req.body;

  try {
    // Call SAP API to submit reservation data (assuming POST request to SAP API)
    const response = await axios.post(SAP_API_URL, reservationData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Return the response from SAP
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error submitting reservation:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Error submitting reservation to SAP" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
