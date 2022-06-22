/*libKatze v0.3*/
const d = document
const katze = {

    cout : function(ctext) {
        console.log(ctext);
    },
    
    cwipe : function() {
        console.clear();
    },
    
    ver : function() {
        return 0.3
    },
    
//LocalStorage stuff

    mkLsKey : function(lskey, lskval) {
        localStorage.setItem(lskey, lskval);
        console.log("Made local storage key at /settings/local/" + lskey);
    },

    rdLsKey : function(lskey) {
        return localStorage.getItem(lskey);
    },

    rmLsKey : function(lskey) {
        localStorage.removeItem(lskey);
        console.log("Deleted local storage key at /settings/local/" + lskey);
    },

    rmLs : function() {
        localStorage.clear();
        console.log("Wiped /ware/ls0p1.lsfs");
    },

//Cookies

    mkCky : function(ckyName, ckyVal) {
        document.cookie = ckyName + "=" + ckyVal;
    },

    mkCkyWD : function(ckyName, ckyVal, expire) {
        document.cookie = ckyName + "=" + ckyVal + "; expires=";
    },

    lsCkys : function() {
        allCookies = document.cookie;
        return allCookies;
    },

    rmCky : function(ckyName) {
        document.cookie = ckyName + "=deleted; expires=" + new Date().toUTCString();
    },

    rmCkys : function() {
        for (const cookie of document.cookie.split(";")) {
            const name = cookie.indexOf("=") > -1 ? cookie.substr(0, cookie.indexOf("=")) : cookie;
            document.cookie = name + "=;expires=01 Jan 1970";
        }
    },
    
//General Purpose
    
    shHrefWID : function(elemid, newhref) {
        document.getElement(elemid).href = newhref;
    },
    
    svStrAFl : function(tIF) {
        const txtblob = new Blob([tIF], {type: "text/plain"})
        txtbloburl = URL.createObjectURL(txtblob)
    },
    
    clearSSAFBlob : function() {
        URL.revokeObjectURL(txtbloburl)
    }
    
}

const k = katze
