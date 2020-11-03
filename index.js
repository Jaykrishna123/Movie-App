$(document).ready(function () {
    var apikey = "a3934b60"
    var result = '';
    $('#movieform').submit(function (e) {
        e.preventDefault();
        var movie = $('#movie').val();
        var url = "http://www.omdbapi.com/?apikey=" + apikey;


        $.ajax({
            method: 'get',
            url: url + "&t=" + movie,
            success: function (data) {
                console.log(data);




                result =
                    `<img src="${data.Poster}" class="img-thumnail"
                    width="200" height="200"/>
                    <h5>${data.Title}</h5>
                    <h5>${data.Released}</h5>
                    <h5>${data.Runtime}</h5>
                    <h5>${data.Genre}</h5>
                    <h5>${data.Director}</h5>
                    <h5>${data.Actors}</h5>`




                $('#result').html(result);
            }

        })


    });

});


