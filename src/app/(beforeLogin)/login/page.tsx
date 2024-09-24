'use client';

import styles from '@/app/(beforeLogin)/_component/main.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import zLogo from '../../../../public/zlogo.png';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  router.replace('/i/flow/login');
  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}

// 서버컴포넌트 리다이레트 예시
// import {redirect} from "next/navigation";

// export default function Login() {
//   redirect('/i/flow/login')
// }
