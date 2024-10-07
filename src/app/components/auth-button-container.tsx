'use client';

import Button from '@/app/components/ui/button';
import useLoginModal from '@/app/hooks/use-login-modal';
import useRegisterModal from '@/app/hooks/use-register-modal';

const AuthButtonContainer = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  return (
    <>
      <Button outline label="회원가입" onClick={() => registerModal.onOpen()} />
      <div className="flex w-full items-center justify-around px-8">
        <div className="w-full border-gray-400 border-b-2" />
        <p className="text-slate-200 px-4 font-bold">OR</p>
        <div className="w-full border-gray-400 border-b-2" />
      </div>
      <Button outline label="로그인" onClick={() => loginModal.onOpen()} />
    </>
  );
};

export default AuthButtonContainer;
