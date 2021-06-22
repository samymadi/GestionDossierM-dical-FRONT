function verifiyData(...list){
    for (const element of list) {
            if(!element || element.trime() ==="")
                return false;
    }

        return true;
}   



exports.verifiyData = verifiyData; 