import LoginBtn from "./LoginBtn.js"
import LogoutBtn from "./LogoutBtn.js"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function Navbar() {
    let session = await getServerSession(authOptions);
    return (
        <div className='navbar'>
            <nav>
                <ul>
                    <li className="dropdown">
                        <div className="dropdown-menu">게시판</div>
                        <div className="dropdown-content">
                            <a href="/write">글쓰기</a>
                            <a href="list">글목록</a>
                            <a href="#">Menu1-3</a>
                            <a href="#">Menu1-4</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <div class="dropdown-menu">Menu2</div>
                        <div class="dropdown-content">
                            <a href="#">Menu2-1</a>
                            <a href="#">Menu2-2</a>
                            <a href="#">Menu2-3</a>
                            <a href="#">Menu2-4</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <div class="dropdown-menu">Menu3</div>
                        <div class="dropdown-content">
                            <a href="#">Menu3-1</a>
                            <a href="#">Menu3-2</a>
                            <a href="#">Menu3-3</a>
                            <a href="#">Menu3-4</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <div class="dropdown-menu">Menu4</div>
                    </li>
                    {
                        session
                            ? <span className='dropdown-menu' >{session.user.name} <LogoutBtn></LogoutBtn>
                            </span>
                            : <LoginBtn></LoginBtn>
                    }
                    <li className="home">
                        <a href="/">Home</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}