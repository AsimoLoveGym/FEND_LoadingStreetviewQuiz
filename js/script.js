
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    $body.append('<img class="bgimg" src="https://static.pexels.com/photos/6480/person-woman-girl-model.jpg">');

    return false;
};

$('#form-container').submit(loadData);
