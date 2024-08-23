import React from 'react'
import rasm from '../../assets/saroy.png'
import rasm2 from '../../assets/oval.png'

function Content() {
    return (
        <div className='Content'>
            <div className="container max-w-screen-2xl  ">
                <div className="content-container relative ml-20 ">
                    <h4 className="content-title mt-6 text-lg">3 oyda Koreys tilida gapirishni boshlang</h4>
                    <h1 className="content-head text-6xl max-w-4xl leading-snug mt-6 max-xl:text-4xl max-xl:max-w-2xl">Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish imkoniyati</h1>
                    <ul className="content-list flex max-w-3xl mt-10 max-lg:block">
                        <li className="content-item-right flex max-w-60 gap-4 items-center max-xl:gap-2 max-xl:max-w-40  ">
                            <img src={rasm2} alt="" className="content-pic" />
                            <p className="content-text text-lg">5 oyda Topikdan 6 darajagacha olishda yordam beramiz</p>
                        </li>
                        <li className="content-item-left flex max-w-sm gap-3 items-center">
                            <img src={rasm2} alt="" className="content-pic" />
                            <p className="content-text text-lg">Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash imkoniyati</p>
                        </li>
                    </ul>
                    <ul className="content-item-end ">
                        <button className="content-btn mt-6 p-8 px-20 border-2 rounded-full border-green-700 bg-emerald-500 text-white text-xl">Bepul darsga yozilish</button>
                        <p className="content-text-last mt-6 ml-8 text-xl">Birinchi darsga bepul yoziling!</p>
                    </ul>
                    <img src={rasm} alt="" className="content-img absolute  right-14 top-0 max-w-5xl max-xl:max-w-4xl" />
                </div>
            </div>
        </div>
    )
}

export default Content
