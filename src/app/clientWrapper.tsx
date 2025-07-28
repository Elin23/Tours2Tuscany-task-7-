'use client';

import AuthModalWrapper from '@/components/auth/AuthModalWrapper';
import Footer from '@/components/shared/Footer/Footer';
import Loader from '@/components/shared/Loader';
import Navbar from '@/components/shared/Navbar/Navbar';
import Scroll2Top from '@/components/shared/Scroll2Top';
import { footerData, socialData } from '@/data/FooterData';
import { navbarLinks } from '@/data/LinksData';
import React, { ReactNode, useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';

interface ClientWrapperProps {
  children: ReactNode;
}

function ClientWrapper({ children }: ClientWrapperProps) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleSwitchForm = () => {
    setShowLogin(!showLogin);
    setShowRegister(!showRegister);
  };


  const loginFields = [
    { label: "Email", type: "email", placeholder: "Enter your email" },
    { label: "Password", type: "password", placeholder: "Enter your password" },
  ];


  const signUpFields = [
    { label: "Full Name", type: "text", placeholder: "Enter your name" },
    { label: "Email", type: "email", placeholder: "Enter your email" },
    { label: "Password", type: "password", placeholder: "Create a password" },
  ];
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false,    
    });
  }, []);
  return (
    
    <>
    <Loader />
      <Navbar
        links={navbarLinks}
        logo="/assets/imgs/logo.png"
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />

      <main>{children}</main>
      <Scroll2Top />
      <Footer
        logo="/assets/imgs/logo.png"
        data={footerData}
        Social={socialData}
        copy="© All rights reserved."
      />

      {showLogin && (
        <AuthModalWrapper
          title="Login"
          formField={loginFields}
          handelShow={handleClose}
          btn1="Login with Google"
          btn2="Login"
          onSwitchForm={handleSwitchForm}
        />
      )}

      {showRegister && (
        <AuthModalWrapper
          title="Sign Up"
          formField={signUpFields}
          handelShow={handleClose}
          btn1="Sign up with Google"
          btn2="Sign Up"
          onSwitchForm={handleSwitchForm}
        />
      )}
    </>
  );
}

export default ClientWrapper;
