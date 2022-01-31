window.onload = function(){
    var binnen = document.querySelector("#binnen");
    var buiten = document.querySelector("#buiten");
    var x = 0;
    var z = 0;

    binnen.onmouseover = function(){
        binnen.innerHTML = x+=1;
        binnen.style.backgroundColor = "yellow";
    }
    binnen.onmouseout = function(){
        buiten.innerHTML += "De muis beweegt buiten het kader<br>";
        binnen.style.backgroundColor = "#fff";
    }
    binnen.onmousedown = function(){
        binnen.innerHTML += z+=1;
    }
    binnen.onmouseleave = function(){
        binnen.innerHTML += z-=1;
    }
    binnen.onmousemove = function(){
        binnen.innerHTML = x+=1;
    }
}