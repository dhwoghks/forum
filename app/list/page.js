import { connectDB } from "@/util/database"


export default async function List() {

    const client = await connectDB;
    const db = client.db('Forum');
    let result = await db.collection('post').find().toArray();


    
    return (
      <div className="list-bg">
        <div className="list-item">
          <h4>글제목</h4>
          <p>1월 1일</p>
        </div>
        <div className="list-item">
          <h4>글제목</h4>
          <p>1월 1일</p>
        </div>
        <div className="list-item">
          <h4>글제목</h4>
          <p>1월 1일</p>
        </div>
      </div>
    )
  } 