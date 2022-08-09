$(document).ready(function() {
    $('.short').hide();
    if (navigator.geolocation) {
        var currentPosition = '';
        navigator.geolocation.getCurrentPosition(function(position) {
            currentPosition = position;
            // set lat and lon
            var latitude = currentPosition.coords.latitude;
            var longitude = currentPosition.coords.longitude;
            // console.log(latitude, longitude);


      
              
                var appkey='8864625e1b0f7efe0c5405c44cecdadb';
                $(".query_btn").click(function(){
        var query_param = $('#txt').val();
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + query_param +'&appid='+appkey+'&query=';
        $.getJSON(url,function(data){
            console.log(data);
                   

           
            // $.getJSON(url + latitude +','+ longitude ,function(data){
               
          
               
      
                // JSON.stringify turns a Javascript object into
                // JSON text and stores that JSON text in a string.
                var data = JSON.stringify(data);
                // JSON.parse turns a string of JSON text into a Javascript object.
                var json = JSON.parse(data);

                $('#weather1').html(json.weather[0].main+ ": "+json.weather[0].description);

                var country =json.sys.country;
                console.log(country);

                var city = json.name;
                console.log(city);
                // var state = json.main;
                // console.log(state);

                var temp = json.main.temp_min;
                var temp_max = json.main.temp_max;
                

                var wind = json.wind.speed;
                var humidity = json.main.humidity;
                var weather = json.main.feels_like;
                var cloud = json.clouds.all;
                // //console.log(data);
                $('#weather').html(city + ', ' + country);

                if (temp < 18) {
                    $('.grey-jumbo').css({
                        backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/08/01/02/03/trees-2562807_960_720.jpg)'
                    });
                    $('#temp').html("<h1><b>It's a pretty cold day today...</b><hr></h1>");
                } else if (temp > 20 && temp < 38) {
                    $('.grey-jumbo').css({
                        backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/03/22/17/40/hill-2165759_960_720.jpg)'
                    });
                    $('#temp').html("<h1><b>It's a sunny day today...</b><hr></h1>");
                } else {
                    $('.grey-jumbo').css({
                        backgroundImage:
                            'url(https://cdn.pixabay.com/photo/2016/03/27/19/08/summer-1283724_960_720.jpg)'
                    });
                    $('#temp').html("<h1><b>It's a hot day today...</b><hr></h1>");
                }

                // toggle temp
                $('#info1').html('Feels like : '+weather+'&#176;');
                $('#info2').html('Wind ' + wind + ' kph');
                $('#info3').html(temp+'&#176;');

                $('.short').show();

                var yes = true;
                $('#switch').on('click', function() {
                    if (yes) {
//                         alert('Try with diffrent cities');
                        $('#info3').html(temp_max+'&#176;');
                        $('#switch').html('Show minumum temperature');
                        yes = false;
                    } else {
                        $('#info3').html(temp+'&#176;');
                        $('#switch').html('Show maximum temperature');
                        yes = true;
                    }
                });
                // showing sky status
                if (cloud <= 30) {
                    $('#info5').html('Clear Sky');
                } else {
                    $('#info5').html('Cloudy Sky');
                }
                $('#info6').html('Humidity ' + humidity + '%');
            });
        });   
        });
  
    }
});
