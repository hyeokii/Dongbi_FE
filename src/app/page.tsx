'use client';
import Image from 'next/image';
import InputText from '../components/common/InputText';
import email from '../../public/icon/icon_email.svg';
import pwd from '../../public/icon/icon_pwd.svg';
import Checkbox from '../components/common/Checkbox';
import { useState } from 'react';
import CommonButton from '../components/common/CommonButton';

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h1>Common InputText</h1>
      <InputText
        type="text"
        variant={'orange'}
        shadow={'lg'}
        label="이메일"
        icon={<Image src={email} width={24} height={24} alt="email" />}
      />
      <InputText
        type="text"
        variant={'default'}
        shadow={'default'}
        label="아이디 입력"
        icon={<Image src={pwd} width={12} height={12} alt="icon" />}
      />
      <h1>Common Checkbox</h1>
      <Checkbox
        isDisabled={false}
        isChecked={isChecked}
        onChange={handleCheckboxChange}
      />
      <CommonButton
        text="Button 1"
        bgColor="bg-custom-orange"
        textColor="text-custom-white"
        radius="rounded-[20px]"
        shadowColor="shadow-custom-shadow-light"
        fontSize="text-16"
      />
      <CommonButton
        text="Button 2"
        bgColor="bg-custom-white"
        textColor="text-custom-black"
        radius="rounded-[6.25px]"
        shadowColor="shadow-custom-shadow"
        borderColor="border-custom-border"
        fontSize="text-14"
      />
      <CommonButton
        text="Button 3"
        bgColor="bg-custom-white"
        textColor="text-custom-black"
        radius="rounded-[20px]"
        shadowColor="shadow-custom-shadow-light"
        borderColor="border-custom-border"
        fontSize="text-16"
      />
    </main>
  );
}
