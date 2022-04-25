
function addEventGreenDivs() {
    let items = document.querySelectorAll('.my-divs__item');
    let count = 1;
    const greenBackgroundColor = 'rgb(0, 128, 0)';

    for(item of items){

        let div = item.querySelector(`.div${count}`);

        let divStyles = window.getComputedStyle(div);
        let background = divStyles.getPropertyValue('background-color');
        
        if(background === greenBackgroundColor){
            div.addEventListener('click', function(){
                alert('You clicked in a green div');
            })
        }
        count++;
    }
}

function getTextData(){
    $.ajax({
        url: 'http://localhost:50373/Home/GetTextData',
        method: 'GET',
        success: function (data) {
            $("#desc-about").text(data);
            $("#btn-go").hide();
        },
        fail : function( jqXHR, textStatus ) {
            console.error('ERROR::::', jqXHR, textStatus);
        }
    })
}

