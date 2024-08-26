import React from 'react'
import Card from '../Card/Card'
import rasm from '../../assets/tom.png'
import rasm2 from '../../assets/tom2.png'
import rasm3 from '../../assets/tom3.png'
import { useTranslation } from 'react-i18next'

function Login() {
  const {t}= useTranslation()
  return (
    <div className='Login'>
      <div className="container text-center  max-w-screen-xl ">
        <h1 className="login-title text-5xl ">{t('login.login-text1')}</h1>
        <div className="login-container flex ml-20 gap-16">
          <Card img={rasm} title="Intiensive" text={t('login.login-text2')} price={t('login.login-text3')} />
          <Card img={rasm2} title="Odatiy" text={t('login.login-text4')} price={t('login.login-text5')} />
          <Card className="Login-card ml-4" img={rasm3} title="individual" text={t('login.login-text6')} price={t('login.login-text7')} />
        </div>
      </div>
    </div>
  )
}

export default Login
