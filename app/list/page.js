import { connectDB } from "@/util/database"
import Link from 'next/link'
import DetailLink from './DetailLink'

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
                <Link href={"/detail/"+data._id}><h4>{data.title}</h4></Link>
                {/* <DetailLink></DetailLink> */}
                <Link href={'/edit/'+data._id}>Remake</Link>
                <p>{data.contents}</p>
              </div>
            )
          })
        }
      </div>
    )
  } 
