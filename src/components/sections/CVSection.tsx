export const CVSection = () => {
    return (
        <div id="cv" className="section">
            <h2>Mon CV</h2>
            <div className="d-flex justify-content-center align-items-center sub-section">
                <p className="mt-4">Vous pouvez télécharger mon CV en cliquant sur le bouton ci-dessous :</p>
                <a style={{color: "orange"}} id="cv-download" href="/CV/Hannoir%20Romain%20-%20CV.pdf" download="Hannoir Romain - CV"
                   className="mt-2 mx-3 btn btn-warning hover-text-white">
                    Télécharger le CV
                </a>
            </div>
        </div>
    )
}