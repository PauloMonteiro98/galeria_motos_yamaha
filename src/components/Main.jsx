import React from 'react'
import '../styles/components/mainComponents.sass'

const Main = () => {
  return (
    <div className='gallery'>
        <div className="gallery-card" id='card-1'>
            <h2 className="gallery-card-title">SCOOTER</h2>
            <a href="" className='gallery-card-btn'>Mais fotos</a>
        </div>
        <div className="gallery-card" id='card-2'>
            <h2 className="gallery-card-title">STREET</h2>
            <a href="" className='gallery-card-btn'>Mais fotos</a>
        </div>
        <div className="gallery-card" id='card-3'>
            <h2 className="gallery-card-title">TRAIL</h2>
            <a href="" className='gallery-card-btn'>Mais fotos</a>
        </div>
        <div className="gallery-card" id='card-4'>
            <h2 className="gallery-card-title">ESPORTIVA</h2>
            <a href="" className='gallery-card-btn'>Mais fotos</a>
        </div>
        <div className="gallery-card" id='card-5'>
            <h2 className="gallery-card-title">MT-SERIES</h2>
            <a href="" className='gallery-card-btn'>Mais fotos</a>
        </div>
        <div className="gallery-card" id='card-6'>
            <h2 className="gallery-card-title">SPORT TOURING</h2>
            <a href="" className='gallery-card-btn'>Mais fotos</a>
        </div>
        <div className="gallery-card" id='card-7'>
            <h2 className="gallery-card-title">RACING</h2>
            <a href="" className='gallery-card-btn'>Mais fotos</a>
        </div>
    </div>
  )
}

export default Main