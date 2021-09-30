const express = require('express')
const router = express.Router()
const Critter = require('../models/holiday.js')

// ======================================================
//       ROUTERS
// ======================================================

// 7. Create a 'CREATE' Route (POST) & test in Postman
//CREATE ROUTE
router.post('/', async (req, res) => {
  try{
    const newCritter = await Critter.create(req.body)
    res.status(200).json(newCritter)
  } cath(err) {
      res.status(400).json({
        error: err.message
      })
  }
})

// 8. Create an 'INDEX' Route (GET) & test in Postman
//INDEX ROUTE
router.get('/', async (req, res) => {
  try {
    const allCritters = await Critter.find();
    res.status(200).json(allCritters)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

// 9. Create a 'SHOW' Route (GET) & test in Postman
//SHOW ROUTE
router.get('/:id', async (req, res) =>{
  try {
    res.status(200).json({ message: req.params.id })
  }catch(err){
    res.status(400).json({
      error: err.message
    })
  }
})
// 10. Create an 'UPDATE' Route (PUT) & test in Postman
//UPDATE ROUTE
router.put('/:id', async (req, res) => {
  try {
    const updatedCritter = await Critter.findByIdAndUpdate(req.params.id, req.body, { new: true })
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

// 11. Create a 'DESTROY' Route (DELETE) & test in Postman
//DELETE ROUTE
router.delete('/:id', async (req, res) => {
  try {
    const deletedCritter = await Critter.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedCritter)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router
