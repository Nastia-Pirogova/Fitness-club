let titlePrograms = document.querySelectorAll(".spec-programs-item-title");
let dropDowns = document.querySelectorAll(".spec-programs-item__content");

// Add a click event listener to each title element
titlePrograms.forEach((titleProgram, index) => {
    titleProgram.addEventListener("click", () => {
        // Toggle the "spec-programs-item__content-active" class on the corresponding dropdown element
        dropDowns[index].classList.toggle("spec-programs-item__content-active");
        titlePrograms[index].classList.toggle("spec-programs-item-title-active");
    });
});


(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const menuItems = document.querySelectorAll('.mobile-menu__item');

    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');

        const scrollLockMethod = !isMenuOpen
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
        // bodyScrollLock[scrollLockMethod](document.body);
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            toggleMenu(); // Закрывает модальное окно при нажатии на элемент меню
        });
    });

    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
    });
})();