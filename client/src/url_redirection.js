/*
    url redirection
*/
document.addEventListener('DOMContentLoaded', function() {
    const buttonActions = [
        { id: 'logo-1', url: './index.html' },
        { id: 'logo-2', url: './userpage.html' },
<<<<<<< HEAD
        // { id: 'announce', url: './announce.html' },
=======
        { id: 'announce', url: './announce.html' },
>>>>>>> 2216c6e (huge updates)
        { id: 'popular', url: './popular.html' },
        { id: 'about', url: './about.html' },
        { id: 'contact', url: './contact.html' },
        { id: 'login', url: './login.html' },
        { id: 'register-1', url: './register.html' },
        { id: 'register-2', url: './login.html' },
        { id: 'profile', url: './profile.html' },
<<<<<<< HEAD
        // { id: 'setting', url: './setting.html' },
=======
        { id: 'setting', url: './setting.html' },
>>>>>>> 2216c6e (huge updates)
        { id: 'explore', url: './search.html' },
        { id: 'upload', url: './upload.html' }
    ];

<<<<<<< HEAD
    const linksToUpdate = [
        { id: 'register-link', url: './register.html' },
        { id: 'forgot-password-link', url: './forgot_password.html' },
        { id: 'login-link', url: './login.html' } // Added comma here
    ];

    const added = new Set();

=======
    const added = new Set();
    
>>>>>>> 2216c6e (huge updates)
    buttonActions.forEach(function(action) {
        if (!added.has(action.id)) {
            const button = document.getElementById(action.id);
            if (button) {
                button.addEventListener('click', function() {
                    // Navigate to the specified URL
                    window.location.href = action.url;
                });
                added.add(action.id);
            }
        }
    });
<<<<<<< HEAD

    // Update href attributes of specified links
    linksToUpdate.forEach(function(link) {
        const elem = document.getElementById(link.id);
        if (elem) {
            elem.href = link.url;
        }
    });
=======
>>>>>>> 2216c6e (huge updates)
});

/*
    user login feature
*/
function userislogin() {
    const token = localStorage.getItem('jwt');
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const currentTime = Date.now() / 1000; // Current time in seconds
        if (decodedToken.exp && decodedToken.exp > currentTime) {
          return true;
        }
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const profileOptions = document.querySelectorAll('.dropdown-menu div');
    const profileOption = document.getElementById('profile');
<<<<<<< HEAD
    // const settingOption = document.getElementById('setting');
=======
    const settingOption = document.getElementById('setting');
>>>>>>> 2216c6e (huge updates)
    const logoutOption = document.getElementById('logout');
    const loginOption = document.getElementById('login');
    const registerOption = document.getElementById('register-1');
    const logo1Option = document.getElementById('logo-1');
    const logo2Option = document.getElementById('logo-2');
    const usernameOption = document.getElementById('username');
    const guestOption = document.getElementById('guest');

    profileOptions.forEach(option => {
        option.style.display = 'block';
    });

    if (userislogin()) {
        loginOption.style.display = 'none';
        registerOption.style.display = 'none';
        logo1Option.style.display = 'none';
        guestOption.style.display = 'none';
    } else {
        profileOption.style.display = 'none';
<<<<<<< HEAD
        // settingOption.style.display = 'none';
=======
        settingOption.style.display = 'none';
>>>>>>> 2216c6e (huge updates)
        logoutOption.style.display = 'none';
        logo2Option.style.display = 'none';
        usernameOption.style.display = 'none';
    }
});

document.getElementById('logout').addEventListener('click', function() {
    function logout() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
<<<<<<< HEAD
        localStorage.removeItem('searchResults');
        localStorage.removeItem('uploadResults');
        localStorage.removeItem('currentBook');
        localStorage.removeItem('bookId');
        localStorage.removeItem('pdfUrl');
=======
        // localStorage.removeItem('searchResults');
        // localStorage.removeItem('currentBook');
        // localStorage.removeItem('bookId');
        // localStorage.removeItem('pdfUrl');
>>>>>>> 2216c6e (huge updates)
        alert('You have successfully logged out!');
        window.location.href = './index.html';
    }

    logout();
});

/*
    username feature
*/
document.addEventListener('DOMContentLoaded', () => {
    if (userislogin()) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.username) {
        document.getElementById('username').textContent = `${user.username}`;
        }
    }
});
<<<<<<< HEAD
=======
  
>>>>>>> 2216c6e (huge updates)