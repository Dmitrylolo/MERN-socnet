const express = require('express');
const router = express.Router();

//@router GET api/posts/test
//@desc Tetst post route
//@access Public
router.get('/test', (req, res) => res.json({ msg: 'posts works' }));

module.exports = router;
