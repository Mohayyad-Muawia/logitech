document.addEventListener('click', (event ) => {
    if(event.target.classList.contains('menuItem')){
        menu.classList.add('oppened');
    }else{
        hideMenu();
    }
});

let menu = document.querySelector('.mobileMenu');
function showMenu(){
    menu.classList.add('oppened');
}
function hideMenu() {
    menu.classList.remove('oppened');

}

let items = document.querySelectorAll('.menu a');
let mItems = document.querySelectorAll('.mobileMenu a:not(.sign)');

items.forEach((e) => {
    e.addEventListener('click', () => {

        // remove active from items
        items.forEach((ele) => {
            ele.classList.remove('active');
        })

        // set active to clicked item
        e.classList.add('active')



    })
})

