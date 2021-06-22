
// Class pour les requetes de reponses
class HttpResponse{                 
    constructor(data,status) {
            this.data=data;  //data represente les information envoyer au client
            this.status=status;  //status l'état de traitement
    }
} 
// Class pour les requetes entrante 
class HttpRequest {
        constructor(data,cookie) {
                this.data=data; //data represente les information recus
                this.dateTime=new Date();
                this.key="ServerCode";
                this.cookie=cookie;    
        }       
}

// Class authentification pour les connexions et les Inscriptions
class Authentification{
    constructor(email,password) {
            this.email=email;
            this.password=password;
    }   
}


class SessionCookie{
        constructor(Session_Id,Id_User){
                this.Id_User=Id_User;
                this.Session_Id=Session_Id;                        
        }
        
}

class User {
        constructor(nom,prenom,dateNaissance,lieuNaissance,adresse,telephone,sexe) {
                this.nom=nom;
                this.prenom=prenom;
                this.dateNaissance=dateNaissance;
                this.lieuNaissance=lieuNaissance;
                this.adresse=adresse;
                this.telephone=telephone;
                this.sexe=sexe;            
        }
    }


    class Message{
        constructor(IdMessage,id_User,messagContent,messageSender,messageDate) {
            this.IdMessage=IdMessage;   
            this.messageContent=messagContent;
            this.messageSender=id_User == messageSender
            this.messageDate=messageDate;
    
        }
        
    }    
    
    
    
    
module.exports.HttpResponse= HttpResponse;
module.exports.HttpRequest= HttpRequest;
module.exports.Authentification= Authentification;
module.exports.SessionCookie=SessionCookie;
module.exports.User = User  ;
module.exports.Message=Message;




