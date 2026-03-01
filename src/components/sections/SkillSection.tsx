export const SkillSection = () => {
    return (
        <div id="skills" className="section">
            <h2>Compétences</h2>
            <div className="skills-container w-100">
                <div className="skill-category mb-4">
                    <h3 className="skill-category-title">Langages</h3>
                    <div className="skill-logos">
                        <div className="skill-logo effect" title="Java">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                 alt="Java"/>
                        </div>
                        <div className="skill-logo effect" title="Python">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                 alt="Python"/>
                        </div>
                        <div className="skill-logo effect" title="JavaScript">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                alt="JavaScript"/>
                        </div>
                        <div className="skill-logo effect" title="PHP">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                                 alt="PHP"/>
                        </div>
                        <div className="skill-logo effect" title="C/C++">
                            <span className="badge text-dark info-badge badge-in-progress">En cours</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C/C++"/>
                        </div>
                    </div>
                </div>

                <div className="skill-category mb-4">
                    <h3 className="skill-category-title">Frontend</h3>
                    <div className="skill-logos">
                        <div className="skill-logo effect" title="React">
                            <span className="badge text-dark info-badge">Main</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                 alt="React"/>
                        </div>
                        <div className="skill-logo effect" title="Angular">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                                alt="Angular"/>
                        </div>
                        <div className="skill-logo effect" title="Tailwind">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                                alt="Tailwind"/>
                        </div>
                        <div className="skill-logo effect" title="Bootstrap">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                alt="Bootstrap"/>
                        </div>
                        <div className="skill-logo effect" title="NextJS">
                            <span className="badge text-dark info-badge badge-in-progress">En cours</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                                 alt="NextJS"/>
                        </div>
                    </div>
                </div>

                <div className="skill-category mb-4">
                    <h3 className="skill-category-title">Backend & Bases de données</h3>
                    <div className="skill-logos">
                        <div className="skill-logo effect" title="Symfony">
                            <span className="badge text-dark info-badge">Main</span>
                            <img src="https://img.alwaysdata.com/marketplace/symfony.svg" alt="Symfony"/>
                        </div>
                        <div className="skill-logo effect" title="Laravel">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                                 alt="Laravel"/>
                        </div>
                        <div className="skill-logo effect" title="Spring">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                                 alt="Spring"/>
                        </div>
                        <div className="skill-logo effect" title="SQL">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                                alt="PostgreSQL"/>
                        </div>
                        <div className="skill-logo effect" title="SQLite">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
                                 alt="SQLite"/>
                        </div>
                    </div>
                </div>

                <div className="skill-category mb-4">
                    <h3 className="skill-category-title">Outils</h3>
                    <div className="skill-logos">
                        <div className="skill-logo effect" title="Git">
                            <span className="badge text-dark info-badge">Main</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                 alt="Git"/>
                        </div>
                        <div className="skill-logo effect" title="Gitlab">
                            <span className="badge text-dark info-badge">Main</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
                                 alt="Gitlab"/>
                        </div>
                        <div className="skill-logo effect" title="Github">
                            <img src="/images/github.png" alt="Github"/>
                        </div>
                        <div className="skill-logo effect" title="Docker">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                                 alt="Docker"/>
                        </div>
                        <div className="skill-logo effect" title="Jira">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
                                 alt="Jira"/>
                        </div>
                        <div className="skill-logo effect" title="GLPI">
                            <img src="https://remiflandrois.fr/wp-content/uploads/2022/08/GLPI_Logo-color.png"
                                 alt="GLPI"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}