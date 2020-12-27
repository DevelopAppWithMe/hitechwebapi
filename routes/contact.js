import contact from '../database/modals/contact'

let router = require('express').Router()
let ContactUs = require('../database/modals/contact')

let validateContact = (contactInfo) => {
    if (contactInfo.name && contactInfo.email && contactInfo.phoneNum) {
        return contactInfo
    }
    return null
}

router.post('/createContact', (req, res, next) => {
    let contactDetail = validateContact(req.body)
    if (contactDetail == null) {
        return res.status(400).json({
            result: true,
            msg: 'You have subbmitted wrong object',
        })
    }
    contact = new ContactUs({
        timestamp: Date.now().toString(),
        name: contactDetail.name,
        email: contactDetail.email,
        phoneNum: contactDetail.phoneNum,
    })

    contact.save((err, obj) => {
        if (err) {
            next(err)
        } else {
            console.log('contact added successfully')
            res.send({
                result: true,
                msg: 'conatct was subbmitted successfully',
            })
        }
    })
})

router.delete('/deleteContact/:contactId', (req, res) => {
    let { contactId } = req.params

    if (!contactId) {
        return res.status(400).send({
            result: false,
            msg: 'no contact id was given',
        })
    }

    contact.remove({ _id: contactId }, (err) => {
        if (err) {
            next(err)
        } else {
            return res.send({
                result: true,
                msg: 'the message was deleted successfully',
            })
        }
    })
})

export default router
