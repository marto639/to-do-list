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
    let container = document.createElement('span');
    container.classList.add('to-do-container');

    document.querySelector('.container').appendChild(container);
}