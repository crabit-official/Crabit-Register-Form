'use client';

import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Heading from '@/app/components/ui/heading';
import Input from '@/app/components/ui/input';
import Modal from '@/app/components/ui/modal';

import useLoginModal from '@/app/hooks/use-login-modal';
import useRegisterModal from '@/app/hooks/use-register-modal';

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = () => {
    setIsLoading(true);
    // 데이터 요청, 성공시 registerModal.onClose
    // onSettled setIsLoading(false);
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Crabit에 오신 것을 환영합니다."
        subTitle="계정을 생성해주세요!"
      />
      <Input
        id="email"
        label="이메일"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="비밀번호"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      {/*<Button*/}
      {/*  outline*/}
      {/*  label="구글로 로그인하기"*/}
      {/*  onClick={() => {}}*/}
      {/*  icon={FcGoogle}*/}
      {/*/>*/}
      {/* 소셜로그인 추가 될 떄 마다 아래 버튼 추가 */}
      <div className="flex flex-row justify-center items-center gap-2">
        <div>이미 크래빗 계정이 없으신가요?</div>
        <div
          onClick={() => {
            loginModal.onClose();
            registerModal.onOpen();
          }}
          className="text-neutral-800 cursor-pointer hover:underline"
        >
          회원가입
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={'로그인'}
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="로그인"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
