import { useRef, } from 'react';
import useInput from '../../hooks/useInput';
import emailjs from '@emailjs/browser';
import './ContactMe.scss';

const ContactMe = () => {
    const {
        value: contactName,
        valueInputHandler: nameInputHandler,
        clear: clearName
    } = useInput();

    const {
        value: contactEmail,
        valueInputHandler: emailInputHandler,
        clear: clearEmail
    } = useInput();

    const {
        value: contactSubject,
        valueInputHandler: subjectInputHandler,
        clear: clearSubject
    } = useInput();

    const {
        value: contactMsg,
        valueInputHandler: msgInputHandler,
        clear: clearMsg
    } = useInput();

    const formRef = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_bo4juyr',
                'template_ylyaewc',
                formRef.current,
                'GokgAaan8lePnlA52'
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    clearForm();
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            );
    };

    const clearForm = () => {
        clearName();
        clearEmail();
        clearSubject();
        clearMsg();
    };

    return (
        <div className='contactme'>
            <div className='contactme-text'>
                <h1>Contact Me!</h1>
                <p>
                    I'm always open for a chat. Feel free to contact me about absolutely anything!
                </p>
            </div>
            <div className='contact-form'>
                <form ref={formRef} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={contactName}
                                onChange={nameInputHandler}
                                required
                            />
                        </li>
                        <li className='half'>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={contactEmail}
                                onChange={emailInputHandler}
                                required
                            />
                        </li>
                        <li>
                            <input 
                                placeholder="Subject" 
                                type="text" 
                                name="subject" 
                                value={contactSubject}
                                onChange={subjectInputHandler}
                                required 
                            />
                        </li>
                        <li>
                            <textarea 
                                placeholder='Message'
                                name="message"
                                value={contactMsg}
                                onChange={msgInputHandler}
                                required
                            />
                        </li>
                        <li>
                            <button type='submit' className='send-button'> SEND </button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;