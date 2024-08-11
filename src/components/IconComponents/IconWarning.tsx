import { twMerge } from 'tailwind-merge';

interface IconWarningProps {
  className?: string;
}

const IconWarning = ({ className }: IconWarningProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge('w-20 h-20', className)}
    >
      <path
        d="M17 9.5C17 13.9183 13.4183 17.5 9 17.5C4.58172 17.5 1 13.9183 1 9.5C1 5.08172 4.58172 1.5 9 1.5C13.4183 1.5 17 5.08172 17 9.5Z"
        fill="#FF3B30"
      />
      <path
        d="M9 9.5V5.5M9 12.4648V12.5M17 9.5C17 13.9183 13.4183 17.5 9 17.5C4.58172 17.5 1 13.9183 1 9.5C1 5.08172 4.58172 1.5 9 1.5C13.4183 1.5 17 5.08172 17 9.5Z"
        stroke="white"
        strokeWidth="1.77778"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconWarning;
