import Reels from './components/Reels'
import { useEffect, useState } from 'react'
import './style/reels.css'
// import videos from './Data/reelsData.js'

function App() {

  const [reel, setReels] = useState([])
  const loadReels = async () => {

    const userRes = await fetch(`https://randomuser.me/api/?results=30`)
    const userData = await userRes.json();

    console.log(userData)

    const postRes = await fetch('https://dummyjson.com/posts')
    const postData = await postRes.json();
    // console.log(postData)
const videos = [
    "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    "https://cdn.cosmos.so/07ba602b-eac6-418d-9af8-e9fc154cf59d.mp4",
    "https://cdn.pixabay.com/video/2023/04/15/157741-720p.mp4",
    "https://cdn.cosmos.so/f81730d1-a565-436b-9ca7-1447c7ab1bb7.mp4",
    "https://cdn.cosmos.so/adb02601-2b63-4e36-95a4-c8824a7af6fe.mp4",
    "https://cdn.cosmos.so/75414995-9387-4e10-9637-8ba67c869b41.mp4",
    "https://cdn.cosmos.so/a061f2a8-979d-42bb-b296-4fa4b823c87d.mp4",
    "https://www.cosmos.so/e/1052372380",
    "https://www.pexels.com/download/video/34916318/",
    "https://www.pexels.com/video/elegant-art-museum-interior-in-black-and-white-34916314/",
    "https://cdn.cosmos.so/19bbf2a5-f7b8-4f7b-9177-dfe4cc233473.mp4",
    "https://www.pexels.com/video/vibrant-artistic-painting-session-in-progress-34878405/",
    "https://www.pexels.com/video/a-person-sticking-photos-on-a-wall-10273287/",
    "https://cdn.cosmos.so/949dd61f-0cdb-4486-a067-1f6aa97430ef.mp4",
    "https://www.pexels.com/video/a-woman-touching-the-vase-10140554/",
    "https://www.pexels.com/video/a-man-going-to-the-second-floor-8243253/",
    "https://cdn.cosmos.so/4e3b3230-168d-45f7-997f-359faa728077.mp4",
    "https://www.pexels.com/video/woman-art-iphone-smartphone-3960170/",
    "https://cdn.cosmos.so/f282a522-e0e2-4ae4-b1c5-73f91deb98cf.mp4",
    "https://www.pexels.com/video/video-of-a-woman-painting-4460545/",
    "https://cdn.cosmos.so/0046b142-8aa5-48c6-b389-a9d23d8ebc3b.mp4",
    "https://cdn.cosmos.so/be41b247-90ae-47b1-b7f1-d0a68bf5c738.mp4",
    "https://cdn.cosmos.so/b7df5458-fe2c-4bb7-8318-c851fda68393.mp4",
    "https://cdn.cosmos.so/487e1458-6e93-421d-a59a-730f1fd8483e.mp4",
    "https://cdn.cosmos.so/213572de-8120-45ec-bd2c-0dba95b4f61c.mp4",
    "https://cdn.cosmos.so/b515f571-f42e-4934-8a1e-2998e3d6edce.mp4",
    "https://cdn.cosmos.so/61ca0535-2a72-4d6d-a597-537d02ad6b11.mp4",
    "https://cdn.cosmos.so/8022aa56-28da-4f38-9a60-5cbc30254ceb.mp4",
    "https://cdn.cosmos.so/b72a09a0-b5e1-4364-b07f-298816d2e856.mp4",
  ];

    function getVideo() {
        return videos[Math.floor(Math.random() * videos.length)];
    }

    const newReels = userData.results.map((user, index)=> ({
      id: index,
      username: user.name.first,
      userImage: user.picture.large,
      caption: postData.posts[index].title,
      video: getVideo(),
      likes: Math.floor(Math.random() * 3000),
      comments: Math.floor(Math.random() * 1000),
      shares: Math.floor(Math.random() * 1000),
      musicImage: `https://picsum.photos/seed/music${Math.random()}/200`
      
    }))

    setReels(newReels)
  };

  useEffect(()=>{
    loadReels();
  }, [])

  return (
    <div className="main">
            <section>
                <div className="allReels">
                    {reel.map((reel) => (
                        <Reels key={reel.id} {...reel} />
                    ))}
                </div>
            </section>
        </div>
  )
}

export default App