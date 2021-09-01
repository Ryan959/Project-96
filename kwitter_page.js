var firebaseConfig = {
    apiKey: "AIzaSyDkvJXD2NUrCSMeEhPdtCdfwQscjlG_z6M",
    authDomain: "project-94-587d2.firebaseapp.com",
    databaseURL: "https://project-94-587d2-default-rtdb.firebaseio.com",
    projectId: "project-94-587d2",
    storageBucket: "project-94-587d2.appspot.com",
    messagingSenderId: "569665836440",
    appId: "1:569665836440:web:40fdc5d50a1492a2ce07ed",
    measurementId: "G-B3E6KEJ9MM"
  };
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name")

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like:0
          })

          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
