// Pegando os artibutos HTML
const $ = document.querySelector.bind(document)

function TabNavigation() {
    const html = {
        links: [...$('.tab-links').children], // colocando os filhos de tab-links em um array
        contents: [...$('.tab-content').children], // colocando os filhos de tab-content em um array
        openTab: $('[data-open]')

    }

    function hideAllTabContent() { // esconda todas as tab
        html.contents.forEach(section => { // mapeando e escondendo cada section content
            section.style.display = "none"
        })
    }

    function removeAllActiveClass() { // remove tab que era ativa
        html.links.forEach(tab => {
            tab.className = tab.className.replace(" active", "")
        })
    }

    function showCurrentTab(id) { //mostra a tab atual
        const tabContent = $('#' + id)
        tabContent.style.display = "block"
    }

    function selectTab(event) {
        hideAllTabContent()
        removeAllActiveClass()

        const target = event.currentTarget
        showCurrentTab(target.dataset.id)

        target.className += " active"

    }

    function listenForChange() { //ouvi os eventos(click)
        html.links.forEach(tab => {
            tab.addEventListener('click', selectTab)
        })
    }

    function init() { // define ordem de chamnda de cada evento
        hideAllTabContent() // primeiro esconde tudo
        listenForChange() //depois ouve posiveis clicks

        html.openTab.click()
    }

    return {
        init
    }
}

window.addEventListener('load', () => {
    const tabNavigation = TabNavigation()
    tabNavigation.init()
})