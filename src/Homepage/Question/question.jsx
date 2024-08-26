import React, { useState } from 'react'
import '../Question/question.css'
import { useTranslation } from 'react-i18next';
export default function Question() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [items, setItems] = useState([]);
    const {t}= useTranslation()

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
        <div className='question' id='question'>
            <div className="container">
                <div className="question__container">
                    <ul className='question__list'>
                        <h1 className='question__title text-4xl'>{t('last.last-text1')}</h1>
                        <p className='question__text'>{t('last.last-text2')}</p>
                    </ul>
                    <ul className='question__items'>
                        <form id="myForm" onSubmit={sendMessageToTelegram}>
                            <li className='question__item '><input className='question__name px-6' type="text" id='name' placeholder={t('last.last-text3')}  onChange={(e) => setName(e.target.value)}required /></li>
                            <li className='question__item'><input className='question__number px-4' type="phone" name="" id="number" onChange={(e) => setPhone(e.target.value)} placeholder='          +998' /></li>
                            <li className='question__item'><button type='submit' className='question__btn'>{t('last.last-text4')}</button></li>
                        </form>
                    </ul>
                </div>
            </div>
        </div>
    )
}
