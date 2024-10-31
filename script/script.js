/*Items del Menú Navegación subrayados*/

const menuItems = document.querySelectorAll('.header__elementoLista');
const selectedItem = localStorage.getItem('selectedMenuItem');

menuItems.forEach(item => {

    item.classList.remove('header__elementoLista--subrayado');

    if (item.innerText === selectedItem) {
        item.classList.add('header__elementoLista--subrayado');
    }

    item.addEventListener('click', ( ) => {

        localStorage.setItem('selectedMenuItem', item.innerText);

        menuItems.forEach(i => i.classList.remove('header__elementoLista--subrayado'));
        item.classList.add('header__elementoLista--subrayado');
    });
});




/*Botón Scroll*/

function handleEvents() {

    const botonSubir = document.getElementById('botonSubir')

    botonSubir.addEventListener('click',handleSubir);
    window.addEventListener('scroll',handleMostrar);
}

function handleMostrar(){
    const botonSubir = document.getElementById('botonSubir');

    if(document.documentElement.scrollTop > 200){
        botonSubir.style.display = 'block'
    }else{
        botonSubir.style.display = 'none'
    }
}

function handleSubir() {
    window.scrollTo({

        top:0,
        behavior:'smooth'
    });
}



/*Buscador interno de Proyectos*/


document.getElementById('buscar__boton').onclick = () => {

    const query = document.getElementById('buscador').value.toLowerCase();

    const proyectos = [

        { id: 'she-rises', name: "she rises project" },
        { id: 'voices-project', name: "voices project" },
        { id: 'she-innovates', name: "she innovates project" },
        { id: 'future-leaders', name: "future leaders project" },
        { id: 'resilient', name: "resilient project" },
        { id: 'womens-rights', name: "women's rights project" }
    ];

    const encuentraProyecto = proyectos.find(proyecto=> proyecto.name.toLowerCase() === query);

    if (encuentraProyecto) {
        window.location.href = `proyectos.html#${encuentraProyecto.id}`;
    } else {
        alert("No se encontró el proyecto. Inténtalo de nuevo.");
    }
};



window.onload = handleEvents



