import { MongoClient } from "mongodb";

async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://takaaki_ando:md8FMV9L7xvGpW5W@cluster0.ubtxwoi.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    await client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
