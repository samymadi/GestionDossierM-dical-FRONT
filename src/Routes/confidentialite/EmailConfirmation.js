import Styles from '../../Styles/Confidentialite/EmailConfirmation.module.css'
import Email from '../../Assests/Icons/Email.png'

function EmailConfirmation() {
    return (
        <div className={Styles.email_confirmation}>
              <div className={Styles.container}>
                    <img src={Email}/>
                    <p>Verifiez votre boite Email</p>
                    <p>un Email de vérification avec un code a été envoyé a <br /> samymadi187@gmail.com</p>
                    <input maxLength="6" type="text" placeholder=""/>
                    <button>Verifier</button>
                    <p>Renvoyer le code ?</p>
              </div>
        </div>
    )
}

export default EmailConfirmation;
