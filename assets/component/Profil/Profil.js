import React from "react";

const Profil = () => {
    return (
        <div className="profile_container">
            <h2>Mon profil</h2>
            <div className="profile_picture">
                <img src="#" alt=""/>
            </div>
            <div className="profile_form">
                <form action="">
                    <div className="input_box">
                        <label htmlFor="pseudo">Pseudo :</label>
                        <input type="text" id="pseudo" name="pseudo"/>
                    </div>
                    <div className="input_box">
                        <label htmlFor="prenom">Prenom :</label>
                        <input type="text" id="prenom" name="prenom"/>
                    </div>
                    <div className="input_box">
                        <label htmlFor="nom">Nom :</label>
                        <input type="text" id="nom" name="nom"/>
                    </div>
                    <div className="input_box">
                        <label htmlFor="telephone">Telephone :</label>
                        <input type="tel" id="telephone" name="telephone"/>
                    </div>
                    <div className="input_box">
                        <label htmlFor="email">Email :</label>
                        <input type="email" id="email" name="email"/>
                    </div>
                    <div className="input_box">
                        <label htmlFor="password">Mot de passe :</label>
                        <input type="password" id="password" name="password"/>
                    </div>
                    <div className="input_box">
                        <label htmlFor="confirmation_pass">Confirmation :</label>
                        <input type="password" id="confirmation_pass" name="confirmation_pass"/>
                    </div>
                    <div className="input_box">
                        <label htmlFor="campus">Campus :</label>
                        <select name="campus" id="campus"></select>
                    </div>
                    <div className="input_box">
                        <label htmlFor="picture">Ma photo :</label>
                        <input type="file" id="picture" name="picture"/>
                    </div>
                    <div className="button_box">
                        <button type="submit">Enregistrer</button>
                        <button>Annuler</button>
                    </div>
                </form>
            </div>
            

        </div>
    )
}

export default Profil;