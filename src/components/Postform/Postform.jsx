import { func } from "prop-types";
import React from "react";
import { useState } from "react";
import Header from "../Header/header"
import './Postform.css'
import {Link} from "react-router-dom"
function Postform(){
    const [author, setUsername] = useState('')
    const [location , setAddress] = useState('')
    const [imageFile, setImageFile] = useState('') ;
    const [description, setDescritpion] = useState(""); 

    const uploadPost = () => {
        const formData = new FormData();
        // Map => takes the data in the key value format 
        formData.append("author", author)
        formData.append("location", location)
        formData.append("image_file", imageFile)
        formData.append("description", description)

        fetch("http://localhost:8080/post", {
            method: 'POST',
            body: formData
        })
    }

    return (
        <>
        <Header/>
        <div className="post-container">
            <div className="inputdiv">
            <input type="file" onChange={(e) => {
                setImageFile(e.target.files[0]) ;
            }} className="file"/>
            </div>
            <div className="spandiv">
            <span className="spanone"><input placeholder="Author" value={author}  onChange={(e) => setUsername(e.target.value)}/></span>
            <span ><input placeholder="Location" value={location} onChange={(e) => setAddress(e.target.value)}/></span>
            </div>
            <div className="discdiv">
            <input value={description} placeholder="Description" id="discinput"onChange={(e) => setDescritpion(e.target.value)}/>
            </div>
            <Link to={"/Postview"} className="submitdiv">
            <button onClick={uploadPost}>Submit</button>
            </Link> 
        </div>
        </>
    );
}
export default Postform;