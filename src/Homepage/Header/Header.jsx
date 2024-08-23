import React from 'react'
import rasn from '../../assets/logo1.png'

function Header() {
  return (
    <div className='header'>
      <div className="container max-w-screen-2xl  ">
        <div className="header-container flex justify-evenly ">
            <img src={rasn} alt="" className="header-logo" />
            <div className="header-right max-w-6xl flex justify-evenly  gap-12 items-center ">
                <p className="header-text max-w-40 items-left text-lg max-sm:hidden ">Toshkentda joylashgan Koreys tili hamda Topik o’quv markazi</p>
                <ul className="header-list max-w-4xl flex gap-8 max-lg:hidden ">
                    <a href="#" className="header-link text-xl w-30 ">Nega biz</a>
                    <a href="#" className="header-link text-xl">Natijalar</a>
                    <a href="#" className="header-link text-xl">Kurslar</a>
                    <a href="#" className="header-link text-xl w-60">Ko'p beriladigan savollar</a>
                </ul>
                <ul className="header-list-2">
                    <a href='+998908842515' className="header-bond text-2xl max-md:text-xl">+998-(90)-884-11-22</a>
                    <p className="header-text-2 text-2xl max-md:text-xl">Hoziroq bog'laning</p>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
