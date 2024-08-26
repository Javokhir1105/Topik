import React from 'react'
import rasn from '../../assets/logo1.png'
import {useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
   i18n.changeLanguage(lng.target.value)
  };
  return (
    <div className='header'>
      <div className="container max-w-screen-2xl  ">
        <div className="header-container flex justify-evenly ">
          <img src={rasn} alt="" className="header-logo" />
          <div className="header-right max-w-6xl flex justify-evenly  gap-12 items-center ">
            <p className="header-text max-w-40 items-left text-lg max-sm:hidden ">{t('header.header-title1')}</p>
            <ul className="header-list max-w-4xl flex gap-8 max-lg:hidden ">
              <a href="#" className="header-link text-xl w-30 ">{t('header.header-title2')}</a>
              <a href="#" className="header-link text-xl">{t('header.header-title3')}</a>
              <a href="#" className="header-link text-xl">{t('header.header-title4')}</a>
              <a href="#" className="header-link text-xl w-60">{t('header.header-title5')}</a>
            </ul>
            <select name="language" onChange={changeLanguage} value={i18n.language} style={{ marginRight: "20px" }}>
              <option value="uz">Uzbek</option>
              <option value="en">English</option>
              <option value="ru">Russian</option>
              <option value="ja">Japan</option>
            </select>
            <ul className="header-list-2">
              <a href='+998908842515' className="header-bond text-xl max-md:text-lg">+998-(90)-884-11-22</a>
              <p className="header-text-2 text-xl max-md:text-xl">{t('header.header-title6')}</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
