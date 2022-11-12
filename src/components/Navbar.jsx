import React, {useState} from 'react';
import { Modal } from './modal';
import './Navbar.css'
import styled from 'styled-components'
const Button = styled.button `
padding:16px 32px;
border-radius 4px;
border: none;
background: #141414;
color:#fff;
font-size: 24px;
min-width:100px;
cursor: pointer;

`

function Navbar () {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
      setShowModal(prev => !prev)
    };

  return (
    <section className="navbar">
   
  </section>
  )

}

export default Navbar;