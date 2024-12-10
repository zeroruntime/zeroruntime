particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#60a5fa"
      },
      "shape": {
        "type": "star"
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#60a5fa",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      }
    },
    "retina_detect": true
  }
);
  
  tippy('[data-tippy-content]', {
    placement: 'bottom', 
    animation: 'fade', 
    theme: 'dark'
  });


  const themeToggleBtns = document.querySelectorAll('#theme-toggle');
  const themeIcons = document.querySelectorAll('#theme-icon');

  // Function to update all icons
  function updateIcons(isDark) {
    themeIcons.forEach(icon => {
      if (isDark) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
    });
  }

  // Check for saved theme preference, default to dark if no preference is set
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === null || savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    updateIcons(true);
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    updateIcons(false);
  }

  // Add click event listener to all theme toggle buttons
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle dark mode class
      const isDark = document.documentElement.classList.toggle('dark');

      // Update all icons
      updateIcons(isDark);

      // Save preference
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const dynamicName = document.getElementById("dynamic");

    const names = ["Emmanuel Aforo", "ZER0|Runtime"];
    let currentIndex = 0;

    setInterval(() => {
        // Toggle between names
        currentIndex = (currentIndex + 1) % names.length;
        
        // Add fade-out effect
        dynamicName.style.opacity = 0;

        // Wait for the fade-out to complete, then change text and fade in
        setTimeout(() => {
            dynamicName.textContent = names[currentIndex];
            dynamicName.style.opacity = 1;
        }, 500); // Match this delay with the CSS transition duration
    }, 5000); // 5000ms = 5 seconds
});


