export const Footer = () => {
    return (
        <footer className="footer mt-4">
            <div className="footer-container w-100">
                <div className="footer-row d-flex justify-content-center mt-2">
                    <div className="footer-col text-center mt-2">
                        <h5>Contact</h5>
                        <p>Email : <a href="mailto:r.hannoir@gmail.com">r.hannoir@gmail.com</a></p>
                        <p id="phone">Téléphone : <a href="tel:+33749133025">+33 7 49 13 30 25</a></p>
                    </div>
                    <div className="footer-col text-center mt-2">
                        <h5>Suivez-moi</h5>
                        <ul className="footer-list mt-2">
                            <li><a href="https://github.com/Romain-02">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/romain-hannoir">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="footer-divider"/>
                <div className="footer-row">
                    <div className="footer-col text-center">
                        <p className="mb-0">© 2024 Hannoir Romain - PortFolio.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}