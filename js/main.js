document.addEventListener('DOMContentLoaded', function() {
	window.addEventListener('resize', function(){
    var header = document.querySelector('.navbar');
    var menuItems = document.querySelectorAll('.nav-item');
    var menuToggleBtn = document.querySelector('#menu-toggle-btn');
    var menuIsCollapsed = false;
    var checkWidth = window.innerWidth;
    console.log(checkWidth);

    function collapseMenu() {
        if (checkWidth <= 800) {
            header.classList.add('menu-collapsed');
            menuToggleBtn.classList.remove('hidden');
            menuIsCollapsed = true;
        }
        if (checkWidth >= 800) {
            header.classList.remove('menu-collapsed');
            menuToggleBtn.classList.add('hidden');
            menuIsCollapsed = false;
        }
    }
    collapseMenu();
    menuToggleBtn.addEventListener("click", function() {
        menu.classList.toggle('menu-open');
    });
});
});