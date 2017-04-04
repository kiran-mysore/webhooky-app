
require('dotenv').config()
const request = require('superagent')
const WEBHOOK_URL = process.env.INCOMING_WEBHOOK_URL
const fromUser = process.env.FROMUSER
const channel = process.env.CHANNEL
const text = process.env.TEXT
const emoji = process.env.ICON_EMOJI
const toUser = process.env.TOUSER
const link = process.env.LINK // We can use any link. In this case a github repo link for the app

/**
 Incoming webhooks are triggered by external sources : an example would be if a new user signs up to your   service or if a product is sold. The goal of the incoming webhook is to provide easy-to-reach and comprehensible information for your team.
 * */

  // Slack settings in “https://my.slack.com/apps/build/custom-integration”
  /* Settings : 1. Select the channel
                2. Get the webhook URL
                3. URL(s)
                4. Cutomize name
                5. Icon or emoji
  */
/*
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
*/

request
    .post(WEBHOOK_URL)
    .send({
        username:fromUser,
        //channel:channel,
        channel:toUser,
        icon_emoji:emoji,
        text: `${text} ${link}`
    })
    .end((err,res)=>{
        if(err){
            console.log(err)
        }else{
            console.log(res)
        }
    })

