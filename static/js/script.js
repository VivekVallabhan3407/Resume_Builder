
function redirectToSignup() {
    window.location.href = signupUrl;
}
document.addEventListener("DOMContentLoaded", function() {
    // Add your event listeners here
    const form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', handleLogin);
    }
});


document.querySelectorAll('.accordion-block').forEach((block) => {
    block.querySelector('.accordian-title').addEventListener('click', () => {
        const detail = block.querySelector('.accordian-detail');
        const icon = block.querySelector('.accordian-title i');
        
        // Toggle the display of the detail section
        if (detail.style.display === 'block') {
            detail.style.display = 'none';
            icon.classList.remove('active');
        } else {
            detail.style.display = 'block';
            icon.classList.add('active');
        }
    });
});

function togglePassword(iconElement) {
    const passwordField = iconElement.parentElement.querySelector(".password-field");
    const eyeIcon = iconElement.querySelector(".eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}
function handleForgotPassword(event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value.trim(); 

    // Validate email format using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        alert("Email field cannot be empty.");
        return false; 
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; 
    }

    
    alert(`Password reset link sent to ${email}`);
    window.location.href = loginUrl; 

    return true; 
}
function handleLogin(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    let isValid = true;
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    if (!username.trim()) {
        document.getElementById("usernameError").textContent = "Username is required.";
        isValid = false;
    } else if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
        document.getElementById("usernameError").textContent = "Username must be between 3-20 characters and contain only letters, numbers, and underscores.";
        isValid = false;
    }

    // Password validation
    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long.";
        isValid = false;
    }

    // If valid, submit the form
    if (isValid) {
        document.getElementById('loginForm').submit();  
    }
    
   
}

function addLanguage() {
    const languagesContainer = document.getElementById('languagesContainer');

    
    const languageEntry = document.createElement('div');
    languageEntry.classList.add('language-entry');

    
    const languageLabel = document.createElement('label');
    languageLabel.textContent = "Language:";
    const languageSelect = document.createElement('select');
    languageSelect.name = "language[]";
    languageSelect.required = true;
    
    
    const languages = ["English", "Hindi", "Gujarati", "German", "Chinese", "French" ];
    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang.toLowerCase();
        option.textContent = lang;
        languageSelect.appendChild(option);
    });

        const proficiencyLabel = document.createElement('label');
    proficiencyLabel.textContent = "Proficiency Level:";
    const proficiencySelect = document.createElement('select');
    proficiencySelect.name = "proficiency[]";
    proficiencySelect.required = true;

    
    const proficiencyLevels = ["Basic", "Conversational", "Fluent", "Proficient"];
    proficiencyLevels.forEach(level => {
        const option = document.createElement('option');
        option.value = level.toLowerCase();
        option.textContent = level;
        proficiencySelect.appendChild(option);
    });

    
    languageEntry.appendChild(languageLabel);
    languageEntry.appendChild(languageSelect);
    languageEntry.appendChild(proficiencyLabel);
    languageEntry.appendChild(proficiencySelect);

        languagesContainer.appendChild(languageEntry);
}
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}






function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}


const checkboxes = document.querySelectorAll('.skill-checkbox');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        updateSelectedSkills();
    });
});
function updateSkills(category) {
    const selectedSkills = Array.from(
        document.querySelectorAll(`.skill-checkbox[data-category="${category}"]:checked`)
    ).map(checkbox => checkbox.value);

  
    document.getElementById(category + 'SkillsInput').value = selectedSkills.join(', ');
}


document.querySelectorAll('.skill-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const category = this.getAttribute('data-category');
        updateSkills(category);
    });
});
function updateSelectedSkills() {
    const softSkillsContainer = document.getElementById('selectedSoftSkillsContainer');
    const hardSkillsContainer = document.getElementById('selectedHardSkillsContainer');

    
    softSkillsContainer.innerHTML = '';
    hardSkillsContainer.innerHTML = '';

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const skillSpan = document.createElement('span');
            skillSpan.textContent = checkbox.value;


            if (checkbox.getAttribute('data-category') === 'soft') {
                softSkillsContainer.appendChild(skillSpan);
            } else {
                hardSkillsContainer.appendChild(skillSpan);
            }
        }
    });
}

const hobbyCheckboxes = document.querySelectorAll('.hobby-checkbox');

hobbyCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        updateSelectedHobbies();
    });
});

function updateSelectedHobbies() {
    const hobbiesContainer = document.getElementById('selectedHobbiesContainer');

    hobbiesContainer.innerHTML = '';

 
    hobbyCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const hobbySpan = document.createElement('span');
            hobbySpan.textContent = checkbox.value;
            hobbiesContainer.appendChild(hobbySpan);
        }
    });
}
// function submitResumeForm(event) {
//     event.preventDefault();  // Prevents default form submission behavior

//     // Collect form data
//     const formData = new FormData(document.getElementById("createresumeForm"));

//     // Optional: Convert form data to JSON for easier server processing
//     const resumeData = {};
//     formData.forEach((value, key) => {
//         resumeData[key] = value;
//     });

//     // Send data to the server
//     fetch("/submit-resume/", {  // Update this URL to your Django endpoint
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "X-CSRFToken": formData.get("csrfmiddlewaretoken")  // Include CSRF token for Django
//         },
//         body: JSON.stringify(resumeData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             openPreviewModal(data.template_id);  // Assuming server returns template_id
//         } else {
//             console.error("Error:", data.message);
//         }
//     })
//     .catch(error => console.error("Error:", error));
// }

document.addEventListener("DOMContentLoaded", function() {
    const previewButtons = document.querySelectorAll(".preview-btn");
    const modal = document.getElementById("previewModal");
    const iframe = document.getElementById("templateIframe");
    const confirmBtn = document.getElementById("confirmBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const exportButtons = document.getElementById("exportButtons");

    // Preview template button
    previewButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            const templateId = index + 1; 
            openPreviewModal(templateId);
        });
    });

   
    confirmBtn.addEventListener("click", function() {
        exportButtons.style.display = "flex";
    });

    
    cancelBtn.addEventListener("click", function() {
        closePreviewModal();
    });
    function confirmTemplate() {
        document.getElementById("exportButtons").style.display = "flex";
        closePreviewModal();  
    }
});

   
    function exportAsPDF() {
        alert("Exporting as PDF...");
        
        
    }

    function exportAsWord() {
        alert("Exporting as WORD...");
        
    }

    
   