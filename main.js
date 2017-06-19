function loadHtml(file){
    var request = new XMLHttpRequest();
    request.open('GET', file, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var resp = request.responseText;
            document.querySelector('#post').innerHTML = resp;
        }else{
            alert('sss');
        }
    };

    request.onerror = function(){
        router('about');
    }
    request.send();
}

// For todays date;
Date.prototype.today = function () { 
    return (  
        this.getFullYear() + "" +  
     (((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) + "" 
     + ((this.getDate() < 10)?"0":"") + this.getDate()
     );
}



function router(hash){
    var d = new Date();
    hash = hash ? hash:(location.hash ? location.hash : d.today());
    var file = hash+'.html';
    loadHtml(file);
}

router();