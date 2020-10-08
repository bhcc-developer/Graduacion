const express = require('express')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const cors = require('cors')

const app = express();
require('./database')

app.set('port', process.env.PORT || 4000)

const storage = multer.diskStorage({
    destination: path.join(__dirname,'/Archivos'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname))
    }
})

app.use( multer({storage}).single('image') )


app.use( morgan('dev') )
app.use( express.json())
app.use( cors() )


// app.use( '/api', require('./routes/upload-images') )
app.use( '/api', require('./routes/auth.route'))

app.use( express.static(path.join(__dirname, 'Archivos')))

app.listen(app.get('port'), () => {
    console.log(`Server on PORT ${app.get('port')}`)
})