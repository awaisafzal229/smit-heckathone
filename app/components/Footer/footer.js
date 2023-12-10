import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div>

<footer id="footer" className="section footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer-top__box">
              <Link href={"/"}>MyDoc</Link>
              <a href="#">Free Guidance</a>
              <a href="#">24 hours services</a>
              <a href="#">Reasonable Prices</a>
              <a href="#">Friendly environment</a>
            </div>
            <div className="footer-top__box">
              <h3>INFORMATION</h3>
              <a href="#">About Us</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="footer-top__box">
              <h3>CONTACT US</h3>
              <div>
                ABC road Faisalabad, Pakistan
              </div>
              <div>
                awaisafzal@gmail.com
              </div>
              <div>
               M.Awais Afzal
              </div>
              <div>
               XYZ Town, Faisalabad
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
