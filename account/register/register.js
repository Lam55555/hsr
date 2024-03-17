const firebaseConfig = {
    apiKey: "AIzaSyDnGcNccJ8vSjl5OfnGEANVgdiVclJz2SI",
    authDomain: "hsrpj-fdb6a.firebaseapp.com",
    projectId: "hsrpj-fdb6a",
    storageBucket: "hsrpj-fdb6a.appspot.com",
    messagingSenderId: "840778483153",
    appId: "1:840778483153:web:ba7ab69c077eb31f37ccf0",
    measurementId: "G-9W886CL18H"
  };

  firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth();

  function signUp(){
    const email = document.getElementById("id-email").value;
    const pass = document.getElementById("id-password").value;
    const ckpass = document.getElementById("id-cfpass").value;
    if(ckpass == pass){
        auth.createUserWithEmailAndPassword(email,pass)
        .then(()=>{
            alert("Đã đăng ký thành công")
            window.location.href="/homepage/homepage.html"
        })
        
    
        .catch((error)=>{
            alert('Nhập sai')
        });
    }
    else{
        alert('mk k trùng nhau')
    }

}
