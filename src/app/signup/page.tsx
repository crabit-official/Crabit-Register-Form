import Image from 'next/image';

import AuthButtonContainer from '@/app/components/auth-button-container';

export default function Home() {
  return (
    <section className="h-dvh flex flex-col items-center justify-center bg-[#0E1013]">
      <div className="flex w-[300px] flex-col items-center justify-center p-[30px] md:w-[400px]">
        <div className="mb-[30px] flex flex-col items-center">
          <Image
            src={'/images/logo_dark.png'}
            alt={'Logo'}
            width={200}
            height={200}
          />
        </div>
        <section className="w-full text-center text-[20px] font-medium text-white">
          <h3>로그인 후 크래빗을 사용해보세요!</h3>
          <p className="mb-[30px] flex items-center justify-center">
            <h3 className="text-[#E1607E]">크래빗 서비스</h3>
            <strong className="ml-2">사전예약!</strong>
          </p>
        </section>
        <section className="w-full flex flex-col gap-5">
          <AuthButtonContainer />
        </section>
      </div>
    </section>
  );
}
