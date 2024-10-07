// Registration Form Validation

let validationResults = [];

// Name Validation
function Name_(name, error) {
    const input = document.getElementById(name);
    const msg = document.getElementById(error);
    const value = input.value;
    const pattern = /^[a-zA-Z]+$/;

    if (pattern.test(value)) {
        msg.textContent = "Valid name!";
        msg.style.color = "green";
        msg.style.fontSize = '14px';
        validationResults[0] = true;
    } else {
        msg.textContent = "Invalid name!";
        msg.style.color = "red";
        msg.style.fontSize = '14px';
        validationResults[0] = false;
    }
}

// Email Validation
function Email_(email, message) {
    const input = document.getElementById(email);
    const msg = document.getElementById(message);
    const value = input.value;
    const pattern = /^[a-zA-Z0-9.!#$%&'+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;

    if (pattern.test(value)) {
        msg.textContent = "Valid email!";
        msg.style.color = "green";
        msg.style.fontSize = '14px';
        validationResults[1] = true;
    } else {
        msg.textContent = "Invalid email!";
        msg.style.color = "red";
        msg.style.fontSize = '14px';
        validationResults[1] = false;
    }
}

// Mobile Number Validation
function MOBNO_(value) {
    // const pattern = /^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;
    // const pattern = /^([5-9]\d{9})|(\+[5-9]\d{9}})|(\([5-9]\)\d{9})|([5-9]-\d{3}-\d{4})$/;
    const pattern = /^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;
    const mobileError = document.getElementById('mobError');
    const mobileSuccess = document.getElementById('mobSuccess');

    if (pattern.test(value)) {
        mobileError.style.display = 'none';
        mobileSuccess.style.display = 'block';
        mobileSuccess.style.color = 'green';
    } else {
        mobileSuccess.style.display = 'none';
        mobileError.textContent = 'Please enter your mobile number!';
        mobileError.style.display = 'block';
        mobileError.style.color = 'red';
    }
}

// Password Validation
function PASSWORD_(name, error) {
    const passwordInput = document.getElementById(name);
    const errorMessage = document.getElementById(error);
    const password = passwordInput.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.#]).$/;

    if (passwordRegex.test(password)) {
        errorMessage.textContent = 'Strong password!';
        errorMessage.style.color = 'green';
        errorMessage.style.fontSize = '14px';
    } else {
        errorMessage.textContent = 'Password must contain: lowercase, uppercase, digit, and special character.';
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '14px';
    }
    P_check(); // Assuming this function exists elsewhere
}

// Confirmed Password Validation
function C_PASSWORD_() {
    const password = document.getElementById('passName').value;
    const confirmPassword = document.getElementById('cpassName').value;
    const errorElement = document.getElementById('cpassError');

    if (password.length > 0 && confirmPassword.length > 0) {
        if (password !== confirmPassword) {
            errorElement.textContent = 'Passwords do not match!';
            errorElement.style.color = 'red';
            errorElement.style.fontSize = '14px';
        } else {
            errorElement.textContent = 'Passwords match!';
            errorElement.style.color = 'green';
            errorElement.style.fontSize = '14px';
        }
    } else {
        errorElement.textContent = 'Please enter both passwords!';
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '14px';
    }
}

// Address Validation
function ADDRESS_() {
    const address = document.getElementById('address').value;
    const addressError = document.getElementById('addressError');
    const addressSuccess = document.getElementById('addressSuccess');
    const addressRegex = /^[a-zA-Z0-9\s,/'".-]+$/;

    if (addressRegex.test(address)) {
        addressError.style.display = 'none';
        addressSuccess.textContent = 'Valid address!';
        addressSuccess.style.display = 'block';
        addressSuccess.style.fontSize = '14px';
    } else {
        addressSuccess.style.display = 'none';
        addressError.textContent = `Invalid address. Only letters, numbers, and special characters (",.-') allowed.`;
        addressError.style.color = 'red';
        addressError.style.display = 'block';
        addressError.style.fontSize = '14px';
    }
}

// DOB Validation
function DOB_() {
  const dob = document.getElementById('dob').value;
  const dobError = document.getElementById('dobError');
  const dobSuccess = document.getElementById('dobSuccess');

  if (dob === '') {
      dobError.textContent = 'Please select a date!';
      dobError.style.display = 'block';
      dobSuccess.style.display = 'none';
  } else {
      const date = new Date(dob);
      const today = new Date();

      if (date < today) {
          dobError.style.display = 'none';
          dobSuccess.textContent = 'Valid date!';
          dobSuccess.style.display = 'block';
      } else {
          dobSuccess.style.display = 'none';
          dobError.textContent = 'Date cannot be in the future!';
          dobError.style.color = 'red';
          dobError.style.display = 'block';
      }
  }
}

// Qualifications Validation
function validateQualifications() {
  const qualifications = document.getElementById('qualifications').value;

  if (qualifications === 'Select your Qualifications..') {
      document.getElementById('qualificationsError').textContent = 'Please select a qualification.';
      document.getElementById('qualificationsError').style.display = 'block';
      return false;
  } else {
      document.getElementById('qualificationsError').style.display = 'none';
      return true;
  }
}

// Languages Validation
function validateLanguages() {
  const checkboxes = document.querySelectorAll('.form-check-input');
  const checkedCount = checkboxes.filter((checkbox) => checkbox.checked).length;

  if (checkedCount < 3) {
      document.getElementById('languagesError').textContent = 'Error! Please select at least 3 languages.';
      document.getElementById('languagesError').style.display = 'block';
      return false;
  } else if (checkedCount > 3) {
      document.getElementById('languagesError').textContent = 'Error! Please select only 3 languages.';
      document.getElementById('languagesError').style.display = 'block';
      return false;
  } else {
      document.getElementById('languagesError').style.display = 'none';
      alert('Selected languages: ' + [...checkboxes].filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value).join(', '));
      return true;
  }
}

// Place Validation
function PLACE_() {
  const place = document.getElementById('place').value;
  const placeError = document.getElementById('placeError');
  const placeSuccess = document.getElementById('placeSuccess');
  const placeRegex = /^[a-zA-Z\s]+$/;

  if (place === '') {
      placeError.textContent = 'Please enter a place!';
      placeError.style.display = 'block';
      placeSuccess.style.display = 'none';
  } else if (!placeRegex.test(place)) {
      placeError.textContent = 'Invalid place! Only letters and spaces allowed.';
      placeError.style.display = 'block';
      placeSuccess.style.display = 'none';
  } else {
      placeError.style.display = 'none';
      placeSuccess.textContent = 'Valid place!';
      placeSuccess.style.display = 'block';
  }
}

// Photos Validation
function PHOTO_() {
  const photo = document.getElementById('photo');
  const photoError = document.getElementById('photoError');
  const photoSuccess = document.getElementById('photoSuccess');

  if (photo.files.length === 0) {
      photoError.textContent = 'Please select a photo!';
      photoError.style.display = 'block';
      photoSuccess.style.display = 'none';
  } else {
      const fileType = photo.files[0].type;
      const allowedTypes = ['image/jpeg', 'image/png'];

      if (!allowedTypes.includes(fileType)) {
          photoError.textContent = 'Invalid file type! Only JPG, JPEG, PNG allowed.';
          photoError.style.display = 'block';
          photoSuccess.style.display = 'none';
      } else {
          const fileSize = photo.files[0].size;
          const maxSize = 5 * 1024 * 1024;

          if (fileSize > maxSize) {
              photoError.textContent = 'File size exceeds 5MB!';
              photoError.style.display = 'block';
              photoSuccess.style.display = 'none';
          } else {
              photoError.style.display = 'none';
              photoSuccess.textContent = 'Valid photo!';
              photoSuccess.style.display = 'block';
          }
      }
    }
  }
