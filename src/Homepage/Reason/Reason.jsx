import React from 'react'
import { useTranslation } from 'react-i18next'

function Reason() {
    const {t}= useTranslation()
  return (
    <div className='Reason'>
      <div className="container">
        <h1 className="reason-head text-center text-7xl py-14 max-lg:text-5xl max-md:text-3xl">{t('reason.reason-text1')}</h1>
        <div className="reason-container max-w-screen-2xl left-0 right-0  max-lg:flex justify-evenly max-sm:block">
            <div className="reason-top flex  max-w-screen-2xl  justify-evenly max-lg:block ">
                <ul className="reason-list  max-w-sm p-6 shadow-lg max-lg:mt-8 max-sm:max-w-full ">
                    <h1 className="reason-title w-20 h-20 text-center p-3 rounded-lg text-5xl text-white bg-blue-300 ">01</h1>
                    <h2 className="reason-subtitle text-2xl py-5">{t('reason.reason-text2')}</h2>
                    <p className="reason-text text-md py-2 ">{t('reason.reason-text3')}</p>
                </ul>
                <ul className="reason-list  max-w-sm p-6 shadow-lg max-lg:mt-8 max-sm:max-w-full">
                    <h1 className="reason-title w-20 h-20 text-center p-3 rounded-lg text-5xl text-white bg-blue-300 ">02</h1>
                    <h2 className="reason-subtitle text-2xl py-5">{t('reason.reason-text4')}</h2>
                    <p className="reason-text text-md py-2 ">{t('reason.reason-text3')}</p>
                </ul>
                <ul className="reason-list  max-w-sm p-6 shadow-lg max-lg:mt-8 max-sm:max-w-full">
                    <h1 className="reason-title w-20 h-20 text-center p-3 rounded-lg text-5xl text-white bg-blue-300 ">03</h1>
                    <h2 className="reason-subtitle text-2xl py-5">{t('reason.reason-text5')}</h2>
                    <p className="reason-text text-md py-2 ">{t('reason.reason-text3')}</p>
                </ul>
            </div>
            <div className="reason-top flex  max-w-screen-2xl  justify-evenly py-20 max-lg:block pt-0  ">
                <ul className="reason-list  max-w-sm p-6 shadow-lg max-lg:mt-8 max-sm:max-w-full">
                    <h1 className="reason-title w-20 h-20 text-center p-3 rounded-lg text-5xl text-white bg-blue-300 ">04</h1>
                    <h2 className="reason-subtitle text-2xl py-5">{t('reason.reason-text6')}</h2>
                    <p className="reason-text text-md py-2 ">{t('reason.reason-text3')}</p>
                </ul>
                <ul className="reason-list  max-w-sm p-6 shadow-lg max-lg:mt-8 max-sm:max-w-full">
                    <h1 className="reason-title w-20 h-20 text-center p-3 rounded-lg text-5xl text-white bg-blue-300 ">05</h1>
                    <h2 className="reason-subtitle text-2xl py-5">{t('reason.reason-text7')}</h2>
                    <p className="reason-text text-md py-2 ">{t('reason.reason-text3')}</p>
                </ul>
                <ul className="reason-list  max-w-sm p-6 shadow-lg max-lg:mt-8 max-sm:max-w-full">
                    <h1 className="reason-title w-20 h-20 text-center p-3 rounded-lg text-5xl text-white bg-blue-300 ">06</h1>
                    <h2 className="reason-subtitle text-2xl py-5">{t('reason.reason-text8')}</h2>
                    <p className="reason-text text-md py-2 ">{t('reason.reason-text3')}</p>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reason
