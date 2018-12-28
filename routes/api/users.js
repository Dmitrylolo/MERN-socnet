const express = require('express');
const router = express.Router();

//@router GET api/users/test
//@desc Tetst users route
//@access Public
router.get('/test', (req, res) => res.json({ msg: 'users works' }));

module.exports = router;
