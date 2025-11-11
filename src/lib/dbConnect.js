import { MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.jlzgpsq.mongodb.net/?appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export default function dbConnect(collectionName){
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      return client.db(services).collection(collectionName)
}


