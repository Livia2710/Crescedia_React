import React from 'react'
import style from './footer.css'

const footer = () => {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>

          {/* colum 1*/}
          <div className='col-nd-3 col-sn-6'>
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled"> 
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>

          {/* colum 2*/}
          <div className='col-nd-3 col-sn-6'>
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled"> 
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>

          {/* colum 3*/}
          <div className='col-nd-3 col-sn-6'>
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled"> 
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>

          {/* colum 4*/}
          <div className='col-nd-3 col-sn-6'>
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled"> 
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default footer;