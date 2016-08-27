/**
 * Created by MAShahsavand on 8/21/16 AD.
 */

var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var EventSchema = new mongoose.Schema({
    id : String
});