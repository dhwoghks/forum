import './Footer.css'; // CSS 파일 import

export default function Footer() {
    return (
        <footer className="footer">
            <p>© 2024 오재환의 블로그</p>
            <div className="footer-info">
                <span>e-mail: dhwoghks0223@gmail.com </span>
                <span> | </span>
                <a href="https://www.instagram.com/5jaehwan" target="_blank" rel="noopener noreferrer">
                    <img src="/images/인스타.jpg" alt="Instagram" className="social-icon" />
                </a>
            </div>
        </footer>
    );
}
