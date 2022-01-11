const { Schema, model } = require('mongoose')

const Usercomment = new Schema({
  body: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'post'
  }
})

module.exports = model('usercomment', Usercomment)
