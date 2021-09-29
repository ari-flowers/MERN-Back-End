const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000



//=======================================================
//        LISTENERS
//=======================================================

app.listen(PORT, () => {
  console.log('👁 👄👁', `We are live on ${PORT}`);
})
