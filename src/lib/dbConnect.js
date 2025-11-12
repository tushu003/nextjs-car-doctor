import { MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://services-user:C6o79Rc4DdTRJ2d9@cluster0.jlzgpsq.mongodb.net/?appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export default function dbConnect(collectionName){
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      return client.db("services").collection(collectionName)
}


