function megaMenu() {
    const megaMenus = document.querySelectorAll('[data-mega-menu]')

    function hideOthers(thisButton) {
        megaMenus.forEach((menu) => {
            const button = menu.querySelector('button')
            if (button != thisButton) {
                button.setAttribute('aria-expanded', 'false')
            }
        })
    }

    megaMenus.forEach((menu) => {
        const button = menu.querySelector('button')
        button.addEventListener('click', () => {
            hideOthers(button)
            button.setAttribute('aria-expanded', (button.getAttribute('aria-expanded') == 'true' ? 'false' : 'true'))
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    megaMenu()
})