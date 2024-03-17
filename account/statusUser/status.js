function uploadAvatar() {
    var input = document.getElementById('avatarInput');
    var preview = document.getElementById('avatarPreview');

    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function() {
        var img = new Image();
        img.src = reader.result;
        img.onload = function() {
            if (img.width > 2000 || img.height > 3000) {
                alert('Hình ảnh quá lớn. Hãy chọn hình ảnh có kích thước nhỏ hơn 300x300.');
            } else {
                // Lưu trữ đường dẫn hình ảnh vào local storage
                localStorage.setItem('avatar', reader.result);
                preview.innerHTML = '';
                preview.appendChild(img);
                const suy = document.getElementById('suy')
                suy.classList.remove("none")
                suy.classList.add('hide')
            }
        }
        
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}

 
// avatar 
var ckavt=document.getElementById('ckavt');
var checkavt = localStorage.getItem('avatar')
var image = document.createElement('img');
image.setAttribute('src', checkavt)
ckavt.appendChild(image);

// nickname 
const username = localStorage.getItem('name');
document.getElementById("username").innerHTML = username;

function reload(){
    location.reload();

    const nickname = document.getElementById('input-nickname').value;
    // nickname = localStorage.getItem('name')
    if(nickname !== ""){
        localStorage.setItem('name',nickname);
    }
    else{
    }
// const laythongtin = localStorage.getItem('name');
// input.setAttribute('value',laythongtin )
}


