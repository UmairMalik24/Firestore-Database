var firebaseConfig = {
    apiKey: "AIzaSyB_SxZUp9LGV96ysQXxs7N4zPDaBC0jrXs",
    authDomain: "first-firebase-36310.firebaseapp.com",
    databaseURL: "https://first-firebase-36310.firebaseio.com",
    projectId: "first-firebase-36310",
    storageBucket: "first-firebase-36310.appspot.com",
    messagingSenderId: "1052897980630",
    appId: "1:1052897980630:web:2e09d9210141a283601977",
    measurementId: "G-84K388XKJH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  const submitBtn = document.querySelector("#submit");

  let name = document.querySelector("#name");

  let email = document.querySelector("#email");

  let comment = document.querySelector("#comment");

  const db = firestore.collection("contactData");

  submitBtn.addEventListener("click", function(){
    let nameInput = name.value;
    let emailInput = email.value;
    let commentInput = comment.value;

    //Database access

    db.doc()
    .set({
      name: nameInput,
      email: emailInput,
      comment: commentInput
    })
    .then(function()
    {
      console.log("Data Sent");
    })
    .catch(function(error){
      console.log(error);
    });
  });
  console.log("HI")
