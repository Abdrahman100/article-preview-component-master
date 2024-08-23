
document.getElementById('hide-share-button').addEventListener('click', function() {
    var shareContainer = document.getElementById('share-container');
    shareContainer.classList.toggle('active');
    console.log('JavaScript is working!');
});

document.getElementById('share-button').addEventListener('click', function() {
    var shareContainer = document.getElementById('share-container');
    shareContainer.classList.remove('active');
    console.log('Share container hidden!');
});