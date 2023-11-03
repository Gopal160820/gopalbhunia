function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}



window.addEventListener('load', function () {
    // Hide the loader and show the content when the page is fully loaded
    const loader = document.querySelector('.loader-container');
    const content = document.querySelector('.content');
    
    setTimeout(function () {
        loader.style.display = 'none';
        content.style.display = 'flex';
    }, 2000); // Adjust the time to control how long the loader is displayed
});
