import React, { useState } from 'react'
import rasm from '../../assets/tom.png'
import { useTranslation } from 'react-i18next'
import { Modal } from 'antd';
function Card({ price, img, text, title }) {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

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
  return (
    <div className='card shadow-lg p-5'>
      <div className="card-container max-w-md bg-white-700  list-none max-lg:max-w-full">
        <img src={img} alt="" className="card-img h-2/5 w-full" />
        <li className="card-item flex justify-between items-center max-sm:block">
          <h1 className="card-title text-2xl p-6 max-lg:text-5xl max-md:text-3xl">{title}</h1>
          <p className="card-subtitle text-lg p-3 px-6 bg-green-600 rounded-full text-white max-lg:text-3xl max-md:text-xl">{t('login.login-text8')}</p>
        </li>
        <li className="card-items max-w-xs py-4 h-36 w-96 max-lg:w-11/12 max-w-xl ">
          <p className="card-text text-left  max-lg:text-2xl max-md:text-lg"> {text}</p>
        </li>
        <li className="card-list-2 flex items-center justify-between">
          <button onClick={showModal} className="card-btn text-xl p-2 px-6 bg-green-600 rounded-full text-white max-lg:text-2xl max-sm:text-xl mt-4">{t('login.login-text9')}</button>
          <p className="card-texts text-xl text-green-600">{price}</p>
        </li>
      </div>
      <Modal className='Modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={""}>
        <form className='form text-center' onSubmit={sendMessageToTelegram}>
          <h1 className="header-m-h1 text-3xl">{t('card.card-title')}</h1>
          <p className="header-m-p text-xl">{t('card.card-title1')}</p>
          <input className='Contact-input border-3 border-black-400 mt-6 mb-4 w-5/6 h-10' type="text" minLength={2} placeholder='name' onChange={(e) => setName(e.target.value)} required />
          <input className='Contact-input border-3 border-black-400 w-5/6 h-10' type='number' minLength={2} placeholder='+998987654321' onChange={(e) => setPhone(e.target.value)} required /><br />
          <button type='submit' className="header-btn border-2 p-2 px-24 mt-6 border-green-400 bg-green-500">{t('contact.contact-title19')}</button>
        </form>
      </Modal>
    </div>
  )
}

export default Card
