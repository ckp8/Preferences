import React, { useState } from 'react'

export default function Pic({ pic, idx, showPic, handleShowIndexs, modal }) {
return (
<div>
<div style={showPic ? { display: "grid" } : { display: "none" }}>
<img
src={pic.img}
width='500px'
height='500px'
/>
</div>
{(modal) && <button onClick={() => handleShowIndexs(idx, showPic ? false : true)}>{showPic ? 'Hide' : 'Show'}</button>}
</div>
)
}