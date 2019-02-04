function showSelection() {
    let shown = document.getElementById('shown')
    if(shown.classList.contains('none')) {
        shown.classList.remove('none')
    }
    else {
        shown.classList.add('none')
    }
}