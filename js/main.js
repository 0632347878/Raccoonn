document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.adaptive_list_block  ul');
    var menuItems = document.querySelectorAll('.nav-item');
    var menuToggleBtn = document.querySelector('#menu-toggle-btn');
    var menuIsCollapsed = false;
    var checkWidth = window.innerWidth;
    

    function collapseMenu() {
    	checkWidth = window.innerWidth;
        if (checkWidth < 800) {
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

   
    window.addEventListener('resize', function(){
    		collapseMenu();
    }); 
  	menuToggleBtn.addEventListener("click", function() {
      header.classList.toggle('menu-open');
  	});
});
