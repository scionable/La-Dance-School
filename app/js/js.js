function handler(){

var blockInfo   = document.querySelector('.info__week'),
    myradio     = blockInfo.querySelectorAll('.info__week-li--myradio'),
    input       = blockInfo.getElementsByTagName('input'),
    table       = document.querySelectorAll('.info-tb__table'),
    label       = blockInfo.querySelectorAll('.info__week-li-check');

    for (let i = 0; i < input.length; i++ ){
        console.log('input',input[i].checked);
        function click (event) {
            var target = event.target || event && event.srcElement;
            console.log('target',target);
        }

    }

        blockInfo.addEventListener('click',click);


      /*  if(label[0]){
            myradio[0].checked = true;
            console.log('myradio[0]',myradio[0] );
            table[0].classList.toggle('open');
        }*/



}
document.addEventListener('DOMContentLoaded',handler);