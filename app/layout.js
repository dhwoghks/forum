import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar.js";
import Footer from "../components/Footer.js"; // Footer 컴포넌트 추가

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "오재환의 블로그",
    description: "많관부",
    icons:{
        icon: "/images/logo.png",
    }
};

export default async function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>오재환의 블로그</title>
                <meta name="description" content="여기는 오재환의 블로그입니다. 다양한 콘텐츠를 확인하세요." />

                {/* <!-- Open Graph Meta Tags for Social Media Sharing --> */}
                <meta property="og:title" content="오재환의 블로그" />
                <meta property="og:description" content="여기는 오재환의 블로그입니다. 다양한 콘텐츠를 확인하세요." />
                <meta property="og:image" content="https://ohjaehwan.com/images/logo.png" />
                <meta property="og:url" content="https://ohjaehwan.com" />

                {/* <!-- Twitter Card Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="오재환의 블로그" />
                <meta name="twitter:description" content="여기는 오재환의 블로그입니다. 다양한 콘텐츠를 확인하세요." />
                <meta name="twitter:image" content="https://ohjaehwan.com/images/logo.png" />

                {/* <!-- 서브도메인에 대한 메타 태그 추가 --> */}
                <meta property="og:site_name" content="오재환의 블로그" />
                <meta property="og:type" content="website" />

                {/* <!-- 서브도메인에 대한 추가 메타 태그 설정 -->
                <!-- 서브도메인 페이지에서 다음과 같은 추가 메타 태그를 설정할 수 있습니다 --> */}
                <meta property="og:title" content="오재환의 블로그 - 서브도메인" />
                <meta property="og:description" content="서브도메인 오재환의 블로그입니다. 더 많은 정보를 확인하세요." />
                <meta property="og:image" content="https://www.ohjaehwan.com/images/logo.png" />
                <meta property="og:url" content="https://www.ohjaehwan.com" />

                <meta name="twitter:title" content="오재환의 블로그 - 서브도메인" />
                <meta name="twitter:description" content="서브도메인 오재환의 블로그입니다. 더 많은 정보를 확인하세요." />
                <meta name="twitter:image" content="https://www.ohjaehwan.com/images/logo.png" />
            </head>
            <body className={inter.className}>
                <Navbar/>
                {children}
                <Footer /> {/* Footer 추가 */}
            </body>
        </html>
    );
}
