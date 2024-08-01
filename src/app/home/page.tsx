'use client';
import React, { useState } from 'react';
import Header from '../shared/Header';
import UpperBox from './components/UpperBox';
import AddMinusLog from './components/AddMinusLog';
import CommonModal from '@/src/components/common/CommonModal';
import MinusModal from './components/MinusModal';
import PlusModal from './components/PlusModal';

const Home = () => {
  const [addModalToggle, setAddModalToggle] = useState(false);
  const [minusModalToggle, setMinusModalToggle] = useState(true);

  return (
    <div className="w-full pb-[15%] justify-center items-center flex flex-col">
      <Header />
      <UpperBox
        setAddModalToggle={setAddModalToggle}
        setMinusModalToggle={setMinusModalToggle}
      />
      <AddMinusLog />
      {addModalToggle && (
        <CommonModal
          setToggle={setAddModalToggle}
          goBack={false}
          content={<PlusModal />}
        />
      )}
      {minusModalToggle && (
        <CommonModal
          setToggle={setMinusModalToggle}
          goBack={false}
          content={<MinusModal />}
        />
      )}
    </div>
  );
};

export default Home;
