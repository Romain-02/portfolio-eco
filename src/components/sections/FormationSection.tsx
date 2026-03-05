import Image from "next/image";

export const FormationSection = () => {
    return (
        <div id="formation" className="section d-flex flex-column">
            <h2>Formation</h2>
            <div className="d-flex flex-column justify-content-center align-items-center sub-section">
                <div className="div-text reverse d-flex justify-content-center align-items-center w-100">
                    <div className="mr-4 ml-2 mb-2">
                        <Image src="/images/iut.jpg" className="effect" alt="iut" width={300} height={200} style={{objectFit: "cover", width: "100%", height: "auto"}}/>
                    </div>
                    <div style={{margin: 16}}>
                        <h3 className="effect">Préparation d'un bachelor universitaire de technologie (BUT)
                            informatique.</h3>
                        <p className="text-justify effect">Depuis 2023, j'étudie à l'IUT de Lens pour obtenir mon BUT
                            informatique. J'ai validé les six compétences de première année, et je suis actuellement en
                            deuxième année.
                        </p>
                    </div>
                </div>
                <div className="div-text d-flex justify-content-center align-items-center w-100">
                    <div style={{margin: 16}}>
                        <h3 className="effect">Obtention du baccalauréat général Math/NSI.</h3>
                        <p className="text-justify effect">En 2023, j'ai obtenu au lycée Blaise Pascal de Longuenesse
                            mon baccalauréat avec les spécialités Maths, Maths expertes et NSI avec mention très
                            bien.</p>
                    </div>
                    <div className="m-2 ml-4">
                        <Image id="lycee" className="effect" src="/images/lycee.png" alt="lycee" width={300} height={200} style={{objectFit: "contain", width: "95%", height: "auto"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}