'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Logo from '@/public/logo/logo.svg';
import LogoWord from '@/public/logo/logo_word.svg';
import CommonButton from '@/src/components/common/CommonButton';

interface Member {
  generationNumber: string;
  name: string;
}

const InputArea = 'flex flex-row ';

const StartGenerationStep2 = () => {
  const router = useRouter();

  const [generationNumber, setGenerationNumber] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [memberList, setMemberList] = useState<Member[]>([]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push('/home');
  };

  const onAddMemberList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!generationNumber) {
      alert('기수를 선택해주세요');
    } else if (!name) {
      alert('이름을 입력해주세요');
    }

    setMemberList([...memberList, { generationNumber, name }]);
    setGenerationNumber('');
    setName('');
  };

  return (
    <div className="min-h-screen bg-custom-gradient m-auto pb-[15%] justify-center items-center flex flex-col">
      <div className="w-auto h-auto mt-[77px]">
        <Image src={Logo} width={214} height={120} alt="Logo" />
      </div>
      <div className="mb-[27px] text-[24px] text-primary mr-auto ml-auto">
        <Image src={LogoWord} width={203} height={26} alt="LogoWord" />
      </div>
      <form>
        <div className={InputArea}>
          <div>
            <select
              name="기수 선택"
              value={generationNumber}
              onChange={(e) => setGenerationNumber(e.target.value)}
            >
              <option value="">기수 선택</option>
              <option>현재기수</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div>
            <select
              name="이름 선택"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={generationNumber === '현재기수'}
            >
              <option value="">이름 선택</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="이름 직접 입력"
            value={name}
            disabled={generationNumber !== '현재기수'}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="button" onClick={onAddMemberList}>
            추가하기
          </button>
        </div>
      </form>
      <div>
        {memberList.map((el, index) => (
          <div key={index}>{el?.generationNumber + '기' + el?.name}</div>
        ))}
      </div>
      <CommonButton
        text="새 기수 시작하기"
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
    </div>
  );
};

export default StartGenerationStep2;
