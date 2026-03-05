import Image from "next/image";

export const SkillSection = () => {
    return (
        <div id="skills" className="section">
            <h2>Compétences</h2>
            <div className="skills-container w-100">
                <div className="skill-category mb-4">
                    <h3 className="skill-category-title">Langages</h3>
                    <div className="skill-logos">
                        <div className="skill-logo effect" title="Java">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="Python">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="JavaScript">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="PHP">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="C/C++">
                            <span className="badge text-dark info-badge badge-in-progress">En cours</span>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C/C++" width={60} height={60} unoptimized/>
                        </div>
                    </div>
                </div>

                <div className="skill-category mb-4">
                    <h3 className="skill-category-title">Frontend</h3>
                    <div className="skill-logos">
                        <div className="skill-logo effect" title="React">
                            <span className="badge text-dark info-badge">Main</span>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="Angular">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="Tailwind">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="Bootstrap">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="NextJS">
                            <span className="badge text-dark info-badge badge-in-progress">En cours</span>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="NextJS" width={60} height={60} unoptimized/>
                        </div>
                    </div>
                </div>

                <div className="skill-category mb-4">
                    <h3 className="skill-category-title">Backend & Bases de données</h3>
                    <div className="skill-logos">
                        <div className="skill-logo effect" title="Symfony">
                            <span className="badge text-dark info-badge">Main</span>
                            <Image src="https://img.alwaysdata.com/marketplace/symfony.svg" alt="Symfony" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="Laravel">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="Spring">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="SQL">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="SQLite">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" width={60} height={60} unoptimized/>
                        </div>
                    </div>
                </div>

                <div className="skill-category mb-4">
                    <h3 className="skill-category-title">Outils</h3>
                    <div className="skill-logos">
                        <div className="skill-logo effect" title="Git">
                            <span className="badge text-dark info-badge">Main</span>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="Gitlab">
                            <span className="badge text-dark info-badge">Main</span>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" alt="Gitlab" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="Github">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="Docker">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="Jira">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" width={60} height={60} unoptimized/>
                        </div>
                        <div className="skill-logo effect" title="GLPI">
                            <Image src="https://remiflandrois.fr/wp-content/uploads/2022/08/GLPI_Logo-color.png" alt="GLPI" width={60} height={60} unoptimized/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}