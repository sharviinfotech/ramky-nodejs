// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const axios = require("axios");
// const app = express();
// const port = 3000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// const SAP_API_URL =
//   "http://sapsudevx01.ramky.net:8000/sales/revenue?sap-client=300";
// const USERNAME = "SIPL_QM"; // actual username
// const PASSWORD = "Mouni@2024"; // actual password

// function getAuthHeader() {
//   return `Basic ${Buffer.from(`${USERNAME}:${PASSWORD}`).toString("base64")}`;
// }

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// app.get("/api/sales-data", async (req, res) => {
//   try {
//     const data = {
//       RESULT: [
//         {
//           vkbur: "1034",
//           vkorg: "9000",
//           vbeln: "3000012007",
//           kunnr: "1041792",
//           matnr: " ",
//           budat: " ",
//           auart: "ZRS",
//         },
//       ],
//     };

//     const response = await axios.post(SAP_API_URL, data, {
//       auth: {
//         username: USERNAME,
//         password: PASSWORD,
//       },
//       headers: {
//         Authorization: getAuthHeader(),
//         "Content-Type": "application/json",
//       },
//     });

//     // Log the response structure for debugging (optional)
//     console.log(response.data);

//     // Process and send the response in a structured format
//     const result = response.data.map((item) => {
//       return {
//         Sales_Order: item.VBELN,
//         Sales_Office: item.VKBUR,
//         Sales_Office_Name: item.BEZEI_S,
//         Sales_Document_Type: item.AUART,
//         Document_Date: item.AUDAT,
//         Created_Date: item.ERDAT,
//         Pricing_Date: item.PRSDT,
//         Customer_Code: item.KUNNR,
//         Customer_Name: item.NAME1,
//         Reason_for_Rejection: item.REASON,
//         Material: item.MATNR,
//         Unit_Area: item.UMREN,
//         UOM: item.UOM,
//         Sales_Group: item.VKGRP,
//         Sales_Group_Name: item.BEZEI,
//         Sales_Executive: item.SALE_EXE,
//         Service_Tax: item.TAX1,
//         VAT: item.TAX2,
//         TDS: item.TAX3,
//         KKC: item.KKC,
//         SBC: item.SBC,
//         IGST: item.JOIG,
//         CGST: item.JOCG,
//         SGST: item.JOSG,
//         UGST: item.JOUG,
//         Car_Parking_No: item.CARP,
//         PO_Number: item.EBELN,
//         Development_Charges: item.DEV_CHG,
//         Base_Price: item.ZBAS,
//         UDS_Value: item.ZUDS,
//         Special_Discount: item.ZSPD,
//         Base_Price_Debit_Credit: item.ZBDC,
//         Amenities: item.ZAMN,
//         Free_Car_Parking: item.ZCAR,
//         Base_Cancellation: item.ZCLC,
//         Club_House: item.ZPEM,
//         Pre_EMI: item.ZPLC,
//         PLC_Value: item.ZFRP,
//         Floor_Rise: item.ZTAP,
//         Terrace_Area_Premium: item.ZTEA,
//         Terrace_View_Premium: item.ZTRA,
//         Transfer_Charges_Debit: item.ZTRP,
//         Transfer_Charges_Additional: item.ZWCG,
//         Main_Material: item.MAIN,
//         Material_Group: item.MATKL,
//         Material_Group1: item.MVGR1,
//         Material_Group2: item.MVGR2,
//         Material_Group3: item.MVGR3,
//         Main_WBS_Element: item.WBS_M,
//         Legal_Charges: item.LEG,
//         Corpus_Fund: item.COR,
//         Advance_Maintenance: item.ADV,
//         Paid_Car_Parking: item.CAR,
//         Water_Charges: item.WAT,
//         Electricity_Charge: item.ELE,
//         Electricity_Water_Charge: item.ELE1,
//         Modifications: item.MOD,
//         SO_Value: item.SO_VAL,
//         Amount_Invoiced: item.AMT_INV,
//         Percentage_Invoiced: item.PER_INV,
//         Amount_Received: item.AMT_REC,
//         Balance_Amount: item.BAL_AMT,
//         Source_of_Booking: item.KVGR2,
//         Referrer_Name: item.SOURCE_NAME,
//         Schemes: item.KVGR3,
//         Sale_Type: item.KVGR5,
//         Booking_Date: item.BSTDK,
//         Customer_PAN: item.CPAN,
//         Channel_Partner: item.CPAR,
//         CO_Applicant: item.COA,
//         CO_Applicant_PAN: item.COPAN,
//         Loan_Bank: item.BANKA,
//         Channel: item.CHANNEL,
//         Net_Value_Document_Currency: item.NETWR,
//         Loan_Number: item.LOAN_NUM,
//         Sanctioned_Date: item.SAN_DATE,
//         Agreement_Date: item.AD,
//         Registration_Date: item.RD,
//         Handover_Date: item.HD,
//         Sale_Deed_Number: item.SDN,
//         Aadhar_Number: item.AADHAR,
//         Booking_From: item.BOOKING,
//         Agreement_of_Sale: item.AGR_SALE,
//         Sale_Deed: item.SALE_DEED,
//         Additional_Document: item.AOD,
//         Handover_Possession: item.HAN_POS,
//         Customer_ID_Proof: item.CIP,
//         Sale_Deed_Acknowledgment: item.SALE_DEED_ACK,
//         TPT_NOC: item.TPT_NOC,
//         Sanction: item.SANCTION,
//         Loan_Application: item.LOAN_APP,
//         Interest_Paid: item.INT_PAY,
//         Transfer_Fee: item.TRAN_FEE,
//         Cancellation_Charges: item.CANC_CHRG,
//       };
//     });

//     // Send structured result to the client
//     res.status(200).json(result);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).send("An error occurred while fetching data.");
//   }
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const axios = require("axios");
// const app = express();
// const port = 3000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// const SAP_API_URL =
//   "http://sapsudevx01.ramky.net:8000/sales/revenue?sap-client=300";
// const USERNAME = "SIPL_QM";
// const PASSWORD = "Mouni@2024";
// function getAuthHeader() {
//   return "Basic " + Buffer.from(`${USERNAME}:${PASSWORD}`).toString("base64");
// }

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// app.get("/api/sales-data", async (req, res) => {
//   try {
//     // Prepare the request payload
//     const data = {
//       RESULT: [
//         {
//           vkbur: "1034",
//           vkorg: "9000",
//           vbeln: "3000012007",
//           kunnr: "1041792",
//           matnr: " ",
//           budat: " ",
//           auart: "ZRS",
//         },
//       ],
//     };
//     console.log("Sending request to SAP with data:", data);

//     // Make the API call to SAP system
//     const response = await axios.get(SAP_API_URL, data, {
//       headers: {
//         Authorization: getAuthHeader(),
//         "Content-Type": "application/json",
//       },
//     });

//     // Log the response for debugging (optional)
//     console.log("Response data:", response.data);

//     // Check if response data contains the RESULT array
//     const resultData = response.data || []; // Default to an empty array if no data

//     // Map over the array and structure the response for the client
//     const result = resultData.map((item) => ({
//       Sales_Order: item.VBELN,
//       Sales_Office: item.VKBUR,
//       Sales_Office_Name: item.BEZEI_S,
//       Sales_Document_Type: item.AUART,
//       Document_Date: item.AUDAT,
//       Created_Date: item.ERDAT,
//       Pricing_Date: item.PRSDT,
//       Customer_Code: item.KUNNR,
//       Customer_Name: item.NAME1,
//       Reason_for_Rejection: item.REASON,
//       Material: item.MATNR,
//       Unit_Area: item.UMREN,
//       UOM: item.UOM,
//       Sales_Group: item.VKGRP,
//       Sales_Group_Name: item.BEZEI,
//       Sales_Executive: item.SALE_EXE,
//       Service_Tax: item.TAX1,
//       VAT: item.TAX2,
//       TDS: item.TAX3,
//       KKC: item.KKC,
//       SBC: item.SBC,
//       IGST: item.JOIG,
//       CGST: item.JOCG,
//       SGST: item.JOSG,
//       UGST: item.JOUG,
//       Car_Parking_No: item.CARP,
//       PO_Number: item.EBELN,
//       Development_Charges: item.DEV_CHG,
//       Base_Price: item.ZBAS,
//       UDS_Value: item.ZUDS,
//       Special_Discount: item.ZSPD,
//       Base_Price_Debit_Credit: item.ZBDC,
//       Amenities: item.ZAMN,
//       Free_Car_Parking: item.ZCAR,
//       Base_Cancellation: item.ZCLC,
//       Club_House: item.ZPEM,
//       Pre_EMI: item.ZPLC,
//       PLC_Value: item.ZFRP,
//       Floor_Rise: item.ZTAP,
//       Terrace_Area_Premium: item.ZTEA,
//       Terrace_View_Premium: item.ZTRA,
//       Transfer_Charges_Debit: item.ZTRP,
//       Transfer_Charges_Additional: item.ZWCG,
//       Main_Material: item.MAIN,
//       Material_Group: item.MATKL,
//       Material_Group1: item.MVGR1,
//       Material_Group2: item.MVGR2,
//       Material_Group3: item.MVGR3,
//       Main_WBS_Element: item.WBS_M,
//       Legal_Charges: item.LEG,
//       Corpus_Fund: item.COR,
//       Advance_Maintenance: item.ADV,
//       Paid_Car_Parking: item.CAR,
//       Water_Charges: item.WAT,
//       Electricity_Charge: item.ELE,
//       Electricity_Water_Charge: item.ELE1,
//       Modifications: item.MOD,
//       SO_Value: item.SO_VAL,
//       Amount_Invoiced: item.AMT_INV,
//       Percentage_Invoiced: item.PER_INV,
//       Amount_Received: item.AMT_REC,
//       Balance_Amount: item.BAL_AMT,
//       Source_of_Booking: item.KVGR2,
//       Referrer_Name: item.SOURCE_NAME,
//       Schemes: item.KVGR3,
//       Sale_Type: item.KVGR5,
//       Booking_Date: item.BSTDK,
//       Customer_PAN: item.CPAN,
//       Channel_Partner: item.CPAR,
//       CO_Applicant: item.COA,
//       CO_Applicant_PAN: item.COPAN,
//       Loan_Bank: item.BANKA,
//       Channel: item.CHANNEL,
//       Net_Value_Document_Currency: item.NETWR,
//       Loan_Number: item.LOAN_NUM,
//       Sanctioned_Date: item.SAN_DATE,
//       Agreement_Date: item.AD,
//       Registration_Date: item.RD,
//       Handover_Date: item.HD,
//       Sale_Deed_Number: item.SDN,
//       Aadhar_Number: item.AADHAR,
//       Booking_From: item.BOOKING,
//       Agreement_of_Sale: item.AGR_SALE,
//       Sale_Deed: item.SALE_DEED,
//       Additional_Document: item.AOD,
//       Handover_Possession: item.HAN_POS,
//       Customer_ID_Proof: item.CIP,
//       Sale_Deed_Acknowledgment: item.SALE_DEED_ACK,
//       TPT_NOC: item.TPT_NOC,
//       Sanction: item.SANCTION,
//       Loan_Application: item.LOAN_APP,
//       Interest_Paid: item.INT_PAY,
//       Transfer_Fee: item.TRAN_FEE,
//       Cancellation_Charges: item.CANC_CHRG,
//     }));

//     // Send the structured result to the client
//     res.status(200).json(result);
//   } catch (error) {
//     console.error("Error fetching data from SAP:", error.message); // More specific message
//     if (error.response) {
//       console.error("Error response data:", error.response.data);
//       console.error("Error status:", error.response.status);
//       res.status(error.response.status).json({ message: error.response.data });
//     } else if (error.request) {
//       console.error("No response received:", error.request);
//       res.status(500).json({ message: "No response received from SAP API." });
//     } else {
//       console.error("Error message:", error.message);
//       res.status(500).json({ message: "An unexpected error occurred." });
//     }
//   }
// });

// const axios = require('axios');
// let data = JSON.stringify({
//   "RESULT": [
//     {
//       "vkbur": "1034",
//       "vkorg": "9000",
//       "vbeln": "3000012007",
//       "kunnr": "1041792",
//       "matnr": " ",
//       "budat": " ",
//       "auart": "ZRS"
//     }
//   ]
// });

// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: 'http://sapsudevx01.ramky.net:8000/sales/revenue?sap-client=300',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic U0lQTF9RTTpNb3VuaUAyMDI0',
//     'Cookie': 'sap-usercontext=sap-client=300'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Allow CORS requests

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
// Middleware to parse URL-encoded request bodies (form data)
app.use(express.urlencoded({ extended: true }));

// API call to get sales data
app.post("/api/sales-report", async (req, res) => {
  const userData = req.body; // Data sent by the user from Angular frontend
  // Ensure the body is not undefined
  if (!userData || !userData.vkbur) {
    return res.status(400).json({ error: "Invalid request body" });
  }
  console.log("Request body received:", userData);

  let data = JSON.stringify({
    RESULT: [
      {
        vkbur: userData.vkbur,
        vkorg: userData.vkorg,
        vbeln: userData.vbeln,
        kunnr: userData.kunnr,
        matnr: userData.matnr,
        budat: userData.budat,
        auart: userData.auart,
      },
    ],
  });

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://sapsudevx01.ramky.net:8000/sales/revenue?sap-client=300",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic U0lQTF9RTTpNb3VuaUAyMDI0",
      Cookie: "sap-usercontext=sap-client=300",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    const salesData = response.data;
    res.json(salesData); // Send the sales data as JSON to the Angular frontend
  } catch (error) {
    res.status(500).send("Error fetching data: " + error.message);
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
