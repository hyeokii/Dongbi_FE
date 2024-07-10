import React from 'react';

interface CommonButtonProps {
  text: string;
  bgColor: 'bg-custom-orange' | 'bg-custom-white';
  textColor: string;
  radius: 'rounded-[6.25px]' | 'rounded-[20px]';
  shadowColor: 'shadow-custom-shadow' | 'shadow-custom-shadow-light';
  borderColor?: 'border-custom-border';
  fontSize: 'text-14' | 'text-16';
}

const CommonButton = ({
  text,
  bgColor,
  textColor,
  radius,
  shadowColor,
  borderColor,
  fontSize,
}: CommonButtonProps) => {
  return (
    <button
      className={`w-full py-2 ${bgColor} ${textColor} ${radius}  ${borderColor ? `border-2 ${borderColor}` : 'black'} ${shadowColor} ${fontSize}`}
    >
      {text}
    </button>
  );
};

export default CommonButton;
