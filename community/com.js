

        // Cấu hình Firebase
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
        import { getAuth, signOut, onAuthStateChanged, } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js';
        import { getFirestore, doc, getDoc, updateDoc, collection, query, where, getDocs, addDoc ,deleteDoc} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';

        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const storage = getFirestore(app);
        var uidDefault;
        // Lắng nghe sự kiện đăng xuất
        // Kiểm tra xem người dùng đã đăng nhập hay chưa
        onAuthStateChanged(getAuth(), function (user) {
            var user_info = document.getElementById('user-info');
            var loginForm = document.getElementById('login');
            var warn =  document.getElementById('warn');
            if (user) {
                var usernameElement = document.getElementById('username');
                usernameElement.textContent = user.displayName ? user.displayName : user.email; // Display user email or other info
                loginForm.style.display = 'none';
                warn.style.display = 'none';
                user.providerData.forEach((profile) => {
                    console.log("Sign-in provider: " + profile.providerId);
                    console.log("  Provider-specific UID: " + profile.uid);
                    console.log("  Name: " + profile.displayName);
                    console.log("  Email: " + profile.email);
                    console.log("  Photo URL: " + profile.photoURL);
                    uidDefault = profile.uid;
                });
                // Call displayPosts after uidDefault is set
                displayPosts();
            } else {
                user_info.style.display = 'none';
            }
        });


        const postForm = document.getElementById('post-form');
        postForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const postTitle = document.getElementById('post-title').value;
            const postContent = document.getElementById('post-content').value;
            const usernamepost = document.getElementById('username').value;
            // Lưu bài đăng với user_id vào Firestore
            const postsCollection = collection(storage, 'posts');
            addDoc(postsCollection, {
                title: postTitle,
                content: postContent,
                user_id: uidDefault, // Thêm trường user_id
            })
                .then((docRef) => {
                    console.log('Đã đăng bài thành công');
                    // Gọi lại hiển thị bài đăng sau khi đăng
                    displayPosts();
                })
                .catch((error) => {
                    console.error('Lỗi khi đăng bài:', error);
                });
        });

        
        function displayPosts() {
            const renderPost = document.getElementById('render-post');
            renderPost.innerHTML = ''; // Clear previous content before displaying new posts

            const postsCollection = collection(storage, 'posts');
            const queryPosts = query(postsCollection);

            getDocs(queryPosts)
                .then((items) => {
                    items.forEach((doc) => {
                        const post = doc.data();
                        console.log(post);
                        const postElement = document.createElement('div');
                        postElement.classList.add("box")
                        if (post.user_id == uidDefault) {
                            postElement.innerHTML = `
                            <p class='usnpost'>${post.user_id}</p>
                        <h3>${post.title}</h3>
                        <p>${post.content}</p>
                        <button class="edit-button" data-post-id="${doc.id}">Chỉnh sửa</button>
                        <button class="delete-button" data-post-id="${doc.id}">Xoá</button>
                        `;
                        } else {
                            postElement.innerHTML = `
                            <p class='usnpost'>${post.user_id}</p>
                            <h3>${post.title}</h3>
                            <p>${post.content}</p>

                            `;
                        }
                        renderPost.appendChild(postElement);
                    });

                    // Add event listeners for dynamically created buttons
                    document.querySelectorAll('.edit-button').forEach(button => {
                        button.addEventListener('click', function () {
                            const postId = this.getAttribute('data-post-id');
                            editPost(postId);
                        });
                    });

                    document.querySelectorAll('.delete-button').forEach(button => {
                        button.addEventListener('click', function () {
                            const postId = this.getAttribute('data-post-id');
                            deletePost(postId);
                        });
                    });
                })
                .catch((error) => {
                    console.error('Lỗi khi lấy dữ liệu bài đăng:', error);
                });
        }

        function deletePost(postId) {
            const postsCollection = collection(storage, 'posts');

            deleteDoc(doc(postsCollection, postId))
                .then(() => {
                    console.log('Đã xoá bài đăng thành công');
                    displayPosts(); // Gọi lại hiển thị sau khi xoá
                })
                .catch((error) => {
                    console.error('Lỗi khi xoá bài đăng:', error);
                });
        }
        function editPost(postId) {
            window.location.href = `editpost.html?postId=${postId}`;
        }
