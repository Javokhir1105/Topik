import React from 'react'
import rasm from '../../assets/saroy.png'
import rasm2 from '../../assets/oval.png'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'

function Content() {
    const {t}= useTranslation()
    return (
        <div className='Content'>
            <div className="container max-w-screen-2xl  ">
                <div className="content-container relative ml-20 mt-16 max-md:text-center ml-8 max-sm:ml-4 ">
                    <h4 className="content-title mt-6 text-lg ">{t('content.content-title1')}</h4>
                    <h1 className="content-head text-6xl max-w-4xl leading-snug mt-6 max-xl:text-4xl max-xl:max-w-2xl max-[500px]:text-2xl">{t('content.content-title2')}</h1>
                    <ul className="content-list flex max-w-3xl mt-10 max-xl:block flex-row max-md:text-left">
                        <li className="content-item-right flex max-w-60 gap-4 items-center max-xl: max-w-40 mt-12 max-md:max-w-md ">
                            <img src={rasm2} alt="" className="content-pic" />
                            <p className="content-text text-lg">{t('content.content-title3')}</p>
                        </li>
                        <li className="content-item-left flex max-w-sm gap-3 items-center max-xl: max-w-40 mt-12 max-md:max-w-md ">
                            <img src={rasm2} alt="" className="content-pic" />
                            <p className="content-text text-lg">{t('content.content-title4')}</p>
                        </li>
                    </ul>
                    <ul className="content-item-end ">
                        <button className="content-btn mt-6 p-8 px-20 border-2 rounded-full border-green-700 hover:bg-emerald-700 active:bg-blue-700 bg-emerald-400 text-white text-xl">{t('content.content-title6')}</button>
                        <p className="content-text-last mt-6 ml-8 text-xl">{t('content.content-title5')}</p>
                    </ul>
                    <img src={rasm} alt="" className="content-img absolute  right-8 buttom-4 max-w-4xl max-xl:max-w-3xl buttom-0 top-16 z-0 max-lg:invisible" />
                </div>
            </div>
        </div>
    )
}

export default Content
