import { useEffect, useState } from "react";
import Header from "../Header/header";
import Card from "../card/card";
function PostView() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/postview").then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data.post);
      setposts(data.post)
    }).catch((err) => { console.log(err) })
  }, [])
  return(
    <div>
    <Header />
      {
        posts.map((post,i)=>{
        return(
        <Card post={post} key={i}/>
        )
        })
      }
    </div>
  )
}

    export default PostView;