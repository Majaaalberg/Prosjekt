document.getElementById("year").addEventListener("change", val);
document.getElementById("month").addEventListener("change", val);
document.getElementById("branch").addEventListener("change", val);



function val() {
    initialClear();
    console.log("Fyre1");
    year = document.getElementById("year").value;
    month = document.getElementById("month").value;
    branch = document.getElementById("branch").value;
    let show = constructFetch(year, month, branch);
    var x = document.getElementsByClassName(String(show));
    for(var i=0; i < x.length; i++){
        console.log(i);
        x[i].style.display = "inline-block";
        
    }
}

function constructFetch(year, month, branch){
    console.log("Fyre2");
    var fetch = year + "-" + month + "-" + branch;
    return fetch;
}

function initialClear(){
    console.log("Fyre3");
    var x = document.getElementsByClassName("default");
    for (var i=0; i < x.length; i++){
         x[i].style.display = "none";
    }
}
