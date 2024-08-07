'use client';
import React, { useState } from 'react';
import Header from '../shared/Header';
import ClubMemberList from './components/ClubMemberList';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFEDE3] from-5% via-[#FFFCF6] via-20% to-white to-75% w-full min-w-[800px] pb-[15%] justify-center items-center flex flex-col">
      <Header />
      <div className="flex flex-col items-center pt-[64px] w-[768px]">
        <div className="flex flex-col items-center font-bold text-[35px]">
          <div>(동아리명)</div>
          <div>n기 명단 및 회비 제출 현황</div>
        </div>
        <div className="pt-[31px] text[20px] font-bold">
          n기 활동기간:2024.06.10 - 2024.12.31
        </div>
        <ClubMemberList />
      </div>
    </div>
  );
};

export default Home;
