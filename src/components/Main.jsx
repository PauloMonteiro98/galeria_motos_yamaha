import React from 'react'
import '../styles/components/mainComponents.sass'

const Main = () => {
  return (
    <div className='gallery'>
        <div className="gallery-card" id='1'>
            <h2 className="gallery-card-title">SCOOTER</h2>
            <a href="" className='gallery-card-btn'>Mais fotos</a>
        </div>
        <div className="gallery-card" id='2'>
            <h2 className="gallery-card-title">STREET</h2>
            <a href="" className='gallery-card-btn'>Mais fotos</a>
        </div>
        <div className="gallery-card" id='3'>
            <h2 className="gallery-card-title">TRAIL</h2>
            <a href="" className='gallery-card-btn'>Mais fotos</a>
        </div>
        <div className="gallery-card" id='4'>
            <h2 className="gallery-card-title">ESPORTIVA</h2>
            <a href="" className='gallery-card-btn'>Mais fotos</a>
        </div>
        <div className="gallery-card" id='5'>
            <h2 className="gallery-card-title">MT-SERIES</h2>
            <a href="" className='gallery-card-btn'>Mais fotos</a>
        </div>
        <div className="gallery-card" id='6'>
            <h2 className="gallery-card-title">SPORT TOURING</h2>
            <a href="" className='gallery-card-btn'>Mais fotos</a>
        </div>
        <div className="gallery-card" id='7'>
            <h2 className="gallery-card-title">RACING</h2>
            <a href="" className='gallery-card-btn'>Mais fotos</a>
        </div>
    </div>
  )
}

export default Main