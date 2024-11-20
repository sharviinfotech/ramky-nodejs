const axios = require('axios')

module.exports = (() => {
    return {
        getAllReports: async (req, res) => {
            console.log('get in into final method')
            const userData = req.body; 
           
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
                console.info('salesData',salesData)
                res.json(salesData); // Send the sales data as JSON to the Angular frontend
              } catch (error) {
                res.status(500).send("Error fetching data: " + error.message);
              }
            
           
        },
        createUser: (req, res) => {
            const { name, email } = req.body;
            res.json({ message: 'User created', data: { name, email } });
        },
    };
})();
