'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/public/icon/icon_logo.svg';
import coins from '@/public/icon/icon_coins.svg';
import hamburger from '@/public/icon/icon_hamburger.svg';
import InputText from '@/src/components/common/InputText';
import user from '@/public/icon/icon_user.svg';
import CommonButton from '@/src/components/common/CommonButton';
import pwd from '@/public/icon/icon_pwd.svg';
import graypwd from '@/public/icon/icon_pwd_gray.svg';
import email from '@/public/icon/icon_email.svg';
import grayemail from '@/public/icon/icon_email_gray.svg';
import warning from '@/public/icon/icon_warning.svg';

const page = () => {
  const [formValues, setFormValues] = useState({
    clubName: '',
    prevPwd: '',
    newPwd: '',
    checkPwd: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#FFEDE3] from-5% via-[#FFFCF6] via-20% to-white to-75% min-w-[800px]">
      <div className=" min-h-screen w-[768px] m-auto pb-[15%] items-center flex flex-col ">
        <div className="flex items-center w-full">
          <div>
            <Image
              src={coins}
              width={214}
              height={120}
              alt="Logo"
              className="absolute"
            />
            <Image
              src={Logo}
              width={200}
              height={100}
              alt="Logo"
              className="pt-12"
            />
          </div>
          <div className=" text-primary text-[24px]  flex-1 ml-[68px]">
            <span>당신의 </span>
            <span className="text-[32px]  font-bold">동</span>
            <span>아리 </span>
            <span className="text-[32px]  font-bold">비</span>
            <span>서</span>
          </div>
          <div className="cursor-pointer">
            <Image
              src={hamburger}
              width={22}
              height={17}
              alt="Logo"
              className=""
            />
          </div>
        </div>
        <div className="w-full flex items-center pl-6 justify-between">
          <div className="w-[115px] font-bold">동아리 이름</div>
          <div className="flex gap-[90px]">
            <InputText
              type="text"
              id="clubName"
              value={formValues.clubName}
              variant={'default'}
              shadow={'default'}
              label="동아리 이름"
              icon={<Image src={user} width={16} height={16} alt="icon" />}
              additionalClass="w-[331px]"
              onChange={handleChange}
            />
            <CommonButton
              text="변경하기"
              bgColor="orange"
              textColor="white"
              radius="lessRounded"
              shadowColor="lightShadow"
              fontSize="sm"
              additionalClass="w-[127px] h-[49px] "
              onClickEvent={() => {
                alert(`buttonClicked : 버튼이 클릭되었습니다`);
              }}
            />
          </div>
        </div>
        <div className="w-full flex items-start justify-between pl-6 pt-[42px] ">
          <div className="w-[115px] pt-4 font-bold">비밀번호 변경</div>
          <div className="flex flex-col gap-[17px]">
            <InputText
              type="text"
              id="prevPwd"
              value={formValues.prevPwd}
              variant={'default'}
              shadow={'default'}
              label="기존 비밀번호"
              icon={<Image src={pwd} width={12} height={16} alt="icon" />}
              additionalClass="w-[331px]"
              onChange={handleChange}
            />
            <InputText
              type="text"
              id="newPwd"
              value={formValues.newPwd}
              variant={'default'}
              shadow={'default'}
              label="새 비밀번호"
              icon={<Image src={pwd} width={12} height={16} alt="icon" />}
              additionalClass="w-[331px]"
              onChange={handleChange}
            />
            <div className="flex gap-[90px]">
              <div className=" relative">
                <InputText
                  type="text"
                  id="checkPwd"
                  value={formValues.checkPwd}
                  variant={'default'}
                  shadow={'default'}
                  label="새 비밀번호 확인"
                  icon={<Image src={pwd} width={12} height={16} alt="icon" />}
                  additionalClass="w-[331px]"
                  onChange={handleChange}
                />
                <div className="absolute right-2 top-0 h-full flex justify-center items-center">
                  <Image src={warning} width={16} height={16} alt="warning" />
                </div>
              </div>

              <CommonButton
                text="변경하기"
                bgColor="orange"
                textColor="white"
                radius="lessRounded"
                shadowColor="lightShadow"
                fontSize="sm"
                additionalClass="w-[127px] h-[49px] "
                onClickEvent={() => {
                  alert(`buttonClicked : 버튼이 클릭되었습니다`);
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex items-start justify-between pl-6 pt-[89px] ">
          <div className="w-[115px] pt-4 font-bold">이메일 변경</div>
          <div className="flex flex-col gap-[17px]">
            <div className="flex gap-[90px]">
              <div className="relative  ">
                <InputText
                  type="text"
                  id="checkPwd"
                  value={formValues.checkPwd}
                  variant={'default'}
                  shadow={'default'}
                  label="기존 이메일 주소"
                  icon={
                    <Image src={grayemail} width={16} height={16} alt="icon" />
                  }
                  disable={true}
                  additionalClass="w-[331px] cursor-not-allowed bg-gray-200"
                  onChange={handleChange}
                />
                <div className="absolute right-2 top-0 h-full text-[14px] flex justify-center items-center">
                  <Image src={graypwd} width={12} height={16} alt="pwd" />
                </div>
              </div>
              <CommonButton
                text="변경하기"
                bgColor="orange"
                textColor="white"
                radius="lessRounded"
                shadowColor="lightShadow"
                fontSize="sm"
                additionalClass="w-[127px] h-[49px] "
                onClickEvent={() => {
                  alert(`buttonClicked : 버튼이 클릭되었습니다`);
                }}
              />
            </div>
            <div className="relative w-[331px]">
              <InputText
                type="text"
                id="prevPwd"
                value={formValues.prevPwd}
                variant={'default'}
                shadow={'default'}
                label="새 이메일 주소"
                icon={<Image src={email} width={16} height={16} alt="icon" />}
                additionalClass="w-[331px]"
                onChange={handleChange}
              />
              <button className="absolute right-2 top-0 h-full text-[14px] text-gray-400">
                인증
              </button>
            </div>
            <div className="relative w-[331px]">
              <InputText
                type="text"
                id="prevPwd"
                value={formValues.prevPwd}
                variant={'default'}
                shadow={'default'}
                label="인증 번호"
                icon={<Image src={email} width={16} height={16} alt="icon" />}
                additionalClass="w-[331px]"
                onChange={handleChange}
              />

              <div className="absolute right-2 top-0 h-full  flex justify-center items-center">
                <div className="w-[14px] h-[14px] rounded-full bg-no-repeat bg-square-check-yes bg-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full pt-[66px]">
          <button
            className="text-[#8E8E93] text-[20px]"
            onClick={() => {
              alert(`buttonClicked : 버튼이 클릭되었습니다`);
            }}
          >
            회원 탈퇴
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
