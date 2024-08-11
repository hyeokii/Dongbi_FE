import { twMerge } from 'tailwind-merge';

interface IconNewGenerationProps {
  className?: string;
}

const IconNewGeneration = ({ className }: IconNewGenerationProps) => {
  return (
    <svg
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge('w-20 h-20', className)}
    >
      <path
        d="M19.3692 1.08545C20.5801 1.08545 21.5617 2.05362 21.5617 3.24792L21.5617 6.93938C21.5617 8.13368 20.5801 9.10185 19.3692 9.10185H16.0804C14.8696 9.10185 13.8879 8.13368 13.8879 6.93938L13.8879 3.24792C13.8879 2.05362 14.8695 1.08545 16.0804 1.08545L19.3692 1.08545Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.02161 1.08545C2.81072 1.08545 1.8291 2.05362 1.8291 3.24792L1.82911 6.93938C1.82911 8.13368 2.81073 9.10185 4.02162 9.10185H7.31039C8.52128 9.10185 9.50291 8.13368 9.50291 6.93938L9.5029 3.24792C9.5029 2.05362 8.52127 1.08545 7.31038 1.08545L4.02161 1.08545Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3692 12.8017C20.5801 12.8017 21.5617 13.7699 21.5617 14.9642V18.6556C21.5617 19.8499 20.5801 20.8181 19.3692 20.8181H16.0804C14.8696 20.8181 13.8879 19.8499 13.8879 18.6556L13.8879 14.9642C13.8879 13.7699 14.8696 12.8017 16.0804 12.8017H19.3692Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.02162 12.8017C2.81073 12.8017 1.82911 13.7699 1.82911 14.9642L1.82911 18.6556C1.82911 19.8499 2.81074 20.8181 4.02163 20.8181H7.3104C8.52129 20.8181 9.50291 19.8499 9.50291 18.6556L9.50291 14.9642C9.50291 13.7699 8.52128 12.8017 7.31039 12.8017H4.02162Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconNewGeneration;
