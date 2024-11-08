
        function generateResume() {
            // Get input values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const linProfile = document.getElementById('linProfile').value;
            const gitP = document.getElementById('gitP').value;
            const wexp = document.getElementById('wexp').value;
            const edu = document.getElementById('edu').value;
            const photo = document.getElementById('photo').files[0];

            // Set preview values
            document.getElementById('previewName').textContent = name;
            document.getElementById('previewEmail').textContent = email;
            document.getElementById('previewPhone').textContent = phone;
            document.getElementById('previewLinkedIn').textContent = linProfile;
            document.getElementById('previewGitHub').textContent = gitP;
            document.getElementById('previewExperience').textContent = wexp;
            document.getElementById('previewEducation').textContent = edu;

            // Display photo preview if a photo is uploaded
            const photoContainer = document.getElementById('previewPhotoContainer');
            photoContainer.innerHTML = ''; // Clear previous photo
            if (photo) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.alt = "Profile Photo";
                    img.style.width = '100px';
                    img.style.height = '100px';
                    img.style.borderRadius = '50%';
                    photoContainer.appendChild(img);
                };
                reader.readAsDataURL(photo);
            }

            // Show the preview section
            document.getElementById('preview').style.display = 'block';
        }
