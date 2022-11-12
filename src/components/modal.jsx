import React, { useEffect } from "react";
import styled from "styled-components";
import Pic from "./pic";
import Main from "./main";

const Background = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`;

const ModalWrapper = styled.div`
width: 1024px;
height: 860px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index: 10;
border-radius: 10px;
overflow: scroll;
`;
const ModalContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
color: #141414;
p {
margin-bottom: 1rem;
}
button {
padding: 10px 24px;
background: #141414;
color: #fff;
border: none;
}
`;
const CloseModalButton = styled.button`
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
padding: 0;
z-index: 10;
`;

export const Modal = ({ showModal, setShowModal, pics, showIndexs, handleShowIndexs }) => {
return (
<>
{showModal ? (
<Background>
<ModalWrapper showModal={showModal}>
<ModalContent>
<h1> Preferences</h1>
{pics.map((pic, i) => <Pic pic={pic} key={pic.id} idx={i} handleShowIndexs={handleShowIndexs} showPic={showIndexs.indexOf(i) > -1} modal />)}
<button> chose</button>
<CloseModalButton
aria-label="Close modal"
onClick={() => setShowModal((prev) => !prev)}
/>
</ModalContent>
</ModalWrapper>
</Background>
) : null}
</>
);
};