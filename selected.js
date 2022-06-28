export default function cardSelected(e) {

    let selected = '';

    e.target.style.borderColor = 'yellow';
    

    switch(e.target.classList[1]){

        case 'first_card':
            selected = 'Rock';
            showSelected('first_card');
            break;
        case 'second_card':
            selected = 'Paper';
            showSelected('.second_card');
            break;
        case 'third_card':
            selected = 'Scissors';
            showSelected('.third_card');
            break;
        default:
            break;
            
    }

    return selected;

}

function showSelected(selector){

    const selected = document.getElementsByClassName(selector)[0];
    const selection = document.querySelector('.card_player');
    selection.appendChild(selected.cloneNode(true));

}
