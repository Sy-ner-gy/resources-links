class Model extends Storage{
    constructor(){
        super()
        this.connect();
    }
    updateFirebase(nameFolder,msg,key){//Método que sabe realizar atualação no DB
        let json={}
        if(msg){
         typeof msg == "object"?json=Object.assign(json,msg):json.msg=msg
         this.getFireBaseRef(nameFolder).child(key).set(json)
        }
     }
     returnsPercent(value,total){
        return value*100/total
    }
    deleteFirebase(nameFolder,key){//Método que sabe excluir
        return this.getFireBaseRef(nameFolder).child(key).remove()
    }
    getFireBaseRef(reff="list"){
        return firebase.database().ref(reff)
    }
    createFirebase(ref,json){//Método que cria
        this.getFireBaseRef(ref).push().set(json)
    }
    connect(){//Método que realiza a conexão no DB
        var firebaseConfig = {
            apiKey: "AIzaSyA8BNlCtqkJDlZ0eTbsvUPv8SjqF1HS1x0",
            authDomain: "links-c35c1.firebaseapp.com",
            projectId: "links-c35c1",
            storageBucket: "links-c35c1.appspot.com",
            messagingSenderId: "824466057273",
            appId: "1:824466057273:web:9117c0b9b09f77940945e8",
            measurementId: "G-KXYD6LV2NE"
          };
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    }
}