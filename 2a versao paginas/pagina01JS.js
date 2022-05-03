var nome = ("Guilherme Motta");
document.write(nome, "<br>");
var ano = 2021;
document.write("Ano - ", ano, "<br>");
var twitter = ("@guilhermemotta");
document.write("Twitter: ", twitter, "<br>");
var facebook = ("@guilhermemotta");
document.write("Facebook: ", facebook, "<br>");
var instagram = ("@guilhermemotta");
document.write("Instagram: ", instagram, "<br>");
var linkedin = ("@guilhermemotta");
document.write("LinkedIn: ", linkedin, "<br>");
var sexo = ("Masculino");
document.write("Sexo: ", sexo, "<br>");
var local = ("Porto Alegre");
document.write("Localização - Polo: ", local);

function onBodyLoad(){

        const d = new Date();
        const h = d.getHours();
        const dia = d.getDay();

        var text;
        var text2 = "hoje é "

        if(h >= 0 && h <= 12)
          text = "Bom dia"
        else if(h > 12 && h <= 18)
          text = "Boa tarde"
        else
          text = "Boa noite"

        switch(dia){
          case 0:
            text2 += "domingo";
            break;
          case 1:
            text2 += "segunda";
            break;
          case 2:
            text2 += "terça";
            break;
          case 3:
            text2 += "quarta";
            break;
          case 4:
            text2 += "quinta";
            break;
          case 5:
            text2 += "sexta";
            break;
          case 6:
            text2 += "sábado";
            break;
          default:
            break;
}

var msg = "Sou o Guilherme Almeida Motta \r\nSanta Maria, RS - ADS - MACKENZIE\r\n";
msg += text + "! " + text2;
alert(msg);
}
