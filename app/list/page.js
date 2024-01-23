import { connectDB } from "@/util/database"


export default async function List() {

    const client = await connectDB;
    const db = client.db('Forum');
    let result = await db.collection('post').find().toArray();


    
    return (
      <div className="list-bg">
        {
          result.map((doc,data) =>{
            return (
              <div className="list-item">
                <h4>{doc.title}</h4>
                <p>{doc.contents}</p>
              </div>
            )
          })
        }
      </div>
    )
  } 
