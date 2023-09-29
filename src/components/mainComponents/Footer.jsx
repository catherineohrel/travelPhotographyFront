// import React from 'react'

import "./footer.scss"
import "../../style.scss"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <div className="footerContainer">
        <div className='copyright'>
          <p>&copy; {currentYear} Cath Ohrel. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}
