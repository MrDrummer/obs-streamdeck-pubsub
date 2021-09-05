import { PubSub } from "@google-cloud/pubsub"
import { subscriber } from "./config"

const pubSubClient = new PubSub({
  credentials: subscriber,
  projectId: subscriber.project_id
})

pubSubClient.subscription("nsf-streamdeck-sub").on("message", message => {
  message.ack()
  const msg = Buffer.from(message.data, "base64").toString()
  console.log("msg :", msg)
})
console.log("READY")
// setInterval(function () {
//   //
// }, 5000)
