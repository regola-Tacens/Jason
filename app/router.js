const express = require('express');
const router = express.Router();

const argonauteController = require('./controllers/argonauteController');

// router.get('/argonautes', (req,res)=> {
//     res.send('ok');
// });

router.get('/argonautes',argonauteController.getAllArgonautes);
router.post('/argonautes',argonauteController.createArgonaute);
router.delete('/argonautes/:id',argonauteController.deleteArgonaute);

module.exports = router;