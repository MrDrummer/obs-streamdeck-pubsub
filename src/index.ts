import { PubSub } from "@google-cloud/pubsub"
import { publisher, secrets } from "./config"

const pubSubClient = new PubSub({
  credentials: publisher,
  projectId: publisher.project_id
})

interface PubSubMessage {
  identity: string
  rawCommand: string
}

console.log("process.argv :", process.argv)
const rawCommand = process.argv.slice(2).join(" ")

console.log("rawCommand :", rawCommand)

const pubSubMessage: PubSubMessage = {
  rawCommand,
  identity: "MrDrummer25"
}

pubSubClient.topic(secrets.pubsub.subscriber).publish(Buffer.from(JSON.stringify(pubSubMessage)))
