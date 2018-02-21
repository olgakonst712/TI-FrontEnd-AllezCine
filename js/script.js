function age()
{
    var a = prompt("Quel âge à tu mon petit?");

    if(a>=18)
    {
        window.open ("index.html");
    }
    else
    {
        window.open ("http://www.disneystore.fr/personnages/la-reine-des-neiges");
    }


}

function vaEtVient(){
    if(document.getElementById('invisible').style.display == 'none'){
      document.getElementById('invisible').style.display = 'block';
      }
      else {
      document.getElementById('invisible').style.display = 'none';
    }
}
