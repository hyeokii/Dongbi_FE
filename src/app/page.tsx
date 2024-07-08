'use client';
import Image from 'next/image';
import InputText from '../components/common/InputText';
import email from '../../public/email.svg';
import pwd from '../../public/pwd.svg';
import Checkbox from '../components/common/Checkbox';
import { useState } from 'react';

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
    </main>
  );
}