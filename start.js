//multiply_btc
ok = 1;
onde = 'hi';
lost = 0;
win = 0;
max = 3;
max2 = parseFloat($('#balance').html()) - ((parseFloat($('#balance').html()) / 100) * 2);
ganho_inicial = parseFloat($('#balance').html());
moeda = 'doge'; //doge, btc
cont = 0;
ganhadas = 0;
perdidas = 0;
if (moeda == 'btc') {
  min = 0.00000001;
} else {
  min = 0.059;
}

function reativar() {
  $('#double_your_' + moeda + '_min').click();
  ok = 1;
  $('#reativar').hide();
}
$('body').append('<div id="tabela" style="padding: 25px;border: 6px solid cyan; overflow:hidden; position: fixed; z-index:99999999999; top: 50px;right: 50px;width: 300px;height: 360px; background:yellow;"><span style="    width: 100%; position: relative; float: left;font-size: 20px" id="ganhadas"></span><span style="    width: 100%; position: relative; float: left;font-size: 20px" id="perdidas"></span><span style="    width: 100%; position: relative; float: left;font-size: 20px" id="minimo"></span><span style="    width: 100%; position: relative; float: left;font-size: 20px ; margin:10px;" id="ganhos">GANHOS:</span><span style="    width: 100%; position: relative; float: left;font-size: 40px; " id="ganhos2"></span><button id="reativar"  style="display:none;" onclick="reativar()">reativar</button></div>');

function ganar() {
  a = $('#double_your_' + moeda + '_bet_win').css('display');
  if (document.title == "00m:30s - FreeDoge.co.in - Win free dogecoins every hour!") {
    ok = 0;
  }
  if ((parseFloat($('#balance').html()) - (parseFloat($('#double_your_' + moeda + '_stake').val() * 2))) < max2) {
    ok = 0;
    if (a == "block")
    {
      reativar();
    }
    else {
      ok = 0;
      document.title = "LIMITE !"
      $('#reativar').show();
      //beep();
    }
  } else {
    document.title = $('#balance').html();
  }
  if (a == "block") {
    cont = 0;
    onde = 'hi';
  }
  if (ok == 1 && cont < max) {
    if ($('#double_your_' + moeda + '_bet_hi_button').attr('disabled') == 'disabled') {} else {
      a = $('#double_your_' + moeda + '_bet_win').css('display');
      if (a == "block") {
        max2 = max2 + min;
        ganhadas = ganhadas + 1;
        win = win + 1;
        cont = 0;
        $('#double_your_' + moeda + '_stake').val(min);
        $('#double_your_' + moeda + '_bet_' + onde + '_button').click();
      } else {
        if (lost > 1) {
          lost = 0;
        }
        perdidas = perdidas + 1;
        lost = lost + 1;
        cont = cont + 1;
        $('#double_your_' + moeda + '_2x').click();
        $('#double_your_' + moeda + '_bet_' + onde + '_button').click();
      }
    }
  } else {
    cont = 0;
    onde = 'lo';
  }
  $('#ganhadas').html("Ganhadas (HI): " + ganhadas);
  $('#perdidas').html("Perdidas (LO): " + perdidas);
  $('#minimo').html("Minimo: " + max2);
  $('#ganhos2').html(parseFloat($('#balance').html()) - ganho_inicial);
}

function botao_up() {
  if ($('#reativar').css('display') == 'inline-block' && $('#double_your_' + moeda + '_bet_win').css('display') != 'none') {
    reativar();
  }
}
setInterval(ganar, 100);
setInterval(botao_up, 100);
