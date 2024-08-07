import { twMerge } from 'tailwind-merge';

interface IconEmailProps {
  className?: string;
}

const IconEmail = ({ className }: IconEmailProps) => {
  return (
    <svg
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge('w-20 h-20', className)}
    >
      <path
        d="M3.125 4.49992L7.57309 7.69342C7.82993 7.87781 8.17007 7.87781 8.42691 7.69342L12.875 4.49992M3.5 12.6666H12.5C13.3284 12.6666 14 11.9701 14 11.111V4.88881C14 4.0297 13.3284 3.33325 12.5 3.33325H3.5C2.67157 3.33325 2 4.0297 2 4.88881V11.111C2 11.9701 2.67157 12.6666 3.5 12.6666Z"
        stroke="currentColor"
        strokeWidth="1.41667"
      />
    </svg>
  );
};

export default IconEmail;
