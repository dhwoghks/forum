'use client';
import { signOut } from 'next-auth/react'
import "./globals.css";


export default function LogoutBtn() {
  return <button class="dropdown" onClick={() => { signOut() }}>로그아웃</button>
} 