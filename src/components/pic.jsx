
import React, { useState } from "react";
import styled from "styled-components";

const Img = styled.img`
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 100px;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300%;
  margin: 0 0 1em 0;
  padding: 1em;
  border: 1px solid black;
`;

export default function Pic({ pic, idx, showPic, handleShowIndexs, modal }) {
    return (
        <>
    <Container>
      
        
        <Wrapper style={showPic ? { display: "flex" } : { display: "none" }}>
            {pic.name}
          <Img src={pic.img} />
          </Wrapper>
       
        { (modal) &&  <button onClick={() => handleShowIndexs(idx, showPic ? false : true)}>{showPic ? 'Hide' : 'Show'}</button>  }
        
        
        
    </Container>
     
    </>
  );
}
            
