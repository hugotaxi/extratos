var tabelaidlogin, email, tabelaidloginsenha, senha, tabelaidcorridas, tabelaidcorridacliente, resultado_pesquisa, Item;

// Descreva esta função...
function verificarlogin() {
  email = document.getElementById('input_email').value;
  senha = document.getElementById('input_senha').value;
  if (!email.length) {
    Swal.fire('Preencha com o Nome!');
  } else {
    if (!senha.length) {
      Swal.fire('Preencha com o Telefone!');
    } else {
      function getRowsSearch() {
        fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidlogin+"/?user_field_names=true&filter__field_"+tabelaidloginsenha+"__"+"equal"+"="+senha+ "&order_by="+"+"+'senha', {
        method: "GET",
        headers: {
        "Authorization": "Token " + bb_baserow_token
        }
        })
        .then(response => response.json())
        .then(data => {
          resultado_pesquisa = data.results;
            if (!resultado_pesquisa.length) {
          Swal.fire('Senha não encontrada!');
        } else {
          for (var Item_index in resultado_pesquisa) {
            Item = resultado_pesquisa[Item_index];
            localStorage.setItem('usuarioindentificado',(Item['nome']));
            window.location.href = "extrato.html?enh";
          }
        }

        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
      getRowsSearch();
    }
  }
}



        function qclick() {
            let elementoClick = document.getElementById('button_entrar');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      Swal.fire('Preencha com o Nome!');

                });
            }
        }
        qclick();

var bb_baserow_token = 'IKrER8jZ6NQENRIxVlNeF65L5J3ss1LH';
var bb_baserow_url = 'https://api.baserow.io/';

//feito com bootblocks.com.br
  tabelaidlogin = '177839';
  tabelaidloginsenha = '1188493';
  tabelaidcorridas = '177840';
  tabelaidcorridacliente = '1188495';
  if (localStorage.getItem('inicial') || '0' != '0') {
    $("#input_email").val('Automatico');
    $("#input_senha").val(localStorage.getItem('inicial') || '0');
    verificarlogin();
  }

        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });