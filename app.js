window.addEventListener('load', () => {
    document.querySelector('.add-list-btn')
        .addEventListener('click', (e) => {
            let listText = document.querySelector('.information');

            if (listText.value != '') {
                listsCreating();
            } else {
                return alert('Please fill the text area!');
            }
        });
})

function listsCreating() {
    let container = document.createElement('div');
    container.classList.add('container');
}