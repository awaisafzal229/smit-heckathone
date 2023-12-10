import Link from 'next/link'
import React from 'react'
import Appointment from '@/app/Appointment/page'
export default function Header() {
  return (
    <div>

<header id="header" className="header">
          {/* Navigation */}
          <div className="navigation">
            <div className="container">
              <nav className="nav__center">
                <div className="nav__header">
                  <div className="nav__logo">
                    <Link href={"/"}><h1 className='font-extrabold'>MyDoc</h1></Link>
                  </div>
                  <div className="nav__hamburger">
                    <span>
                      <svg>
                        <use xlinkHref="" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="nav__menu ">
                  <div className="menu__top">
                    <h1 className="nav__category">SHOPI<span>Q</span></h1>
                    <div className="close__toggle">
                      <svg>
                        <use xlinkHref="./images/sprite.svg#icon-cross" />
                      </svg>
                    </div>
                  </div>
                  <ul className="nav__list">
                    <li className="nav__item">
                      <a href="/" className="nav__link scroll-link">Home</a>
                    </li>
                    <li className="nav__item">
                      <Link href="/Doctors" className="nav__link scroll-link">Doctors</Link>
                    </li>
                    <li className="nav__item">
                      <Link href="/hospitals" className="nav__link scroll-link">Hospitals</Link>
                    </li>
                    <li className="nav__item">
                      <a href="/Appointment" className="nav__link scroll-link">Appointment</a>
                    </li>
                    <li className="nav__item">
                      <Link href="/Login" className="nav__link">Login</Link>
                    </li>
                    <li className="nav__item">
                      <Link href="/Login" className="nav__link  ">Register</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          {/* Hero */}
          <div className="hero">
            <div className="hero__content container">
              <p className='text-6xl font-extrabold'>View Doctors, Book an Appointment</p>
              <p className='font-bold pt-4 pb-24'>Find the best doctors, clinics & hospitals in the city nearest to you.</p>
              <a href="/Doctors" className="btn btn-hero pt-20">Veiw Doctors</a>
            </div>
            <a href="#new__arrival" className="goto__next scroll-link">
              <span>
                <svg>
                  <use xlinkHref="./images/sprite.svg#icon-angle-down" />
                </svg>
              </span>
            </a>
          </div>
        </header>


    </div>
  )
}
