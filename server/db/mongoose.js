var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://shivam:btp231312@ds137891.mlab.com:37891/db2313'
};
mongoose.connect( process.env.PORT ? db.mlab : db.localhost);

//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
