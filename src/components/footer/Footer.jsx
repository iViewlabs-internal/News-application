import React from 'react';
import "./Footer.css";
import { year } from '../../utils';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <p className='pt-3'>&#169; Copyright {year} iView Lab Pvt Ltd. All Rights Reserved</p>
       </div>
    </div>
  )
}
export default Footer
