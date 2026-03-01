export const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column align-items-start p-3">
            <h4 id="portfolio-title" className="sidebar-title text-center w-100 mt-3 mb-4">Mon Portfolio</h4>
            <nav className="sidebar-links d-flex flex-column flex-wrap w-100">
                <a className="sidebar-link w-100" href="#home">Accueil</a>
                <a className="sidebar-link w-100" href="#formation">Formation</a>
                <a className="sidebar-link w-100" href="#experience">Expérience</a>
                <a className="sidebar-link w-100" href="#skills">Compétences</a>
                <a className="sidebar-link w-100" href="#projects">Projets</a>
                <a className="sidebar-link w-100" href="#about">Loisirs</a>
                <a className="sidebar-link w-100" href="#cv">CV</a>
            </nav>
        </div>
    );
}