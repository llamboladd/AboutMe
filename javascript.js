//Event listener for page load to call fade-in function
window.addEventListener('DOMContentLoaded', function() {
    function doStuff(callback) {
        callback();
    }
    doStuff(function() {
        document.body.className = 'visible';
    });
}, false);