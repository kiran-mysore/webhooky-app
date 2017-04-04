require('dotenv').config()

const text = process.env.TEXT
const emoji = process.env.ICON_EMOJI
const link = process.env.LINK 
const toUser = process.env.TOUSER
  /*
  Outgoing webhooks differ from the incoming webhooks in that they send data out of Slack and to a service of your choosing, which in turn can send response message to the Slack channel.
  */

  // Slack settings in “https://my.slack.com/apps/build/custom-integration”
  /* Settings : 1. Select the channel
                2. Trigger word
                3. URL(s)
                4. Cutomize name
                5. Icon or emoji
  */



  const http = require('http')
  http.createServer((req,res)=>{
      res.writeHead(200,{
          'Content-type':'text/plain'
      })

      // Get the request 
      req.on('data',(chunk)=>{
          console.log('Body :', chunk.toString().split('&'))
      })

      // Send a response to the slack
      let responseToSlack = JSON.stringify({
          username:toUser,
          icon_emoji:':runner:',
          text: `${text} ${link}` // Here, text : <any text> + <any weblink>
      })

      res.end(responseToSlack)

  }).listen(8080,'0.0.0.0')

  console.log('Server running at : http://0.0.0.0:8080')  