import React from 'react'
import '../../style.css'


function Header() {
  return (
    <div>
    <header>
    <a href="#" class="logo"><i class="fas fa-utensils"></i>BOOK-YOUR-SHOW</a>

    <nav class="navbar">
        <a href='/'>Home</a>
        <a href='/history'>History</a>
        
    </nav>
    </header>
    </div>
  )
}

export default Header
