const express = require('express');
const { createLeadController, getLeadsController } = require('../controller/leadController');

const router = express.Router();

//Creation of new lead
router.post('/',createLeadController);

//Get all leads
router.get('/',getLeadsController)

module.exports = router;