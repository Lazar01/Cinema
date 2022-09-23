function prikazSlike(idSlike)
{
    var modal = document.getElementById("myModal");
    var img = document.getElementById(idSlike)
    var modalImg = document.getElementById("slikaa");
    modal.style.display = "block";
    modalImg.src = img.src;
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
}
function provera(event) 
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(document.getElementById("ime").value=="" || document.getElementById("ime").value==null)
        {
            alert("Niste uneli ime!");
            document.forma.ime.focus();
            event.preventDefault();
            return false;
        }
    else if(document.getElementById("prezime").value=="" || document.getElementById("prezime").value==null)
        {
            alert("Niste uneli prezime!");
            document.forma.prezime.focus();
            event.preventDefault();
            return false;
        }
    else if(!(document.getElementById("email").value.match(mailformat)))
        {
            alert("Uneli ste neispravnu email adresu!");
            document.forma.email.focus();
            event.preventDefault();
            return false;
        }
    else if(document.getElementById("poruka").value=="" || document.getElementById("poruka").value==null)
        {
            alert("Niste uneli tekst poruke!");
            document.forma.poruka.focus();
            event.preventDefault();
            return false;
        }
    else
    {
        alert("Uspešno ste nas kontaktirali. Očekujte odgovor u naredna 24 časa.");
        return true;
    }
    
}
function rezervacijeProvera(event){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var telefonformat = /[\+]{1}[3]{1}[8]{1}[[1]{1}[6]{1}[0-9]{1}\/[0-9]{2}-[0-9]{2}-[0-9]{3}/;

     if(!(document.getElementById("emailRezervacije").value.match(mailformat)))
        {
            alert("Uneli ste neispravnu email adresu!");
            document.rezervacija.emailRezervacije.focus();
            document.getElementById("emailRezervacije").classList.add('greska');
            event.preventDefault();
            return false;
        }
    else if(document.getElementById("telefon").value=="" || document.getElementById("telefon").value==null || !(document.getElementById("telefon").value.match(telefonformat)))
        {
            alert("Niste uneli ispravan broj telefon ili ga niste uneli uopste!");
            document.rezervacija.telefon.focus();
            document.getElementById("telefon").classList.add('greska');
            event.preventDefault();
            return false;
        }
    else
    {
        alert("Uspešno ste rezervisali karte.");
        document.getElementById("emailRezervacije").classList.remove('greska');
        document.getElementById("telefon").classList.remove('greska');
        return true;
    }
}
