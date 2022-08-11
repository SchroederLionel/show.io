const myDocument = document.documentElement;
const body = document.querySelector('body'),
  sidebar = document.querySelector('.sidebar'),
  toggle = body.querySelector('.toggle'),
  modeSwitch = body.querySelector('.toggle-switch'),
  modeText = body.querySelector('.mode-text'),
  fullScreen = body.querySelector('.full-screen'),
  supportLink = body.querySelector('.support-link'),
  homeLink = body.querySelector('.home-link'),
  homeSection = body.querySelector('.home'),
  supportSection = body.querySelector('.support'),
  homeIcon = body.querySelector('.bx-home'),
  supportIcon = body.querySelector('.bx-crown'),
  dropArea = body.querySelector('.drag-area'),
  dragText = body.querySelector('.drag-text');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});
// Toggle Dark mode
modeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');
});
//** Exit/Enter Fullscreen */
fullScreen.addEventListener('click', () => {
  // Full Screen
  if (window.innerHeight == screen.height) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msexitFullscreen) {
      document.msexitFullscreen();
    } else if (document.mozexitFullscreen) {
      document.mozexitFullscreen();
    } else if (document.webkitexitFullscreen) {
      document.webkitexitFullscreen();
    }
  } else {
    if (myDocument.requestFullscreen) {
      myDocument.requestFullscreen();
    } else if (myDocument.msRequestFullScreen) {
      myDocument.msRequestFullScreen();
    } else if (myDocument.mozRequestFullscreen) {
      document.mozRequestFullscreen();
    } else if (myDocument.webkitRequestFullscreen) {
      myDocument.webkitRequestFullscreen();
    }
  }
});
homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  homeSection.classList.add('transition-to');
  supportSection.classList.add('transition-back');

  // Remove previous transitions.
  homeSection.classList.remove('transition-back');
  supportSection.classList.remove('transition-to');

  // Activate Link
  homeIcon.classList.add('active');
  supportIcon.classList.remove('active');
});
supportLink.addEventListener('click', (e) => {
  e.preventDefault();
  supportSection.classList.add('transition-to');
  homeSection.classList.add('transition-back');

  // Remove previous transitions.
  homeSection.classList.remove('transition-to');
  supportSection.classList.remove('transition-back');

  // Activate Link
  supportIcon.classList.add('active');
  homeIcon.classList.remove('active');
});

homeSection.classList.add('transition-to');

/**
 * Drag Area
 */

let file;
dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropArea.classList.add('active');
  dragText.textContent = 'Release to Upload';
});

dropArea.addEventListener('dragleave', (e) => {
  e.preventDefault();
  dropArea.classList.remove('active');
  dragText.textContent = 'Drag & Drop to Upload PDF';
});

dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  let fileType = file.type;
  console.log(fileType);

  let validExtensions = [
    'image/jpeg',
    'image/png',
    'image/jpg',
    'application/pdf',
  ];

  if (validExtensions.includes(fileType)) {
    console.log('This is an valid file');
  } else {
    console.log('Invalid file');
  }
  let fileReader = new FileReader();
  fileReader.onload = () => {
    let fileURL = fileReader.result;
    fileReader.readAsDataURL(file);
  };
});
