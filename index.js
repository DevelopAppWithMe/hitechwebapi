let express = require('express')
let helmet = require('helmet')
let morgan = require('morgan')

let isDev = process.env.NODE_ENV !== 'production'

require('./database')

let app = express()

//middlewares
app.use(helmet())
app.use(morgan('common'))
app.use(express.static('public'))

let errorHandler = (err, req, res, next) => {
    if (isDev) {
        res.send({
            result: true,
            msg: ' 🤣🤣 there was some error !!! fix it as soon as possible',
            stack: err.stack,
        })
    } else {
        res.send({
            result: false,
            msg: 'there was some error and we will fix it as soon as possible',
        })
    }
}

app.use(errorHandler)

let PORT = 3001
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
