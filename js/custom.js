

var str = "<p>I'm passionate about building high quality websites, in terms of design, usability, responsiveness, interactivity, accessibility, security and performance.</p>",
    i = 0,
    isTag,
    text;

function resetType() {
    i=0;
    /*text = [];*/
}

function type() {
    text = str.slice(0, ++i);
    if (text === str) return;
    $('#div-typed').html(text);
    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;
    if (isTag) return type();
    setTimeout(type, 100);
}

function displayBoxes(timeValue, showList, delayList){
    if(showList !== 0)
        $('#divJust').text("just viewed:");
    
    setTimeout(function(){
        $(".divabout").fadeIn(1000);
        $(".divskillset").fadeIn(2000);
        $(".divprojects").fadeIn(3000);
    }, timeValue);
}


$(document).ready(function(){
    
});

