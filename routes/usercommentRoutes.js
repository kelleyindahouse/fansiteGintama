const router = require('express').Router()
const { Usercomment, Post, User } = require('../models')
const passport = require('passport')

// GET all user comments
router.get('/usercomments', passport.authenticate('jwt'), async function (req, res) {
  const usercomments = await Usercomment.find({}).populate('user')
  res.json(usercomments)
})

// POST one comment
router.post('/usercomments', passport.authenticate('jwt'), async function (req, res) {
  const usercomment = await Usercomment.create({ ...req.body, user: req.user._id, post: req.body.post._id })
  await User.findByIdAndUpdate(req.user._id, { $push: { usercomments: usercomment._id } })
  res.json(usercomment)
})

module.exports = router
