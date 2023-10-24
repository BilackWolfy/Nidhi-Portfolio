/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import { createPortal } from 'react-dom';
import './main.scss'

const ContactsModal = ({ setModalOpen }) => {
    const numberRef = useRef();
    const mailRef = useRef();
    const [copied, setCopied] = useState(false)
    const [copiedTwo, setCopiedTwo] = useState(false)
    const copyNumber = async () => {
        console.log("number ref", numberRef)
        await navigator.clipboard.writeText(numberRef.current.innerHTML);
        setCopied(true)
    }
    const copyNumberTwo = async () => {
        console.log("number ref", mailRef)
        await navigator.clipboard.writeText(mailRef.current.innerHTML);
        setCopiedTwo(true)
    }
    return (
        <div className='contactsModal flex'>
            <i className="fa-solid fa-xmark" onClick={() => setModalOpen(false)}></i>
            <div className="contactsContainer">
                <div className=" number flex">
                    <p className="field">Contact</p>
                    <div>
                        <p ref={numberRef}>9053838925</p>
                        {copied && <i className="fa-solid fa-check"></i>}
                        {!copied && <i className="fa-regular fa-copy" onClick={async () => await copyNumber()}></i>}
                    </div>
                </div>
                <div className="mail flex">
                    <p className="field">Email</p>
                    <div>
                        <p ref={mailRef}>sharma.nidhi8890@gmail.com</p>
                        {copiedTwo && <i className="fa-solid fa-check"></i>}
                        {!copiedTwo && <i className="fa-regular fa-copy" onClick={async () => await copyNumberTwo()}></i>}
                    </div>
                </div>
            </div>
        </div>
        // , document.getElementById('modal')
    )
}

export default ContactsModal;