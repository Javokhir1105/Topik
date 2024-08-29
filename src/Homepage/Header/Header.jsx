import React from 'react'
import rasn from '../../assets/logo1.png'
import {useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
   i18n.changeLanguage(lng.target.value)
  };
  return (
    <div className='header  '>
      <div className="container max-w-screen-2xl relative  ">
        <div className="header-container flex justify-evenly  bg-white top-0 z-10 max-xl:items-center ">
          <img src={rasn} alt="" className="header-logo max-xl:w-30 h-20" />
          <div className="header-right max-w-6xl flex justify-evenly  gap-12 items-center max-sm:gap-6 ">
            <p className="header-text max-w-40 items-left text-lg max-xl:hidden ">{t('header.header-title1')}</p>
            <ul className="header-list max-w-4xl flex gap-8 max-xl:gap-4 max-lg:hidden ">
              <a href="#" className="header-link text-xl w-30 ">{t('header.header-title2')}</a>
              <a href="#" className="header-link text-xl">{t('header.header-title3')}</a>
              <a href="#" className="header-link text-xl">{t('header.header-title4')}</a>
              <a href="#" className="header-link text-xl w-60">{t('header.header-title5')}</a>
            </ul>
            <select name="language" className='header-select max-sm:text-xl' onChange={changeLanguage} value={i18n.language} style={{ marginRight: "20px" }}>
              <option value="uz">Uzbek</option>
              <option value="en">English</option>
              <option value="ru">Russian</option>
              <option value="ja">Japan</option>
            </select>
            <ul className="header-list-2 max-[420px]:hidden">
              <a href='+998908842515' className="header-bond text-xl max-md:text-lg max-sm:text-sm">+998-(90)-884-11-22</a>
              <p className="header-text-2 text-xl max-md:text-xl max-sm:text-sm">{t('header.header-title6')}</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
