const {connect} = require('mongoose')

connect('mongodb://localhost/graduacion',{
  useNewUrlParser:true,
  useUnifiedTopology:true ,
  useCreateIndex:true
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err))