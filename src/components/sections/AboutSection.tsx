export const AboutSection = () => {
    return (
        <div id="about" className="section">
            <h2>Loisir</h2>
            <div className="d-flex justify-content-center align-items-center sub-section flex-wrap hobbyContainer mt-5 mb-0">
                <div>
                    <img src="/images/velo.png" className="hobbyImg" alt="sport"/>
                    <p>J'aime le sport depuis petit, en particulier le football. Aujourd'hui, je fais surtout de la course, du vélo et de la natation.</p>
                </div>
                <div className="effect">
                    <img src="/images/manette.webp" className="hobbyImg" alt="jeux vidéos"/>
                    <p>J'ai toujours aimé les jeux vidéo, notamment le côté compétitif. C'est cela qui m'a motivé à apprendre la programmation.</p>
                </div>
                <div className="effect">
                    <img src="/images/echec.png" className="hobbyImg" alt="echec"/>
                    <p>Après avoir créé un jeu d'échecs, j'ai commencé à y jouer de plus en plus afin de m'améliorer jusqu'à devenir un joueur régulier.</p>
                </div>
            </div>
        </div>
    );
}