export const ProjectSection = () => {
    return (
        <div id="projects" className="section d-flex flex-column justify-content-center">
            <h2>Projets</h2>
            <h3 className="text-center my-4">Ces projets sont automatiquement reliés à mon github.</h3>
            <div className="mx-auto w-75 projects-grid">
                {/* Projet: Sélection naturelle */}
                <article className="project-card">
                    <img style={{objectFit: "contain", height: "160px", width: "auto"}} className={"rounded-circle"} src="/images/java.png" alt="Sélection naturelle - Java"/>
                    <h3>Sélection naturelle</h3>
                    <p className="description">Il s'agit d'une petite simulation réalisée en JavaFX avec des attrapeurs et des fugitives qui possèdent différentes caractéristiques pour illustrer la sélection naturelle.</p>
                </article>

                {/* Projet: Jeu échec */}
                <article className="project-card">
                    <img style={{objectFit: "contain", height: "160px", width: "auto"}} className={"rounded-circle"} src="/images/echec.png" alt="Jeu échec"/>
                    <h3>Jeu échec</h3>
                    <p className="description text-justify">Un peu avant mon BUT, j'ai décidé d'apprendre Java en faisant un jeu d'échec en utilisant Swing. J'ai obtenu un jeu plus ou moins fonctionnel mais avec quelques erreurs que j'ai pu modifier après mes premiers cours de BUT. Enfin j'ai ajouté un ordinateur utilisant megamax pour rajouter de la difficulté.</p>
                </article>

                {/* Projet: Rental car */}
                <article className="project-card">
                    <img style={{objectFit: "contain", height: "160px", width: "auto"}} className={"rounded-circle"} src="/images/js.png" alt="Rental car (Angular/Laravel)"/>
                    <h3>Rental car</h3>
                    <p className="description text-justify">Réalisation d’une application de location de voitures dans le cadre d’une SAE, développée en groupe avec Angular pour le front-end et communiquant avec un backend Laravel.</p>
                </article>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div id="selectedProject" className="effect"></div>
                <div></div>
                <div id="list-repositories"
                     className="d-flex justify-content-center align-items-center sub-section flex-wrap mt-2 ml-2">
                </div>
            </div>
        </div>
    );
}