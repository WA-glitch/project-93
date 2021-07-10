// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCyqGw2hJ51IqNDAETpMIWclFz4u8ENReg",
    authDomain: "kwittter-fb116.firebaseapp.com",
    databaseURL: "https://kwittter-fb116-default-rtdb.firebaseio.com",
    projectId: "kwittter-fb116",
    storageBucket: "kwittter-fb116.appspot.com",
    messagingSenderId: "407099627297",
    appId: "1:407099627297:web:8060210f992b96211c1060"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() 
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}