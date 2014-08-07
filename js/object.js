
		
var stuffToDo = {
"bar": function() {
alert( "the value was bar -- yay!" );
},
"baz": function() {
alert( "boo baz :(" );
},
"default": function() {
alert( "everything else is just ok" );
}
};
// Check if the property exists in the object.
if ( stuffToDo[ foo ] ) {
// This code won't run.
stuffToDo[ foo ]();
} else {
// This code will run.
stuffToDo[ "default" ]();
}

var stuffToDo='foo';

$('#en').click(function (){
   
    stuffToDo='baz';

});
