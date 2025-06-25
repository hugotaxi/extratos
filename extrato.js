var tabelaidlogin, resultado_pesquisa, id, Item, tabelaidloginsenha, tabelaidcorridas, tabelaidcorridacliente, usuarionome, temporizador_1, id200, nome_recebedor_pix, cidade_recebedor_pix, chave_pix, numero_whatsapp, nomescli200, todosvalores, somadesaldo, valor200, informacao200;

// Descreva esta função...
function callnome() {
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidcorridas+"/?user_field_names=true&filter__field_"+tabelaidcorridacliente+"__"+"equal"+"="+usuarionome+ "&order_by="+"+"+'cliente'+"&page="+'1', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultado_pesquisa = data.results;
        if (!resultado_pesquisa.length) {
      Swal.fire('Erro');
    } else {
      id = 0;
      var Item_list = (resultado_pesquisa.reverse());
      for (var Item_index in Item_list) {
        Item = Item_list[Item_index];
        id = id + 1;
      }
      if (id > 99) {
        pagina2();
      } else {
        pagina1();
      }
    }

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function pagina1() {
  id = 0;
  for (var Item_index2 in resultado_pesquisa) {
    Item = resultado_pesquisa[Item_index2];
    id = id + 1;
    var card = '<div onclick="calldivisa('+'telatodos1'+')" class="cardview" id="'+'telatodos1'+'" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">'
    card += '<div class="row">'
    card += '<div class="col-4">'
    card += '<img class="imagem_cardview" id="imagem_cardview" style="width:50px; height:50px;" src="'+'assets/icon1.png'+'" alt="imagem">'
    card += '</div>'
    card += '<div class="col-8">'
    card += '<span class="titulo_cardview" id="titulo_cardview" style="font-weight: bold; font-size: 16px">'+([Item['cliente'],'  ','<span style="font-size:13px; color:#cc6600; font-weight:bold; font-style:normal;">'+('R$ ' + String(Item['valor']))+' </span>'].join(''))+'</span><br>'
    card += '<span class="subtitulo_cardview" id="subtitulo_cardview" style="font-size: 13px">'+'<span style="font-size:14px; color:#000000; font-weight:bold; font-style:normal;">'+(Item['informacao'])+' </span>'+'</span><br>'
    card += '<span class="texto_adicional_cardview" id="texto_adicional_cardview" style="font-size: 13px">'+''+'</span>'
    card += '</div>'
    card += '</div>'
    card +=' </div>'
    document.getElementById("telatodos").innerHTML += card;
    calldesigner();
    todosvalores.push((Item['valor']));
  }
  for (var Item_index3 in todosvalores) {
    Item = todosvalores[Item_index3];
    somadesaldo = (txt_to_number(somadesaldo)) + (txt_to_number(Item));
  }
  calculos();
}

// Descreva esta função...
function calldesigner() {
  $(".cardview").css("border", 1 + "px solid #000000");
  $(".cardview").css("border-radius", "20px");
  $(".cardview").css("height", (window.innerHeight * (13 / 100)) + "px");
  $(".cardview").css("width", '90' + "%");
  $("."+'subtitulo_cardview').css("margin-left", (-50)+"px");
  $("."+'subtitulo_cardview').css("margin-right", 0+"px");
  $("."+'subtitulo_cardview').css("margin-top", 0+"px");
  $("."+'subtitulo_cardview').css("margin-bottom", 0+"px");
}

// Descreva esta função...
function pagina2() {
  var Item_list2 = (resultado_pesquisa.reverse());
  for (var Item_index4 in Item_list2) {
    Item = Item_list2[Item_index4];
    id200.push((Item['id']));
    nomescli200.push((Item['cliente']));
    valor200.push((Item['valor']));
    informacao200.push((Item['informacao']));
  }
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidcorridas+"/?user_field_names=true&filter__field_"+tabelaidcorridacliente+"__"+"equal"+"="+usuarionome+ "&order_by="+"+"+'cliente'+"&page="+'2', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultado_pesquisa = data.results;
        for (var Item_index5 in resultado_pesquisa) {
      Item = resultado_pesquisa[Item_index5];
      id200.push((Item['id']));
      nomescli200.push((Item['cliente']));
      valor200.push((Item['valor']));
      informacao200.push((Item['informacao']));
    }
    chamarlista();

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function callpix() {
  clearInterval(temporizador_1);
  let valor_pix_qr = (format_decimal_number(somadesaldo, 2, true));
  let nome_pix_qr = nome_recebedor_pix;
  let cidade_pix_qr = cidade_recebedor_pix;
  let chave_pix_qr = chave_pix;
  let telefone_pix_qr = numero_whatsapp;
  let url_pix_qr = "https://pagmp.com/pix/index.php?chave=" + chave_pix_qr + "&valor=" + valor_pix_qr + "&nome=" + nome_pix_qr + "&cidade=" + cidade_pix_qr + "&fone=" + telefone_pix_qr;
  window.open(url_pix_qr, "_self");
}

// Descreva esta função...
function chamarlista() {
  id = 0;
  for (var Item_index6 in nomescli200) {
    Item = nomescli200[Item_index6];
    id = id + 1;
    var card = '<div onclick="calldivisa23('+'telatodos1'+')" class="cardview" id="'+'telatodos1'+'" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">'
    card += '<div class="row">'
    card += '<div class="col-4">'
    card += '<img class="imagem_cardview" id="imagem_cardview" style="width:50px; height:50px;" src="'+'assets/icon1.png'+'" alt="imagem">'
    card += '</div>'
    card += '<div class="col-8">'
    card += '<span class="titulo_cardview" id="titulo_cardview" style="font-weight: bold; font-size: 16px">'+Item+'</span><br>'
    card += '<span class="subtitulo_cardview" id="subtitulo_cardview" style="font-size: 13px">'+(['<span style="font-size:16px; color:#993300; font-weight:normal; font-style:normal;">'+('R$ ' + String(valor200.slice((-id))[0]))+' </span>',' ',informacao200.slice((-id))[0]].join(''))+'</span><br>'
    card += '<span class="texto_adicional_cardview" id="texto_adicional_cardview" style="font-size: 13px">'+''+'</span>'
    card += '</div>'
    card += '</div>'
    card +=' </div>'
    document.getElementById("telatodos").innerHTML += card;
    todosvalores.push((valor200.slice((-id))[0]));
    calldesigner();
  }
  for (var Item_index7 in todosvalores) {
    Item = todosvalores[Item_index7];
    somadesaldo = (txt_to_number(somadesaldo)) + (txt_to_number(Item));
  }
  calculos();
}

// Descreva esta função...
function calculos() {
  document.getElementById('telatodos').style.overflow = "scroll";
  $("#"+'c4').show();
  $("#lbtotal").html(('Total R$ ' + String(format_decimal_number(somadesaldo, 2, false))));
  $("#lbadicional").html((['Anotaçoes (',id,')'].join('')));
}


var bb_baserow_token = 'IKrER8jZ6NQENRIxVlNeF65L5J3ss1LH';
var bb_baserow_url = 'https://api.baserow.io/';

//feito com bootblocks.com.br
  tabelaidlogin = '177839';
  tabelaidloginsenha = '1188493';
  tabelaidcorridas = '177840';
  tabelaidcorridacliente = '1188495';
  id200 = [];
  nomescli200 = [];
  valor200 = [];
  informacao200 = [];
  numero_whatsapp = '5577988331234';
  chave_pix = 'e181ddbf-ada2-4302-a9e0-131a6f2875e4';
  nome_recebedor_pix = 'Victor Hugo';
  cidade_recebedor_pix = 'taxicandeias';
  somadesaldo = 0;
  todosvalores = [];
  usuarionome = localStorage.getItem('usuarioindentificado') || 'Erro';
  callnome();


        function qclick() {
            let elementoClick = document.getElementById('c4');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      Swal.fire((['Gerando link de pagamento de R$ ',format_decimal_number(somadesaldo, 2, true),'. <br>',nome_recebedor_pix].join('')));
  temporizador_1 = setInterval(function(){
    callpix();
  }, 3000);

                });
            }
        }
        qclick();


        function qclick2() {
            let elementoClick = document.getElementById('lbtotal');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      Swal.fire((['Gerando link de pagamento de R$ ',format_decimal_number(somadesaldo, 2, true),'. <br>',nome_recebedor_pix].join('')));
  temporizador_1 = setInterval(function(){
    callpix();
  }, 3000);

                });
            }
        }
        qclick2();
function txt_to_number(txt){
            txt = txt+"";
            if(txt.includes(",")){
                txt = txt.replace(",", ".");
            }
            if(txt.includes(".")){
                txt = parseFloat(txt);
            }else{
                txt = parseInt(txt);
            }
            return txt;
        }function format_decimal_number(number, places, virgula = false){
                number = number + "";
                if(number.includes(",")){
                    number = number.replace(",", ".");
                    number = parseFloat(number);
                }else{
                    number = parseFloat(number);
                }
                number = number.toFixed(places);
                if(virgula){
                    number = number.replace(".", ",");
                }
                return number;
            }
        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });