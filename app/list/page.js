import { connectDB } from "@/util/database"
import Link from 'next/link'

export default async function List() {

    const client = await connectDB;
    const db = client.db('Forum');
    let result = await db.collection('post').find().toArray();


    
    return (
      <div className="list-bg">
        {
          result.map((data,num) =>{
            return (
              <div className="list-item" key={num}>
                <Link href={"http://localhost:3000/detail/"+data._id}>{data.title}</Link>
                <p>{data.contents}</p>
              </div>
            )
          })
        }
      </div>
    )
  } 
