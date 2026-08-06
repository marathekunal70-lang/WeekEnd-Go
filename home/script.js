document.addEventListener('DOMContentLoaded', () => {
  const cardTitle = document.getElementById('cardTitle');
  const cardSubtitle = document.getElementById('cardSubtitle');
  const nameField = document.getElementById('nameField');
  const forgotLink = document.getElementById('forgotLink');
  const submitBtn = document.getElementById('submitBtn');
  const toggleAuthText = document.getElementById('toggleAuthText');
  const toggleAuthBtn = document.getElementById('toggleAuthBtn');
  const topSignInBtn = document.getElementById('topSignInBtn');

  let isSignUp = false;

  function setSignInMode() {
    isSignUp = false;
    cardTitle.textContent = 'Welcome Back!';
    cardSubtitle.textContent = 'Login to continue your journey';
    nameField.style.display = 'none';
    forgotLink.style.display = 'inline';
    submitBtn.textContent = 'Login';
    toggleAuthText.innerHTML = `Don't have an account? <a href="#" id="toggleAuthBtn">Sign Up</a>`;
    attachToggleEvent();
  }

  function setSignUpMode() {
    isSignUp = true;
    cardTitle.textContent = 'Create Account';
    cardSubtitle.textContent = 'Start planning your weekends';
    nameField.style.display = 'flex';
    forgotLink.style.display = 'none';
    submitBtn.textContent = 'Sign Up';
    toggleAuthText.innerHTML = `Already have an account? <a href="#" id="toggleAuthBtn">Sign In</a>`;
    attachToggleEvent();
  }

  function attachToggleEvent() {
    const btn = document.getElementById('toggleAuthBtn');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (isSignUp) {
          setSignInMode();
        } else {
          setSignUpMode();
        }
      });
    }
  }

  // Header button resets/scrolls to sign in mode
  topSignInBtn.addEventListener('click', () => {
    setSignInMode();
    document.getElementById('authCard').scrollIntoView({ behavior: 'smooth' });
  });

  attachToggleEvent();
});