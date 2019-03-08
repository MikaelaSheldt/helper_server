// api/blocks.js
const router = require('express').Router();

const {Block} = require('../db/models')

// matches GET requests to /api/blocks/
router.get('/', async (req, res, next) => {
  // res.send("DEFAULT BLOCKS")
  try {
    const blocks = await Block.findAll()
    res.json(blocks)
  } catch (err) {
    next(err)
  }
})

// matches POST requests to /api/blocks/
router.post('/', async (req, res, next) => {
  try {
    const block = await Block.create(req.body)
    res.json(block)
  } catch (err) {
    next(err)
  }
})

// matches GET requests to /api/blocks/:blockId
router.get('/:blockId', async (req, res, next) => {
  try {
    const block = await Block.findById(req.params.blockId)
    res.json(block)
  } catch (err) {
    next(err)
  }
})

// matches PUT requests to /api/blocks/:blockId
router.put('/:blockId', async (req, res, next) => {
  try {
    const block = await Block.findById(req.params.blockId)
    const updatedBlock = block.update(req.body)
    res.json(updatedBlock)
  } catch (err) {
    next(err)
  }
})
// matches DELETE requests to /api/blocks/:blockId
router.delete('/:blockId', async (req, res, next) => {
  try {
    const blocks = await Block.findAll()
    res.json(blocks)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
