window.addEventListener('load', () => {
    let listText = document.querySelector('.text-area-information');

    document.querySelector('.add-list-btn')
        .addEventListener('click', () => {

            if (listText.value != '') {
                listsCreating();
            } else {
                return alert('Please fill the text area!');
            }
        });

    function listsCreating() {
        let container = document.createElement('li');
        container.classList.add('to-do-container');
        container.textContent = listText.value;

        document.querySelector('.container').appendChild(container);

        container.addEventListener('click', (e) => removeList(e));
    };

    function removeList(e) {
        e.target.remove();
    }
})