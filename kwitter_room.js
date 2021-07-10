var firebaseConfig = {
      apiKey: "AIzaSyCyqGw2hJ51IqNDAETpMIWclFz4u8ENReg",
      authDomain: "kwittter-fb116.firebaseapp.com",
      projectId: "kwittter-fb116",
      storageBucket: "kwittter-fb116.appspot.com",
      messagingSenderId: "407099627297",
      appId: "1:407099627297:web:8060210f992b96211c1060"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
