// SCROLL REVEAL
ScrollReveal().reveal('.container', {scale: 0.2});

/* 1. Grab the input value */


document.querySelector(".search").addEventListener('click', function () {

    var input = document.querySelector("input").value;
    // console.log(input);
    // pushToDOM(input);
    getData();

});

document.querySelector(".gifinput").addEventListener('keyup', function (e) {

    var input = document.querySelector("input").value;
    // console.log(input);

    // if the key ENTER is pressed...
    if (e.which === 13) {
        // pushToDOM(input);
        getData();
    }

});

function getData() {

    /* 2. do the data stuff with the API */
    var url = "https://api.giphy.com/v1/gifs/search?q=";
    var input '#";
    var fullUrl = url+input+key

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', fullUrl);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', function (e) {

        var data = e.target.response;
        //   console.log(data);
        // pushToDOM(data);
        var response = JSON.parse(data);

        var imageUrls = response.data;

        imageUrls.forEach(function (image) {

            var src = image.images.fixed_height.url;
            // console.log(src);

            var container = document.querySelector(".containergif");
            container.innerHTML += "<img src=\"" + src + "\">";

        });

    });
}






/* 3. Show me the GIFs */

function pushToDOM(input) {

    var cont = document.querySelector(".containergif");
    cont.innerHTML = input;


}
