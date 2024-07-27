'use client';
import React, { useState } from 'react';
import Header from '../../shared/Header';

const UpperBoxContainer =
  'w-full h-fit min-w-[768px]  bg-gradient-to-b from-white to-orange-100 rounded-b-[20px] justify-center items-center flex flex-col';
const GenerationText = 'text-[35px]';

const UpperBox = () => {
  const [generation, setGeneration] = useState('');
  return (
    <div className={UpperBoxContainer}>
      <Header />
      <div className={GenerationText}>clubname generation기</div>
    </div>
  );
};

export default UpperBox;
