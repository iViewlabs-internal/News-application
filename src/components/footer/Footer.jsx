import React from 'react';
import "./Footer.css";


function Footer() {
    const date=new Date();
    const year=date.getFullYear();

  return (
    <div className="footer">
      <div className="container">
        <p className='pt-3'>&#169; Copyright {year} The News Nation Pvt Ltd. All Rights Reserved</p>
       </div>
    </div>
  )
}

export default Footer
