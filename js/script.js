
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var street= $('#street').val();
    var city= $('#city').val();
    // console.log(street,city);
    var location = street + ', ' + city;
    console.log(location);
    var source = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location="+location+"&heading=151.78&pitch=-0.76&key=AIzaSyAEYF6NkO2u4X0Ofclgo-6G8BQcFjYLx8k";
    console.log(source);

    var img = $('<img />',{
      id: 'Streetview',
      class: 'bgimg',
      src: source,
      alt: 'Streetview'
    });
    img.appendTo($('body'));

    // load streetview

    // YOUR CODE GOES HERE!
    // $body.append('<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location=1600 pennsylvania ave, washington dc&heading=100&pitch=28&&scale=2&key=AIzaSyAEYF6NkO2u4X0Ofclgo-6G8BQcFjYLx8k">');

    // var elem = document.createElement('img');
    //     elem.className = 'bgimg';
    //     elem.src = "https://static.pexels.com/photos/6480/person-woman-girl-model.jpg";
    //     $body.append(elem)

    return false;
};

$('#form-container').submit(loadData);
