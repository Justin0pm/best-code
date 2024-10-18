document.getElementById('startButton').addEventListener('click', function() {
  // Hide welcome screen
  document.getElementById('welcome').style.display = 'none';

  // Optional: You can show either the 3D scene or go directly to the resume
  // To go directly to the resume, uncomment the line below:
  document.getElementById('resume').style.display = 'block';

  // Optional: To show the 3D scene first, uncomment this line:
  // document.getElementById('threejs-scene').style.display = 'block';
});

// Optional: Add a click event for the 3D scene to jump to the resume after interacting with the scene
document.getElementById('threejs-scene').addEventListener('click', function() {
  // Hide 3D scene and show resume
  document.getElementById('threejs-scene').style.display = 'none';
  document.getElementById('resume').style.display = 'block';
});
