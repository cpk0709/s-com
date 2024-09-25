'use client';

import styles from '@/app/(beforeLogin)/_component/main.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import zLogo from '../../../../public/zlogo.png';
import Link from 'next/link';
import Main from '../_component/Main';

export default function Login() {
  const router = useRouter();
  router.replace('/i/flow/login');
  return <Main />;
}

// 서버컴포넌트 리다이레트 예시
// import {redirect} from "next/navigation";

// export default function Login() {
//   redirect('/i/flow/login')
// }
