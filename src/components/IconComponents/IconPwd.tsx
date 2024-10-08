import { twMerge } from 'tailwind-merge';

interface IconPwdProps {
  className?: string;
}

const IconPwd = ({ className }: IconPwdProps) => {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge('w-20 h-20', className)}
    >
      <path
        d="M2.5 6.33333V5.57143C2.5 3.039 4.50714 1 7 1C9.49286 1 11.5 3.039 11.5 5.57143V6.33333M2.5 6.33333C1.675 6.33333 1 7.01905 1 7.85714V15.4762C1 16.3143 1.675 17 2.5 17H11.5C12.325 17 13 16.3143 13 15.4762V7.85714C13 7.01905 12.325 6.33333 11.5 6.33333M2.5 6.33333H11.5M7 12.5V10.5"
        stroke="currentColor"
        strokeWidth="1.41667"
      />
    </svg>
  );
};

export default IconPwd;
