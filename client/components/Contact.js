import React from 'react';

const Contact = () => {
    return (
        <div className='content contact'>
            <form id='form' action="https://formspree.io/rachelefine@gmail.com" method="POST">
                <p>name</p>
                <input className='field' type="text" name="name"/>                
                <p>email</p>
                <input className='field'ype="email" name="_replyto"/>
                <p>message</p>
                <textarea id='message' name="message"/>
                <input id='submit' type="submit" value="send"/>
            </form>
        </div>
    );
};

export default Contact;
