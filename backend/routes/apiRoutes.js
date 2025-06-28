const express = require('express');
const router = express.Router();
const okrController = require('../controllers/okrController');

router.get('/okrs', okrController.getAllOKRs);
router.post('/okrs', okrController.createOKR);
router.put('/okrs/:id', okrController.updateOKR);
router.delete('/okrs/:id', okrController.deleteOKR);

module.exports = router;
