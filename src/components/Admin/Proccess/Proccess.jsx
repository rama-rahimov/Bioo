import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Proccess = () => {
  const [file, setFile] = useState(null);
  const [allImage, setAllImage] = useState(null);
  allImage ? console.log(allImage) : console.log("ahaa")
  useEffect(() => {
    getImage();
  }, [])
  const upload = () => {
    const formData = new FormData();
    formData.append('file', file);
    axios.post("http://localhost:3001/admin/upload", formData)
    .then(ahaa => ahaa)
    .catch(err => console.log(err))
  }

  const getImage = async () => {
    const result = await axios.get("http://localhost:3001/admin/get_image");
    console.log(result);
    setAllImage(result.data.data);
  }

  return (
    <div>
      <form enctype="multipart/form-data">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="button" onClick={upload}>Upload</button>
    </form>
    <div style={{width:"100%", display: "flex", 
    "justifyContent":"center", 
    "flexDirection":"column",
    "alignItems":"center"}}>
    <div style={{ width:"80%" , 
    display: "flex", justifyContent: "center" , flexWrap: "wrap"}}>
    { allImage === null ? "" :
      allImage.map((data) => {
        return <img 
        height="280px"
        width="250px"
        src={require(`../../../images/${data.imgUrl}`)} 
        />
      }) 
    }
    </div>
    </div>
    </div>
  )
}

export default Proccess;
