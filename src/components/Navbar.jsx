import React from 'react'
import '../styles/components/navbar.sass'

const Navbar = () => {
    return(
        <header className="header">
            <a href="" className='header-brand'>Galeria</a>
            <nav className='header-navbar'>
                <ul>
                    <li>
                        <a href="#" className='active'>Home</a>
                    </li>
                    <li>
                        <a href="#">Fotos</a>
                    </li>
                    <li>
                        <a href="#">Serviços</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
            <div className="header-social-media">
                <ul>
                    <li>
                    <a href="#">
                        <i className='fab fa-github'></i>
                    </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='fab fa-whatsapp'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar