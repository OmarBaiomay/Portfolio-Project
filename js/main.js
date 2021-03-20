/**** Variables Decleartion ****/
const   toggle = document.querySelector(".menu-toggle"),
        navigationMenu = document.querySelector('aside'),
        cursor = document.querySelector('#cursor');


/** Toggle Active Navegation Menu **/
toggle.addEventListener('click', ()=> {
    toggle.classList.toggle('active');
    navigationMenu.classList.toggle('active');
})

/** Make Custom Cursor For Navigation Menu **/
document.addEventListener('mousemove', (e)=>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

/** Customize Particles **/