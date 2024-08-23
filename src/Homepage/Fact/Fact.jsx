import React from 'react'
import rasm from '../../assets/GKS.png'

function Fact() {
    return (
        <div className='Fact'>
            <div className="container text-center">
                <h1 className="fact-subtitle mt-12 mb-12 text-5xl">Koreya Universitetlariga 100% gacha grant yutish imkoniyati</h1>
                <div className="fact-container flex gap-16">
                    <img src={rasm} alt="gks" className="fact-pic w-2/5" />
                    <div className="fact-right text-left max-w-3xl">
                        <ul className="fact-list">
                            <h1 className="fact-title text-3xl mb-4">GKS (Global Korean Scholarship) - <span className='span text-green-500 '>$70.000</span> lik Grant</h1>
                            <p className="fact-text text-xl">Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning Xalqaro ta'lim bo'yicha milliy instituti tomonidan <span className='span text-blue-400'>xorijiy</span > talabalarning Koreyada bakalavr va magistratura bosqichida <span className='span text-blue-400'>100% gacha to’liq grant</span> 
                                 va oylik <span className='span text-blue-400'>stipendiya</span> olish imkoniyatingiz bor</p>
                        </ul>
                        <ul className="fact-list-2">
                            <h1 className="fact-title text-3xl mt-12 mb-4">GKS granti sizga nima beradi</h1>
                            <li className="fact-item text-xl mt-2 ml-4"> Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan qaytish xarajatlari qoplanadi.</li>
                            <li className="fact-item text-xl mt-2 ml-4"> Koreyaga yetib borganda joylashib olish uchun bir martalik to'lovberiladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh dollari).</li>
                            <li className="fact-item text-xl mt-2 ml-4"> Til kursi va universitetning kontrak to'lovi to'liq to'lab beriladi (faqat magistr va doktorantlarga)... ko’proq.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fact
