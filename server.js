const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000



// ======================================================
//       MIDDLEWARE
// ======================================================

const crittersController = require('./controllers/critters.js')
app.use(express.json())
app.use('/critters', crittersController)

//=======================================================
//        LISTENERS
//=======================================================

app.listen(PORT, () => {
  console.log('👁 👄👁', `We are live on ${PORT}`);
})
