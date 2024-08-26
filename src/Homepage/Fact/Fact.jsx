import React from 'react'
import rasm from '../../assets/GKS.png'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'

function Fact() {
    const {t}= useTranslation()
    return (
        <div className='Fact'>
            <div className="container text-center">
                <h1 className="fact-subtitle mt-12 mb-12 text-5xl">{t('fact.fact-text1')}</h1>
                <div className="fact-container flex gap-16">
                    <img src={rasm} alt="gks" className="fact-pic w-2/5" />
                    <div className="fact-right text-left max-w-3xl">
                        <ul className="fact-list">
                            <h1 className="fact-title text-3xl mb-4">{t('fact.fact-text15')} <span className='span text-green-500 '>{t('fact.fact-text2')}</span> {t('fact.fact-text3')}</h1>
                            <p className="fact-text text-xl">{t('fact.fact-text4')} <span className='span text-blue-400'>{t('fact.fact-text5')}</span >{t('fact.fact-text6')} <span className='span text-blue-400'>{t('fact.fact-text7')}</span> 
                            {t('fact.fact-text8')} <span className='span text-blue-400'>{t('fact.fact-text9')}</span> {t('fact.fact-text10')}</p>
                        </ul>
                        <ul className="fact-list-2">
                            <h1 className="fact-title text-3xl mt-12 mb-4">{t('fact.fact-text11')}</h1>
                            <li className="fact-item text-xl mt-2 ml-4"> {t('fact.fact-text12')}</li>
                            <li className="fact-item text-xl mt-2 ml-4"> {t('fact.fact-text13')}</li>
                            <li className="fact-item text-xl mt-2 ml-4"> {t('fact.fact-text14')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fact
