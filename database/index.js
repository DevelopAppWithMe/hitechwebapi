let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/hitechweb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.once('open', () => {
    console.log('connected to database successfully')
})

db.once('error', () => {
    console.log('there was some error during connecting to the database')
})
