// api/blocks.js
const router = require('express').Router();

// matches GET requests to /api/blocks/
router.get('/', function (req, res, next) {
  res.send("BLOCKS")
})
// matches POST requests to /api/blocks/
router.post('/', function (req, res, next) {
})
// matches PUT requests to /api/blocks/:blockId
router.put('/:blockId', function (req, res, next) {
})
// matches DELETE requests to /api/blocks/:blockId
router.delete('/:blockId', function (req, res, next) {
})

module.exports = router;
