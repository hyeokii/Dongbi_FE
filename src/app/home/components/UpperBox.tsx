'use client';
import React, { useState } from 'react';
import AssetBox from './AssetBox';
import ButtonBox from './ButtonBox';

const UpperBoxContainer =
  'w-full h-fit min-w-[768px]  bg-gradient-to-b from-white to-orange-100 rounded-b-[20px] justify-center items-center flex flex-col';
const GenerationText = 'text-[35px]';

const UpperBox = () => {
  const [generation, setGeneration] = useState('');
  return (
    <div className={UpperBoxContainer}>
      <div className={GenerationText}>clubname generation기</div>
      <AssetBox />
      <ButtonBox />
    </div>
  );
};

export default UpperBox;
