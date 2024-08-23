import React, { useEffect, useState } from 'react'
import rasm from '../../assets/options.png'
import rasm2 from '../../assets/rocket.png'
import rasm3 from '../../assets/money.png'
import rasm4 from '../../assets/travel.png'
import rasm5 from '../../assets/target.png'
import rasm6 from '../../assets/key.png'
import { Modal } from 'antd'
import { ToastContainer, toast } from 'react-toastify'

function Contact() {
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
            })
            .catch((error) => {
                console.log("Error", error);
            });
    };  
    const notify = () => toast("Wow so easy!");
    return (
        <div className='contact'>
            <div className="container max-w-screen-2xl  ">
                <div className="contact-container text-center ">
                    <h1 className="contact-title text-5xl">TOPIK academy aniq siz uchun agar siz:</h1>
                    <div className="contact-middle ">
                        <div className="contact-top flex gap-6 ">
                            <ul className="contact-list max-w-sm  max-h-70 allign-center">
                                <img src={rasm} alt="option" className="contact-img bg-green-100 rounded-full p-6 ml-16" />
                                <p className="contact-text text-2xl"><span className='contact-span text-blue-700 '>Qisqa</span> muddat ichida Koreys tilida gapirishni istaysiz</p>
                            </ul>
                            <ul className="contact-list max-w-sm  max-h-70 allign-center">
                                <img src={rasm2} alt="rocket" className="contact-img bg-green-100 rounded-full p-6 ml-16" />
                                <p className="contact-text text-2xl">Koreys tili o’rganib o’z <span className='contact-span text-blue-700 '>karyerangizni</span>  qurmoqchisiz</p>
                            </ul>
                            <ul className="contact-list max-w-sm  max-h-70 allign-center">
                                <img src={rasm3} alt="money" className="contact-img bg-green-100 rounded-full p-6 ml-16" />
                                <p className="contact-text text-2xl">Topik sertifikatini olib Koreyaning nufuzli universitetlariga <span className='contact-span text-blue-700 '>GRAND</span> yutmoqchisiz</p>
                            </ul>
                        </div>
                        <div className="contact-buttom flex gap-6 mt-8">
                            <ul className="contact-list max-w-sm  max-h-70 allign-center">
                                <img src={rasm4} alt="bag" className="contact-img bg-green-100 rounded-full p-6 ml-16" />
                                <p className="contact-text text-2xl">Janubiy Koreya davlatida <span className='contact-span text-blue-700 '>o'qish</span> va <span className='contact-span text-blue-700 '>ishlash</span> uchun ketmoqchisiz</p>
                            </ul>
                            <ul className="contact-list max-w-sm  max-h-70 allign-center">
                                <img src={rasm5} alt="target" className="contact-img bg-green-100 rounded-full p-6 ml-16" />
                                <p className="contact-text text-2xl"> Koreys tilini o’rta darajda bilasiz va darajangizni <span className='contact-span text-blue-700 '>oshirmoqchisiz</span></p>
                            </ul>
                            <ul className="contact-list max-w-sm  max-h-70 allign-center">
                                <img src={rasm6} alt="key" className="contact-img bg-green-100 rounded-full p-6 ml-16" />
                                <p className="contact-text text-2xl">Ko’p yillardan buyon o’qib ham <span className='contact-span text-blue-700 '>natijaga</span> chiqa olmayapsiz</p>
                            </ul>
                        </div>
                    </div>
                    <button onClick={showModal} className="contact-btn mt-6 p-8 px-28 border-2 rounded-full border-green-700 bg-emerald-500 text-white text-xl">Ha, bu men</button>
                    <Modal className='Modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={""}>
                        <form className='form text-center' onSubmit={sendMessageToTelegram}>
                            <h1 className="header-m-h1 text-3xl">O'z ma'lumotlaringizni qoldiring</h1>
                            <p className="header-m-p text-xl">Sizga to'liqroq ma'lumot berish uchun mutaxassislarimiz siz bilan bog'lanishadi</p>
                            <input className='Contact-input border-3 border-black-400 mt-6 mb-4 w-5/6 h-10' type="text" minLength={2} placeholder='name' onChange={(e) => setName(e.target.value)} required />
                            <input className='Contact-input border-3 border-black-400 w-5/6 h-10' type='number' minLength={2} placeholder='+998987654321' onChange={(e) => setPhone(e.target.value)} required /><br />
                            <button type='submit' className="header-btn border-2 p-2 px-24 mt-6 border-green-400 bg-green-500">Yuborish</button>
                        </form>
                    </Modal>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Contact
