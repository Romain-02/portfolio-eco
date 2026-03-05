import Image from "next/image";

export const ExperienceSection = () => {
    return (
        <div id="experience" className="section d-flex flex-column">
            <h2>Expérience</h2>
            <div className="d-flex flex-column justify-content-center align-items-center sub-section">
                <div className="div-text reverse d-flex justify-content-center align-items-center w-100">
                    <div className="mr-4 ml-2 mb-2 w-100">
                        <Image src="/images/logo-primever-2015-quadri.webp" className="primever-img" alt="primever" width={300} height={120} style={{objectFit: "contain", width: "100%", height: "auto"}}/>
                    </div>
                    <div>
                        <h3 className="effect" style={{margin: 16}}>Développeur web full stack en alternance chez Primever (2025–2026)</h3>
                        <p className="text-justify effect" style={{margin: 16}}>
                            Dans le cadre de mon BUT, j'ai pu réalisé ma deuxième et troisième année d'alternance chez
                            Primever en tant que développeur web full stack. J’ai participé au développement et à la
                            maintenance de plusieurs applications web, principalement avec React et Symfony, et j’ai
                            également travaillé avec le framework GLPI pour la mise en place d’une solution d’assistance
                            (gestion et remontée des tickets).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}