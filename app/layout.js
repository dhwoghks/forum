import {Inter} from "next/font/google";
import "./globals.css";
import LoginBtn from "./LoginBtn.js"
import LogoutBtn from "./LogoutBtn.js"

import {getServerSession} from 'next-auth'
import {authOptions} from '@/pages/api/auth/[...nextauth]'

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};

export default async function RootLayout({children}) {
    let session = await getServerSession(authOptions);
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className='navbar'>
                    <nav>
                        <ul>
                            <li class="dropdown">
                                <div class="dropdown-menu">게시판</div>
                                <div class="dropdown-content">
                                    <a href="/write">글쓰기</a>
                                    <a href="list">글목록</a>
                                    <a href="#">Menu1-3</a>
                                    <a href="#">Menu1-4</a>
                                </div>
                            </li>
                            <li class="dropdown">
                                <div class="dropdown-menu">Menu2</div>
                                <div class="dropdown-content">
                                    <a href="#">Menu2-1</a>
                                    <a href="#">Menu2-2</a>
                                    <a href="#">Menu2-3</a>
                                    <a href="#">Menu2-4</a>
                                </div>
                            </li>
                            <li class="dropdown">
                                <div class="dropdown-menu">Menu3</div>
                                <div class="dropdown-content">
                                    <a href="#">Menu3-1</a>
                                    <a href="#">Menu3-2</a>
                                    <a href="#">Menu3-3</a>
                                    <a href="#">Menu3-4</a>
                                </div>
                            </li>
                            <li class="dropdown">
                                <div class="dropdown-menu">Menu4</div>
                            </li>
                    {
                        session
                            ? <span class = 'dropdown-menu' >{session.user.name} <LogoutBtn></LogoutBtn>
                                </span>
                            : <LoginBtn></LoginBtn>
                    }
                            <li class="home">
                                <a href="/">Home</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {children}
            </body>
        </html>
    );
}
