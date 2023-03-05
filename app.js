window.addEventListener('load', () => {
    let listText = document.querySelector('.input-area-information');

    document.querySelector('.add-list-btn')
        .addEventListener('click', () => {

            if (listText.value != '') {
                listsCreating();
            } else {
                return alert('Please fill the text area!');
            }
        });

    function listsCreating() {


        listText.value.split(/[.:]/)
            .map(x => {
                let liText = document.createElement('li');
                liText.classList.add('to-do-container');

                liText.textContent = x;

                document.querySelector('.container').appendChild(liText);
                liText.addEventListener('click', (e) => removeList(e));
            });


    };

    function removeList(e) {
        e.target.remove();
    }
})