// Descreva esta função...
function abrir_tela() {
  localStorage.setItem('inicial',getParameters()['id'] === undefined ? "" : getParameters()['id']);
  clearInterval(timer);
  window.location.href = "login.html";}


//feito com bootblocks.com.br
  $("body").css("height", "100%");
  $("html").css("height", "100%");
  $("#"+'image_1').animate({height:200+"px",width:200+"px"},1500);
  var timer = setInterval(abrir_tela, 2000);

//feito com bootblocks.com.br
function getParameters(){
                let url = window.location.href;
                let parametros = url.split("?");
                let retorno = [];
                if(parametros.length > 1){
                    parametros = parametros[1].split("&");
                    for(let i = 0; i < parametros.length; i++){
                        let parametro = parametros[i].split("=");
                        retorno[parametro[0]] = parametro[1];
                    }
                }
                return retorno;
            }  
            
        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });