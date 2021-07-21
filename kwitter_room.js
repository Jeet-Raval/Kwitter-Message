var firebaseConfig = {
      apiKey: "AIzaSyA20exA2YC6aDzeQFApE9q6TOsIbhAVjns",
      authDomain: "kwitter-8bd6f.firebaseapp.com",
      projectId: "kwitter-8bd6f",
      storageBucket: "kwitter-8bd6f.appspot.com",
      messagingSenderId: "383923606503",
      appId: "1:383923606503:web:770a340d3adf410ee6e342"
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
