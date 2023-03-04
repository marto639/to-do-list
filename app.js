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
        let liText = document.createElement('li');
        liText.classList.add('to-do-container');
        liText.textContent = listText.value;

        document.querySelector('.container').appendChild(liText);

        liText.addEventListener('click', (e) => removeList(e));
    };

    function removeList(e) {
        e.target.remove();
    }
})