import { connectDB } from "@/util/database"

export default async function Home() {
  
  const client = await connectDB;
  const db = client.db('Forum');
  let result = await db.collection('post').find().toArray();
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', marginTop: '20px' }}>
        <iframe 
          style={{ borderRadius: "12px" }} 
          src="https://open.spotify.com/embed/track/5EcCFzo4PyxTYQsrHGL9xU?utm_source=generator" 
          width="50%" 
          height="352" 
          frameborder="0" 
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>
    </>
  )
}
