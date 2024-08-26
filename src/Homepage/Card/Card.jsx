import React from 'react'
import rasm from '../../assets/tom.png'
import { useTranslation } from 'react-i18next'
function Card({price,img,text,title}) {
  const {t}= useTranslation()
  return (
    <div className='card shadow-lg p-5'>
      <div className="card-container max-w-md bg-white-700  list-none">
        <img src={img} alt="" className="card-img h-60 w-96" />
        <li className="card-item flex justify-between items-center">
            <h1 className="card-title text-2xl p-6">{title}</h1>
            <p className="card-subtitle text-lg p-3 px-6 bg-green-600 rounded-full text-white">{t('login.login-text8')}</p>
        </li>
       <li className="card-items max-w-xs py-4 h-36 w-96">
       <p className="card-text text-left "> {text}</p>
       </li>
        <li className="card-list-2 flex items-center justify-between">
            <button className="card-btn text-xl p-3 px-6 bg-green-600 rounded-full text-white">{t('login.login-text9')}</button>
            <p className="card-texts text-xl text-green-600">{price}</p>
            </li>      
      </div>
    </div>
  )
}

export default Card
