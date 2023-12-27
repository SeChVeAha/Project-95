//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAwlwa8GZk3aApGUjr2kVb4fvfFmQUjm9o",
    authDomain: "kwitter-b3039.firebaseapp.com",
    databaseURL: "https://kwitter-b3039-default-rtdb.firebaseio.com",
    projectId: "kwitter-b3039",
    storageBucket: "kwitter-b3039.appspot.com",
    messagingSenderId: "240299408699",
    appId: "1:240299408699:web:8db4eedc3ace76007a8b1e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!"

  function addRoom(){
    room_name = document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
          purpose :"adding room name"
    })

    localStorage.setItem("room_name", room_name)

    window.location = "kwitter_page.html"
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names)
   row = "<div class'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"
   document.getElementById("output").innerHTML += row
   //End code
   });});}
getData();

function redirectToRoomName(name){
   console.log(name)
   localStorage.setItem("room_name", name)
   window.location = "kwitter_page.html"
}
