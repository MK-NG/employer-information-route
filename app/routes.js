const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/aware-answer', function (req, res) {
  var aware = req.session.data.aware
  if (aware === 'yes') {
    res.redirect('/placeholder')
  } else {
    res.redirect('/business-size')
  }
})

module.exports = router
