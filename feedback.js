const firebaseConfig = {
    apiKey: "AIzaSyD-vpS762jT5WwABWS2xMOb-q_dnNx3n8c",
    authDomain: "dsav-feedback.firebaseapp.com",
    databaseURL: "https://dsav-feedback-default-rtdb.firebaseio.com",
    projectId: "dsav-feedback",
    storageBucket: "dsav-feedback.appspot.com",
    messagingSenderId: "166173389421",
    appId: "1:166173389421:web:19acce4a35d4cb87c34564"
  };


  firebase.initializeApp(firebaseConfig);

  //database reference

  const dsavfeedbackDB = firebase.database().ref('dsavfeedback')

  document.getElementById('feedbackform').addEventListener('submit', submitForm)

  function submitForm(e){
    e.preventDefault();

    var name = getElementById('name');
    var email = getElementById('email');
    var subj = getElementById('subject');
    var msg = getElementById('message');

    saveMessages(name, email, subj, msg);    
  }

  const saveMessages = (name, email, subj, msg) =>{
    var newFeedbackForm = newFeedbackFormDB.push();

    newFeedbackForm.set({
        name : name,
        email : email,
        subj : subj,
        msg : msg,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };