
require('dotenv').config()
const request = require('superagent')
const WEBHOOK_URL = process.env.INCOMING_WEBHOOK_URL

request
    .post(WEBHOOK_URL)
    .send({
        text:'Welcome to the Incoming Webhooky'
    })
    .end((err,res)=>{
        if(err){
            console.log(err)
        }else{
            console.log(res)
        }

    })
