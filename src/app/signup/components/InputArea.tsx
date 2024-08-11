'use client';

import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import Image from 'next/image';

import IconUsers from '../../../components/IconComponents/IconUsers';
import EmailIcon from '@/public/icon/icon_email.svg';
import PasswordIcon from '@/public/icon/icon_pwd_gray.svg';
import InputText from '@/src/components/common/InputText';

interface InputAreaProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const InputArea = ({ register, errors }: InputAreaProps) => {
  return (
    <>
      <InputText
        type="text"
        id="clubName"
        variant="orange"
        shadow="lg"
        label="동아리 이름"
        icon={
          <IconUsers className="icon w-[24px] h-[24px] fill-none text-custom-gray-5 group-hover:text-black" />
        }
        additionalClass="w-[331px] h-[45px] mt-[13px]"
        {...register('clubName', { required: '동아리 이름을 확인해주세요' })}
      />
      {errors.clubName && (
        <span className="w-[331px] text-red-500 text-sm mt-[4px]">
          {typeof errors.clubName.message === 'string'
            ? errors.clubName.message
            : '잘못된 입력입니다.'}
        </span>
      )}

      <InputText
        type="text"
        id="email"
        variant="orange"
        shadow="lg"
        label="이메일"
        icon={<Image src={EmailIcon} width={24} height={24} alt="email" />}
        additionalClass="w-[331px] h-[45px] mt-[13px]"
        {...register('email', {
          required: '이메일을 확인해주세요',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: '유효한 이메일을 확인해주세요',
          },
        })}
      />
      {errors.email && (
        <span className="w-[331px] text-red-500 text-sm mt-[4px]">
          {typeof errors.email.message === 'string'
            ? errors.email.message
            : '잘못된 입력입니다.'}
        </span>
      )}

      <InputText
        type="text"
        id="verifyNumber"
        variant="orange"
        shadow="lg"
        label="인증번호"
        icon={<Image src={EmailIcon} width={24} height={24} alt="email" />}
        additionalClass="w-[331px] h-[45px] mt-[13px]"
        {...register('verifyNumber', { required: '인증번호를 확인해주세요' })}
      />
      {errors.verifyNumber && (
        <span className="w-[331px] text-red-500 text-sm mt-[4px]">
          {typeof errors.verifyNumber.message === 'string'
            ? errors.verifyNumber.message
            : '잘못된 입력입니다.'}
        </span>
      )}

      <InputText
        type="password"
        id="password"
        variant="orange"
        shadow="lg"
        label="비밀번호"
        icon={
          <Image src={PasswordIcon} width={24} height={24} alt="password" />
        }
        additionalClass="w-[331px] h-[45px] mt-[13px]"
        {...register('password', { required: '비밀번호를 확인해주세요' })}
      />
      {errors.password && (
        <span className="w-[331px] text-red-500 text-sm mt-[4px]">
          {typeof errors.password.message === 'string'
            ? errors.password.message
            : '잘못된 입력입니다.'}
        </span>
      )}

      <InputText
        type="password"
        id="password2"
        variant="orange"
        shadow="lg"
        label="비밀번호 확인"
        icon={
          <Image src={PasswordIcon} width={24} height={24} alt="password" />
        }
        additionalClass="w-[331px] h-[45px] mt-[13px]"
        {...register('password2', { required: '비밀번호를 다시 확인해주세요' })}
      />
      {errors.password2 && (
        <span className="w-[331px] text-red-500 text-sm mt-[4px]">
          {typeof errors.password2.message === 'string'
            ? errors.password2.message
            : '잘못된 입력입니다.'}
        </span>
      )}
    </>
  );
};

export default InputArea;
