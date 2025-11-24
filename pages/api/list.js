import { connectDB } from "@/util/database"


export default async function List(요청, 응답) {
  
    const client = await connectDB;
    const db = client.db('Forum');
    let result = await db.collection('post').find().toArray();
    if (요청.method == 'GET'){
        응답.status(200).json(result)
    }
    if (요청.method == 'POST'){
        응답.status(200).json({name: '바보'})
    }
  }