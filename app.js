// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const axios = require("axios");

// const app = express();
// const port = 3000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// const SAP_API_URL = "http://10.10.10.50:8001/drum/demo?sap-client=400";

// // Route to fetch material data based on material type
// app.get("/api/material/:materialType", async (req, res) => {
//   const { materialType } = req.params;

//   try {
//     const response = await axios.get(
//       `${SAP_API_URL}&materialType=${materialType}`
//     );
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching material data:", error.message);
//     res.status(500).json({ error: "Error fetching material data from SAP" });
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

// Middleware
app.use(bodyParser.json());
app.use(cors());

const SAP_API_URL = "http://10.10.10.50:8001/drum/demo?sap-client=400";
const USERNAME = "BALA";  // actual username
const PASSWORD = "Sharvi#B2024";  // actual password

function getAuthHeader() {
  return `Basic ${Buffer.from(`${USERNAME}:${PASSWORD}`).toString("base64")}`;
}

// Route to handle POST request and fetch material data from SAP API
app.post("/api/material", async (req, res) => {
  const materialData = req.body;

  try {
    const response = await axios.post(SAP_API_URL, materialData, {
      headers: {
        Authorization: getAuthHeader(),
        "Content-Type": "application/json",
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching material data from SAP:", error.message);
    res
      .status(error.response?.status || 500)
      .json({ error: "Error fetching material data from SAP" });
  }
});

// Route to handle POST request for updating material data in SAP
app.post("/api/material/update", async (req, res) => {
  const {
    MATNR,
    MTART,
    MEINS,
    WERKS,
    LGORT,
    CHARG,
    VBELN,
    POSNR,
    CLABS,
    GEWEI,
    SPLIT,
    PDATE,
    IHREZ,
    ZFG,
    ZLVCONDARESQMM,
    ZLVNOFCORE,
    ZLVVOLTAGEGRADE,
    ZLVTYPEOFCONDUCTOR,
    ZLVTYPEOFINSULATION,
    ZLVINNERSHTYPE,
    ZLVINNERSHRMGRADE,
    ZLVINNERSHCOLOUR,
    ZLVARMOUREDTYPE,
    ZLVOUTERSHRMGRADE,
    ZLVOUTERSHCOLOUR,
    DLGORT,
    DCHARG,
    DCLABS,
  } = req.body; // Expecting these fields from the frontend

  // Construct the payload for SAP API
  const updatePayload = {
    MATNR,
    MTART,
    MEINS,
    WERKS,
    LGORT,
    CHARG,
    VBELN,
    POSNR,
    CLABS,
    GEWEI,
    SPLIT,
    PDATE,
    IHREZ,
    ZFG,
    ZLVCONDARESQMM,
    ZLVNOFCORE,
    ZLVVOLTAGEGRADE,
    ZLVTYPEOFCONDUCTOR,
    ZLVTYPEOFINSULATION,
    ZLVINNERSHTYPE,
    ZLVINNERSHRMGRADE,
    ZLVINNERSHCOLOUR,
    ZLVARMOUREDTYPE,
    ZLVOUTERSHRMGRADE,
    ZLVOUTERSHCOLOUR,

    DLGORT,
    DCHARG,
    DCLABS,
    // Add other necessary fields for the update, depending on the SAP API requirements
  };

  try {
    const response = await axios.post(SAP_API_URL, updatePayload, {
      headers: {
        Authorization: getAuthHeader(),
        "Content-Type": "application/json",
      },
    });

    // Assuming SAP API returns a success response upon updating data
    if (response.status === 200) {
      res.status(200).json({ message: "Data updated successfully" });
    } else {
      res.status(response.status).json({ error: "Failed to update data" });
    }
  } catch (error) {
    console.error("Error updating material data in SAP:", error.message);
    res
      .status(error.response?.status || 500)
      .json({ error: "Error updating material data in SAP" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
