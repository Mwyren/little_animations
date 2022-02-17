const navigation = document.getElementById('navigation');

window.addEventListener('scroll', () => {
    const scroll = this.document.documentElement.scrollTop;

    if(scroll > 80){
        navigation.style.height = "18vh";
        navigation.style.background = "rgba(0, 0, 0, 0.7)";
        navigation.style.opacity = 0.9;
    } else{
        navigation.style.height = "15vh";
        navigation.style.background = "black"
    }
})