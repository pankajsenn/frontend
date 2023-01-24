import React from "react";
import '../card/card.css';
function Card(post) {
    
    return (
        <>
            <section className="card">
                <section className="card-header">
                    <div>
                        <div className="card-header_name">
                            {post.post.author}
                        </div>
                        <div className="card-location">
                            {post.post.location}
                        </div>
                    </div>
                    <span className="card-dot">
                        ...
                    </span>
                </section>
                <section className="card-image">
                    <img src={`http://localhost:8080/image/${post?.post?.image_file}`} alt='pank'></img>
                </section>
                <section className="card-action">
            <span><img src={require('../../images/heart.png') }width="30px" height="30px"></img></span>
            <span><img src={require('../../images/share.png')} width="30px" height="30px" id="share"></img></span>
            <span>{post.post.date.split("T")[0]}</span>
        </section>
        <section className="card-like">
        0 likes
        </section>
                <section className="card-description">
                    {post.post.description}
                </section>
            </section>
        </>
    )
}
export default Card;