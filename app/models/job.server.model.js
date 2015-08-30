'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Job Schema
 */
var JobSchema = new Schema({
  company: {
    type: String,
    default: '',
    required: 'Please fill in Company',
    trim: true
  },
  title: {
    type: String,
    default: '',
    required: 'Please fill Job title',
    trim: true
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  requirements: {
    type: String,
    default: '',
    trim: true
  },
  hourly_wage: {
    type: Number,
    default: '',
    trim: true
  },
  state: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: '',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Job', JobSchema);