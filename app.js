var firebaseConfig = {
    apiKey: "//Add your firebase app's api key",
    authDomain: "////Add your firebase app's domain",
    databaseURL: "//Add your firebase app's url",
    projectId: "//Add your firebase app's project id",
    storageBucket: "//Add your firebase app's storage bucket",
    messagingSenderId: "//Add your firebase app's sender id",
    appId: "//Add your firebase app's appId",
    measurementId: "////Add your firebase app's measurementId"
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
