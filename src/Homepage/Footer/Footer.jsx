import React from 'react'
import { useTranslation } from 'react-i18next'

function Footer() {
  const {t}= useTranslation()
  return (
    <div className='Footer'>
      <div className="container">
        <div className="footer-container flex justify-evenly items-center my-10 py-6 bg-black">
            <img src="https://static.tildacdn.info/tild6461-3631-4933-b438-333065383736/logo_horizontal.svg" alt="" className="footer-img" />
            <ul className="footer-list flex gap-6 max-md:hidden">
                <a href="#" className="footer-link text-white">{t('header.header-title2')}</a>
                <a href="#" className="footer-link text-white">{t('header.header-title3')}</a>
                <a href="#" className="footer-link text-white">{t('header.header-title4')}</a>
                <a href="#" className="footer-link text-white">{t('header.header-title5')}</a>
            </ul>
            <ul className="footer-list-2 flex gap-4 max-sm:block">
                <img src="https://static.tildacdn.info/tild3436-6666-4432-b139-346134636535/phone.svg" alt="" className="pic  bg-black" />
                <img src="https://static.tildacdn.info/tild6535-3330-4434-b937-383966613034/tg.svg" alt="" className="pic  bg-black" />
                <img src="https://static.tildacdn.info/tild3936-3439-4936-b866-376561323937/insta.svg" alt="" className="pic  bg-black" />
                <img src="https://static.tildacdn.info/tild6433-3061-4664-b962-636533333432/youtube.svg" alt="" className="pic  bg-black" />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
