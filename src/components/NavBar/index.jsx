import React from 'react'

export default function NavBar() {
  return (
    <div className='container'>
        <nav className='nav'>
            <div className="nav__brand">
                <a href="#" className="nav__link">My Ecommerce Name</a>
            </div>
            <ul className="nav__list">
                <li>
                    <a href="#" className="nav__link">Category 1</a>
                </li>
                <li>
                    <a href="#" className="nav__link">Category 2</a>
                </li>
                <li>
                    <a href="#" className="nav__link">Cart</a>
                </li>
            </ul>
        </nav>

    </div>
  )
}
