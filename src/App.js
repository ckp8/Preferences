import styled from 'styled-components'
import './App.css';
import WSPGallery from './components/main'
import React , {useState} from 'react'
import { Modal } from './components/modal';
import { GlobalStyle } from './globalStyles';
import Header from './components/Header';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`

const Button = styled.button `
padding:16px 32px;
border-radius 4px;
border: none;
background: #141414;
color:#fff;
font-size: 24px;
min-width:100px;
cursor: pointer;`


function App(props) {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  };

  const galleryImages = [
    {
      img: "https://image.freepik.com/free-vector/neon-square-background_1189-330.jpg",
      id: 1
    },
    {
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80",
      id: 2
    },
    {
      img:"https://image.freepik.com/free-vector/neon-square-background_1189-330.jpg",
      id: 3
    },
    {
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80",
      id: 4
    },
    {
      img: "https://image.freepik.com/free-vector/neon-square-background_1189-330.jpg",
      id: 5
    },
    {
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80",
      id: 6
    },
  ]
  return (
    <div className="App"> 
    <Header/>
    <Button onClick={openModal}>I'm a modal</Button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <WSPGallery galleryImages = {galleryImages}/>
      
     

 

      
  <GlobalStyle/>




    </div>
  );
}
export default App;
