document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuList = document.querySelector('.menu-list');
    var menuItems = document.querySelectorAll('.menu-list > li');

    function toggleMenu() {
        menuList.classList.toggle('active');
    }

    function toggleSubmenu(event) {
        var submenu = this.querySelector('ul');

        if (submenu) {
            event.preventDefault();
            submenu.classList.toggle('active');
        }
    }

    function closeSubmenusOnClickOutside(event) {
        if (!menuList.contains(event.target) && !event.target.matches('.menu-toggle')) {
            menuList.classList.remove('active');
            menuItems.forEach(function (menuItem) {
                var submenu = menuItem.querySelector('ul');
                if (submenu) {
                    submenu.classList.remove('active');
                }
            });
        }
    }

    // Add click event listener to the menu toggle button
    menuToggle.addEventListener('click', toggleMenu);

    // Add click event listener to each menu item
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', toggleSubmenu);
    });

    // Close submenus when clicking outside of the menu
    document.addEventListener('click', closeSubmenusOnClickOutside);

    // Close submenus when the window is resized
    window.addEventListener('resize', function () {
        menuList.classList.remove('active');
        menuItems.forEach(function (menuItem) {
            var submenu = menuItem.querySelector('ul');
            if (submenu) {
                submenu.classList.remove('active');
            }
        });
    });
});
