import React, { useEffect, useState } from 'react'
import rasm from '../../assets/options.png'
import rasm2 from '../../assets/rocket.png'
import rasm3 from '../../assets/money.png'
import rasm4 from '../../assets/travel.png'
import rasm5 from '../../assets/target.png'
import rasm6 from '../../assets/key.png'
import { Modal } from 'antd'
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

function Contact() {
    const {t}= useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const sendMessageToTelegram = (e) => {
        e.preventDefault()
        const token = "6757145376:AAHSqi6W4lT7vqtPXltbUDLl7drJytYTylo";
        const chat_id = 2055583199;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const message = `ism: ${name} \ntelefon: ${phone}`;

        const params = {
            chat_id: chat_id,
            text: message
        };
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
            .then((response) => response.json())
            .then((res) => {
                alert("Yuborildi");
                setIsModalOpen(false)
            })
            .catch((error) => {
                console.log("Error", error);
            })
            .finally(()=>{
           setIsModalOpen(false)
            })
    };  
    const notify = () => toast("Wow so easy!");
    return (
        <div className='contact'>
            <div className="container max-w-screen-2xl mt-24 ">
                <div className="contact-container text-center mt-28 ">
                    <h1 className="contact-title text-5xl max-md:text-2xl ">{t('contact.contact-title1')}</h1>
                    <div className="contact-middle max-lg:flex justify-evenly items-center max-sm:block ">
                        <div className="contact-top flex gap-6 max-lg:block ">
                            <ul className="contact-list max-w-sm  max-h-70 py-0 mt-14 align-center max-h-md py-4 max-sm:max-w-full">
                                <img src={rasm} alt="option" className="contact-img bg-green-100 rounded-full p-6 ml-16 max-sm:ml-40 max-[440px]:ml-16" />
                                <p className="contact-text text-2xl"><span className='contact-span text-blue-700 '>{t('contact.contact-title2')}</span> {t('contact.contact-title3')}</p>
                            </ul>
                            <ul className="contact-list max-w-sm  max-h-70 align-center max-h-md py-4 max-sm:max-w-full mt-12">
                                <img src={rasm2} alt="rocket" className="contact-img bg-green-100 rounded-full p-6 ml-16 max-sm:ml-40 max-[440px]:ml-16" />
                                <p className="contact-text text-2xl">{t('contact.contact-title4')} <span className='contact-span text-blue-700 '>{t('contact.contact-title5')}</span>{t('contact.contact-title6')}</p>
                            </ul>
                            <ul className="contact-list max-w-sm  max-h-70 align-center max-h-md py-4 max-sm:max-w-full mt-8">
                                <img src={rasm3} alt="money" className="contact-img bg-green-100 rounded-full p-6 ml-16 max-sm:ml-40 max-[440px]:ml-16" />
                                <p className="contact-text text-2xl">{t('contact.contact-title7')} <span className='contact-span text-blue-700 '>GRAND</span>{t('contact.contact-title8')}</p>
                            </ul>
                        </div>
                        <div className="contact-buttom flex gap-6 mt-8 max-lg:block mb-12">
                            <ul className="contact-list max-w-sm  max-h-70 align-center max-h-md py-8 max-sm:max-w-full">
                                <img src={rasm4} alt="bag" className="contact-img bg-green-100 rounded-full p-6 ml-16 max-sm:ml-40 max-[440px]:ml-16" />
                                <p className="contact-text text-2xl">{t('contact.contact-title9')} <span className='contact-span text-blue-700 '>{t('contact.contact-title10')}</span> {t('contact.contact-title11')}</p>
                            </ul>
                            <ul className="contact-list max-w-sm  max-h-70 align-center max-h-md py-8 max-sm:max-w-full">
                                <img src={rasm5} alt="target" className="contact-img bg-green-100 rounded-full p-6 ml-16 max-sm:ml-40 max-[440px]:ml-16" />
                                <p className="contact-text text-2xl"> {t('contact.contact-title12')} <span className='contact-span text-blue-700 '>{t('contact.contact-title13')}</span></p>
                            </ul>
                            <ul className="contact-list max-w-sm  max-h-70 align-center max-h-md py-8 max-sm:max-w-full ">
                                <img src={rasm6} alt="key" className="contact-img bg-green-100 rounded-full p-6 ml-16 max-sm:ml-40 max-[440px]:ml-16" />
                                <p className="contact-text text-2xl">{t('contact.contact-title14')} <span className='contact-span text-blue-700 '>{t('contact.contact-title15')}</span> {t('contact.contact-title16')}</p>
                            </ul>
                        </div>
                    </div>
                    <button onClick={showModal} className="contact-btn mt-6 p-8 px-28 border-2 rounded-full border-green-700 bg-emerald-400 text-white text-xl hover:bg-emerald-600 active:bg-yellow-400">{t('contact.contact-title20')}</button>
                    <Modal className='Modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={""}>
                        <form className='form text-center' onSubmit={sendMessageToTelegram}>
                            <h1 className="header-m-h1 text-3xl">{t('contact.contact-title17')}</h1>
                            <p className="header-m-p text-xl">{t('contact.contact-title18')}</p>
                            <input className='Contact-input border-3 border-black-400 mt-6 mb-4 w-5/6 h-10' type="text" minLength={2} placeholder='name' onChange={(e) => setName(e.target.value)} required />
                            <input className='Contact-input border-3 border-black-400 w-5/6 h-10' type='number' minLength={2} placeholder='+998987654321' onChange={(e) => setPhone(e.target.value)} required /><br />
                            <button type='submit' className="header-btn border-2 p-2 px-24 mt-6  text-lg border-green-400 bg-green-400 hover:bg-green-600 active:bg-yellow-300 text-black">{t('contact.contact-title19')}</button>
                        </form>
                    </Modal>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Contact
