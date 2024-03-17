
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
const btn = document.getElementById("signIn")

btn.addEventListener('click',(e)=>{
e.preventDefault();
  const email = document.getElementById('id-email').value;
  const password = document.getElementById('id-pass').value;


  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert('Đăng nhập thành công');
      window.location.href="/homepage/homepage.html"
    })
    .catch((error) => {
      alert('Lỗi đăng nhập');
    });
})
