function getDogImage(num){
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(data => {
        let images = [];
        for(let picture of data.message){
        console.log(picture);
        images.push(`<img src=${picture}>`);
        }
        $('main').html(images);
    })
}

function submitRequest() {
    $('form').submit(e => {
        e.preventDefault();
        let userNumberOfPictures = parseInt($(e.target).find('input[name="quantity"]').val());
        if(!userNumberOfPictures){
            getDogImage(3);
        } else if(userNumberOfPictures >= 50){
            getDogImage(50);
        } else {
            getDogImage(userNumberOfPictures);
        }
    })
}

function handlePage(){
    submitRequest();
}

$(handlePage());