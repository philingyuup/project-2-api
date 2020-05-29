'use strict'

const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},
{
  timestamps: true,
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
})

// many items to one list
listSchema.virtual('items', {
  ref: 'Item',
  localField: '_id',
  foreignField: 'list'
})

module.exports = mongoose.model('List', listSchema)
