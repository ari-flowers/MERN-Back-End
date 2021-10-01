const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000
require('./db/db')
const cors = require("cors");
//cors
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};


// ======================================================
//       MIDDLEWARE
// ======================================================

app.use(cors(corsOptions));
const crittersController = require('./controllers/critters.js')

app.use(express.json())
app.use('/critters', crittersController)


//=======================================================
//        LISTENERS
//=======================================================

app.listen(PORT, () => {
  console.log('👁 👄👁', `We are live on ${PORT}`);
})
