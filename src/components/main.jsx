import "./main.css";
import React, { useEffect, useState } from "react";
import Pic from './pic'
import styled from 'styled-components'


function Main({ galleryImages, showIndexs, handleShowIndexs }) {
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
{pics.map((pic, i) => <Pic pic={pic} key={pic.id} idx={i} handleShowIndexs={handleShowIndexs} showPic={showIndexs.indexOf(i) > -1} />)}
</div>
);
}

export default Main;