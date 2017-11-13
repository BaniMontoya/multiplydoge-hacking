//multiply_btc

ok = 1;
onde = 'hi';
lost = 0;
win = 0;
max = 4;
moeda = 'btc'; //doge, btc
cont = 0;
setInterval(ganar, 1000);

function ganar() {
    if (ok == 1 && cont < max) {  
        
        if ($('#double_your_'+moeda+'_bet_hi_button').attr('disabled') == 'disabled') {} else {
            a = $('#double_your_'+moeda+'_bet_win').css('display');
            if (a == "block") {
                win = win + 1;
                cont = 0;
                $('#double_your_'+moeda+'_min').click();
                //$('#double_your_'+moeda+'_stake').val('0.0000001')
                console.log('######');
                console.log(onde);
                console.log('######');
                $('#double_your_'+moeda+'_bet_' + onde + '_button').click();
            } else {
                if (lost > 1) {
                    lost = 0;
                }
                lost = lost + 1;
                cont = cont + 1;
                $('#double_your_'+moeda+'_2x').click();
                console.log('######');
                console.log(onde);
                console.log('######');
                $('#double_your_'+moeda+'_bet_' + onde + '_button').click();
            }
        }
    }
}
