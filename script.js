
function myfun(){
	var userEmail = "parktest@gmail.com";
  var userPass = "cantfind";

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
    // window.location.href="new.html";
  });
  alert("Hello");
}
