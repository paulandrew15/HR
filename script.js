// Save selected role and go to login
function goToLogin(role) {
    localStorage.setItem('selectedRole', role);
    window.location.href = 'login.html';
}

// Back button handler
function goBackToRoleSelect() {
    window.location.href = 'index.html';
}

// On login page, set the role title
if (window.location.pathname.includes('login.html')) {
    document.getElementById('role-title').innerText =
        'Login as ' + localStorage.getItem('selectedRole');
}

// Show/hide password
const pw = document.getElementById('password');
const toggle = document.getElementById('togglePassword');
if (pw && toggle) {
    toggle.addEventListener('click', () => {
        pw.type = pw.type === 'password' ? 'text' : 'password';
        toggle.style.opacity = pw.type === 'password' ? '0.6' : '1';
    });
}

// Handle login (no demo credentials; always redirect based on role)
function login(event) {
    event.preventDefault();
    const role = localStorage.getItem('selectedRole');
    if (role === 'Vice President') {
        window.location.href = 'vicepresident.html';
    } else if (role === 'Faculty') {
        window.location.href = 'faculty.html';
    } else if (role === 'Staff') {
        window.location.href = 'staff.html';
    }
    return false;
}

function logout() {
    // Clear session data
    localStorage.removeItem('selectedRole');
    // (Optional) clear other stored items, e.g.:
    // localStorage.removeItem('userEmail');

    // Redirect back to role selection
    window.location.href = 'index.html';
}
