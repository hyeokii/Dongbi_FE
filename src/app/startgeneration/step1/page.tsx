'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Logo from '@/public/logo/logo.svg';
import LogoWord from '@/public/logo/logo_word.svg';
import Calendar from '@/public/icon/icon_calendar.svg';
import Dash from '@/public/icon/icon_dash.svg';
import IconUsers from '@/src/components/IconComponents/IconUsers';
import CommonButton from '@/src/components/common/CommonButton';
import InputText from '@/src/components/common/InputText';

const DateRow = 'flex flex-row mt-[13px] items-center';

const formatDate = (date: Date | string | undefined): string => {
  if (!date) return '';
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  console.log(`${year}.${month}.${day}`);
  return `${year}.${month}.${day}`;
};

const StartGeneration = () => {
  const router = useRouter();

  const [generationNumber, setGenerationNumber] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleGenerationNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setGenerationNumber(e.target.value);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!generationNumber) {
      alert('기수 번호를 입력해주세요');
      return;
    }

    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      alert('종료일이 시작일보다 앞설 수는 없습니다');
      return;
    }

    router.push('/startgeneration/step2');
  };

  return (
    <div className="min-h-screen bg-custom-gradient m-auto pb-[15%] justify-center items-center flex flex-col">
      <div className="w-auto h-auto mt-[77px]">
        <Image src={Logo} width={214} height={120} alt="Logo" />
      </div>
      <div className="mb-[27px] text-[24px] text-primary mr-auto ml-auto">
        <Image src={LogoWord} width={203} height={26} alt="LogoWord" />
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <InputText
            type="text"
            inputStyle="placeholder-custom-gray-4"
            id="generationNumber"
            value={generationNumber}
            onChange={handleGenerationNumberChange}
            variant="orange"
            shadow="lg"
            label="기수 번호"
            icon={
              <IconUsers className="icon w-[24px] h-[24px] fill-none text-black" />
            }
            additionalClass="w-[331px] h-[45px] mt-[13px] text-13 text-custom-gray-4"
          />
          <div className={DateRow}>
            <div className="relative flex items-center">
              <InputText
                type="date"
                inputStyle="w-[100px] input-date-placeholder"
                id="startDate"
                value={formatDate(startDate)}
                onChange={handleStartDateChange}
                variant="orange"
                shadow="lg"
                label=" "
                disable={false}
                icon={
                  <Image src={Calendar} width={17} height={19} alt="날짜" />
                }
                additionalClass="relative w-[154px] h-[45px] mr-[3.57px] input-date-placeholder"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-custom-gray-4  text-13">
                  {startDate ? formatDate(startDate) : '시작일'}
                </span>
              </div>
            </div>
            <Image src={Dash} width={17} height={19} alt="날짜" />
            <div className="relative flex items-center">
              <InputText
                type="date"
                inputStyle="w-[100px] input-date-placeholder"
                id="endDate"
                value={formatDate(endDate)}
                onChange={handleEndDateChange}
                variant="orange"
                shadow="lg"
                label=" "
                disable={false}
                icon={
                  <Image src={Calendar} width={17} height={19} alt="날짜" />
                }
                additionalClass="relative w-[154px] h-[45px] ml-[3.57px] input-date-placeholder"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-custom-gray-4  text-13">
                  {endDate ? formatDate(endDate) : '종료일'}
                </span>
              </div>
            </div>
          </div>
        </div>
        <CommonButton
          text="동아리원 추가하기"
          bgColor="orange"
          textColor="white"
          radius="moreRounded"
          shadowColor="lightShadow"
          fontSize="sm"
          additionalClass="w-[331px] h-[45px] mt-[72px]"
          onClickEvent={(event) => {
            event.preventDefault();
            onSubmit(event);
          }}
        />
      </form>
    </div>
  );
};

export default StartGeneration;
