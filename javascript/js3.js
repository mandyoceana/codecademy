/*jshint multistr:true */
var text = "blah, blah, blah, lalalala, mandy, blah, mandy, string, string \
wow, wow, wow, mandy, blah";
var hits = [];
var myName = "mandy";

for (var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        for (var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits === []){
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
    