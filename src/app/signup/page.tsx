'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

import Logo from '@/public/logo/logo.svg';
import LogoWord from '@/public/logo/logo_word.svg';
import CommonButton from '@/src/components/common/CommonButton';
import InputArea from './components/InputArea';

interface SignupFormData {
  clubName: string;
  email: string;
  verifyNumber: string;
  password: string;
  password2: string;
}

const SignupStep1 = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = (data: SignupFormData) => {
    const { password, password2 } = data;

    if (password !== password2) {
      alert('Passwords do not match!');
      return;
    }

    router.push('/signup/step2');
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-custom-gradient m-auto pb-[15%] justify-center items-center flex flex-col">
      <div className="w-auto h-auto mt-[77px]">
        <Image src={Logo} width={214} height={120} alt="Logo" />
      </div>
      <div className="mb-[27px] text-[24px] text-primary mr-auto ml-auto">
        <Image src={LogoWord} width={203} height={26} alt="LogoWord" />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center"
      >
        <InputArea register={register} errors={errors} />
        <CommonButton
          text="회원가입"
          bgColor="orange"
          textColor="white"
          radius="moreRounded"
          shadowColor="lightShadow"
          fontSize="sm"
          additionalClass="w-[331px] h-[45px] mt-[72px]"
          onClickEvent={handleSubmit(onSubmit)}
        />
      </form>

      <div className="text-[#767676] text-13 mt-[36px]">
        이미 계정이 있으신가요?
      </div>
      <div className="text-13 font-extrabold text-custom-orange mt-[8px] cursor-pointer">
        <Link href="/login">로그인</Link>
      </div>
    </div>
  );
};

export default SignupStep1;
