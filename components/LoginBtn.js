'use client';
import { signIn } from 'next-auth/react'
const redirectUri = process.env.REDIRECT_URI;

export default function LoginBtn() {
  return <button class="dropdown" onClick={() => { signIn() }}>로그인</button>
} 