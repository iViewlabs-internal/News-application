import React from 'react';
import "./Footer.css";


function Footer() {
    const date=new Date();
    const year=date.getFullYear();

  return (
    <div className="footer">
      <div className="">
        <p className='pt-3'> Copyright {year}</p>
       </div>
    </div>
  )
}

export default Footer
