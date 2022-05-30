import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.scss';

const ContactMe = () => {
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
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
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
                                required
                            />
                        </li>
                        <li className='half'>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </li>
                        <li>
                            <input 
                                placeholder="Subject" 
                                type="text" 
                                name="subject" 
                                required 
                            />
                        </li>
                        <li>
                            <textarea 
                                placeholder='Message'
                                name="message"
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