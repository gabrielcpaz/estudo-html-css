function resize(target) {
    var a = this.document.getElementById(target).style.visibility;
  
  if(a != 'visible') {
        this.document.getElementById('btn'+target).innerHTML = '[-]';
        this.document.getElementById('btn'+target).innerHTML = '[-]';
        this.document.getElementById(target).style.visibility = 'visible';
        this.document.getElementById(target).style.height = '';
  }
  else {
        this.document.getElementById('btn'+target).innerHTML = '[+]';
        this.document.getElementById('btn'+target).innerHTML = '[+]';
        this.document.getElementById(target).style.visibility = 'hidden';
        this.document.getElementById(target).style.height = '1';
  }      
}   

function resizeAll() {
  this.document.getElementById('tomcat').style.height = '';
    this.document.getElementById('tomcat').style.visibility = 'visible';
  
    this.document.getElementById('adm').style.height = '';
    this.document.getElementById('adm').style.visibility = 'visible';
  
    this.document.getElementById('links').style.height = '';
    this.document.getElementById('links').style.visibility = 'visible';
  
    this.document.getElementById('fornecedores').style.height = '1';
    this.document.getElementById('fornecedores').style.visibility = 'hidden';
  
    this.document.getElementById('ariusinterno').style.height = '1';
    this.document.getElementById('ariusinterno').style.visibility = 'hidden';
  
    this.document.getElementById('interno').style.height = '1';
    this.document.getElementById('interno').style.visibility = 'hidden';
}   


  function pegaNome() {
      var tmp = location.href.substr(location.href.lastIndexOf("/") + 1);
      tmp = tmp.substring(0, tmp.lastIndexOf(".html"));

      if (tmp=="AriusWEB" || tmp=="AriusWEB2" || tmp=="AriusWEB3"){
        tmp = "Arius";
      }
    
  document.getElementById("nome").value = tmp;
  }