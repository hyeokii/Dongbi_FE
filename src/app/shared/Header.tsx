'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/public/logo/logo.svg';
import LogoWord from '@/public/logo/logo_word.svg';

const HeaderContainer =
  'relative min-w-[768px] h-auto pt-[112px] flex flex-row';
const LogoContainer = 'absolute w-auto h-[120px] top-0';
const LogoWordContainer = 'mb-[27px] text-[24px] text-primary mr-auto ml-auto';

const Home = () => {
  return (
    <div className={HeaderContainer}>
      <div className={LogoContainer}>
        <Image src={Logo} width={214} height={120} alt="Logo" />
      </div>
      <div className={LogoWordContainer}>
        <Image src={LogoWord} width={203} height={26} alt="LogoWord" />
      </div>
    </div>
  );
};

export default Home;
