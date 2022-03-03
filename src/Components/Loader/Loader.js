import React from 'react'
import './Loader.css'
import dataLoader from '../../assets/images/dataLoader.gif'

export default function Loader() {
    return (
        <div className='loader'>
            <img className='loader_img'
                src={dataLoader} alt="grey clouds" />
        </div>
    )
}
