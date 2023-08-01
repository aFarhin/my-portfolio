import React from 'react';
import './styles.css'

const Contact = () => {
  return (
    <>
      <div className="project-list">
        <h1 style={{ textAlign: 'center', color:'greenyellow', textShadow:'2px 2px 5px red' }}>Contact Me</h1>
        <p style={{ marginTop: '1rem', textAlign: 'center', color:'wheat' }}>Thank you for visiting my portfolio! If you have any questions, inquiries, or collaboration proposals, I'm excited to hear from you. I am eager to work with you and utilize my web development skills and knowledge to enhance your productivity. Let's create something amazing together!</p>
      </div>
      <div className='contact-container'>
        <p>Name - Ahmeda Farhin</p>
        <p>Email - ahmeda.farhin28@gmail.com</p>
        <p>Mobile No. - +91 8617048337 <span style={{fontSize:'0.7rem'}}>(same on whatsapp)</span></p>
        <p>Work Experience - Fresher</p>
        Permanent Address :<address>
          Amtala More; Basantapur, Town- Arambagh,
           P.O- Arambagh, P.S- Arambagh, Dist- Hooghly, State- West Bengal, PIN- 712601
        </address>
      </div>
      <p className='thankyou-note'>I'm committed to providing top-notch service and ensuring that your web development needs are met with the utmost professionalism and dedication. I look forward to hearing from you and the possibility of collaborating on exciting projects together!</p>
    </>
  );
};

export default Contact;
