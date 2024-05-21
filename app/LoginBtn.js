'use client';
import { signIn } from 'next-auth/react'
import "./globals.css";


export default function LoginBtn() {
  return <button class="dropdown" onClick={() => { signIn() }}>로그인</button>
} 