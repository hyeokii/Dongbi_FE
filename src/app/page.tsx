import Image from 'next/image';
import InputText from '../components/common/InputText';
import email from '../../public/email.svg';
import pwd from '../../public/pwd.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <InputText
        type="text"
        variant={'orange'}
        shadow={'lg'}
        label="이메일"
        icon={<Image src={email} width={24} height={24} alt="email" />}
      />
      <InputText
        type="text"
        variant={'default'}
        shadow={'default'}
        label="아이디 입력"
        icon={<Image src={pwd} width={12} height={12} alt="icon" />}
      />
    </main>
  );
}
