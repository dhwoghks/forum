import { connectDB } from "@/util/database"


export default async function Home() {
  
  const client = await connectDB;
  const db = client.db('Forum');
  let result = await db.collection('post').find().toArray();
  // console.log(result);
  return (
    <div>
      <object data = "https://google.com" className = 'game'></object>
    </div>
  )
}
