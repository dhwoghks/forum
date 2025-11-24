import { connectDB } from "@/util/database"
import ListItem from './ListItem.js'

export const dynamic ='force-dynamic'
export default async function List() {

    const client = await connectDB;
    const db = client.db('Forum');
    let result = await db.collection('post').find().toArray();

    
    
    return (
      <div className="list-bg">
        <ListItem result={result}></ListItem>
      </div>
    )
  } 
