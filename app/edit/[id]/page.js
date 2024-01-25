import { connectDB } from "@/util/database"
import {ObjectId} from 'mongodb'



export default async function Edit(props){
    const client = await connectDB;
    const db = client.db('Forum');
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)});
    // await db.collection('post').updateOne({_id: result._id},{$set:{'title':'asdf','contents':'asdfasdf'}});
    return (
        <div className='p-20'>
            <h4>수정페이지</h4>
            <form action='/api/post/edit' method='POST'>
                <input name='title' placeholder='글제목' defaultvalue={result.title}></input>
                <input name='contents' placeholder='글내용' defaultvalue={result.contents}></input>
                <input style ={{display:'none'}}name='_id' value={result._id}></input>

                <button type='submit'>전송버튼</button>
            </form>
        </div>
    )
}