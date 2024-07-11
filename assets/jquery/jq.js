
let minutes = $('.timer__content_minutes p');

function timer(){
    setInterval(() => {
        let newMinutes = minutes.text() - 1;
        minutes.text(Valid(newMinutes));

        if(minutes.text() == 0){
            minutes.text(30);
        }

    }, 1000);
}

function Valid(data){
    return data < 10 ? '0'+data : data;
}

timer();

