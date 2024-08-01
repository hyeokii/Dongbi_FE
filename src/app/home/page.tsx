'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/public/logo/logo.svg';
import InputText from '@/src/components/common/InputText';
import emailIcon from '@/public/icon/icon_email.svg';
import pwdIcon from '@/public/icon/icon_pwd_gray.svg';
import Link from 'next/link';
import CommonButton from '@/src/components/common/CommonButton';
import Header from '../shared/Header';
import UpperBox from './components/UpperBox';
import AddMinusLog from './components/AddMinusLog';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    alert(`Logging in with: ${email}, ${password}`);
  };

  return (
    <div className="w-full pb-[15%] justify-center items-center flex flex-col">
      <Header />
      <UpperBox />
      <AddMinusLog />
      {/* <form>
        <InputText
          type="email"
          variant={'orange'}
          shadow={'lg'}
          label="이메일"
          icon={<Image src={emailIcon} width={24} height={24} alt="email" />}
          additionalClass="mb-5 w-[331px] h-[45px]"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <InputText
          type="text"
          variant={'orange'}
          shadow={'lg'}
          label="비밀번호"
          icon={<Image src={pwdIcon} width={24} height={24} alt="pwd" />}
          additionalClass=" w-[331px] h-[45px]"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </form>

      <div className="flex justify-end mt-2 text-11 text-[#767676] pointer w-[331px]">
        <Link href={'/'}> Forgot password?</Link>
      </div>

      <CommonButton
        text="로그인"
        bgColor="orange"
        textColor="white"
        radius="moreRounded"
        shadowColor="lightShadow"
        fontSize="sm"
        additionalClass="w-[331px] h-[45px] mt-6"
        onClickEvent={handleLogin}
      /> */}
    </div>
  );
};

export default Home;
