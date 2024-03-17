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
                localStorage.setItem('imgpost', reader.result);
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
