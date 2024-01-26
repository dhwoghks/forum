'use client'
import Link from 'next/link'

export default function ListItem({result}) {
  return (
    <div>
      { result.map((a,i)=>
          <div className="list-item" key={i}>
            <Link href={'/detail/' + result[i]._id}>{result[i].title}</Link>
            <Link href={'/edit/' + result[i]._id} className="list-btn">✏️</Link>
            <button className = 'list-btn'onClick={()=>{
                fetch('/api/post/delete', {method:'DELETE', body: result[i]._id})
                .then(()=>{})
                // console.log(result[i]._id)
            }}>🗑️</button>
            <p>{result[i].contents}</p>
          </div>
       ) }
    </div>
  )
}