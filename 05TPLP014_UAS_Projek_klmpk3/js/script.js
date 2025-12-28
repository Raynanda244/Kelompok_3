/*
Nama file    : script.js
Tanggal ngoding: 20 November 2024
Kelas        : 05TPLP014
Kelompok     : [Kelompok 3]
Anggota      : [Muhammad Sabil Bilqisthi ], [Sa’adah Rahma Ilahi], [Raynanda]
Deskripsi    : File JavaScript utama untuk interaktivitas website
*/

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    
    // Form Validation for Contact Page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
    
    // Code Toggle Functionality
    const codeToggles = document.querySelectorAll('.code-toggle');
    codeToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const codeBlock = this.nextElementSibling;
            codeBlock.style.display = codeBlock.style.display === 'none' ? 'block' : 'none';
            this.textContent = codeBlock.style.display === 'none' ? 'Tampilkan Kode' : 'Sembunyikan Kode';
        });
    });
    
    // Video Play/Pause Controls
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('click', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    });
});

// Form Validation Function
function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(error => error.remove());
    
    // Name validation
    if (!name.value.trim()) {
        showError(name, 'Nama harus diisi');
        isValid = false;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError(email, 'Email harus diisi');
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        showError(email, 'Format email tidak valid');
        isValid = false;
    }
    
    // Message validation
    if (!message.value.trim()) {
        showError(message, 'Pesan harus diisi');
        isValid = false;
    } else if (message.value.trim().length < 10) {
        showError(message, 'Pesan minimal 10 karakter');
        isValid = false;
    }
    
    if (isValid) {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Pesan berhasil dikirim! Terima kasih atas feedback Anda.';
        contactForm.insertBefore(successMessage, contactForm.firstChild);
        
        // Reset form
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
    
    return isValid;
}

// Show error message function
function showError(input, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    input.parentNode.appendChild(error);
    input.classList.add('error');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});