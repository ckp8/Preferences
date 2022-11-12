import "./main.css";
import React, { useEffect, useState } from "react";
import Pic from './pic'
import styled from 'styled-components'

 
function Main({galleryImages }) {
const [pics, setPics] = useState([]);


  useEffect(() => {
    setPics(
      galleryImages.map((galleryImage) => {
        return { ...galleryImage, show: true };
      })
    );
  }, []);

  return (
 

    <div>
      {pics.map((pic) => <Pic pic={pic} key={pic.id}/>)}
    </div>
  );
}

export default Main;