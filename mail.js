  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyDbBrNc4WcTZEx9ocRM2GinUqVnLXSrsyE",
    authDomain: "contactform-1b537.firebaseapp.com",
    databaseURL: "https://contactform-1b537-default-rtdb.firebaseio.com",
    projectId: "contactform-1b537",
    storageBucket: "contactform-1b537.appspot.com",
    messagingSenderId: "74572097718",
    appId: "1:74572097718:web:bae8db724ab7450c1f9e17"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

// Referemce messages collection

var messagesRef = firebase.database().ref('messages');

// Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
e.preventDefault()

// Get Values

var name = getInputVal('name');
var number = getInputVal('number');
var emailid = getInputVal('emailid');



// Save message
 saveMessage(name, number, emailid);


}


// Function to get form values

function getInputVal(id){
return document.getElementById(id).value;
}



// Save message to firebase

function saveMessage(name, number, emailid){
var newMessageRef = messagesRef.push();
newMessageRef.set({
name: name,
number: number,
emailid:emailid,

});
}