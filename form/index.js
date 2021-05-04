const form = document.querySelector('.form')
const firstSelect = document.querySelector('#select1')
const secondSelect = document.querySelector('#select2')
const thirdSelect = document.querySelector('#select3')
const fourSelect = document.querySelector('#select4')
const fiveSelect = document.querySelector('#select5')
const firstInput = document.querySelector('#input1')
const secondInput = document.querySelector('#input2')
const result = document.querySelector('.result')

let obj = {
    firstSelect: '',
    secondSelect: '',
    thirdSelect: '',
    fourSelect: '',
    fiveSelect: '',
    firstInput: '',
    secondInput: ''
}
//Возникли сложности с заданием 2.6 - не совсем понял его
function getApi() {
    return fetch(`example_url`,
        {
            method: 'GET',
            headers: {
                "Content-type": 'application/json',
            }
        })
        .then(res => res.json())
        .catch(res => console.log(res))
        .finaly(alert('данные пришли'))
}

function onSubmitHandler(evt) {
    evt.preventDefault();
    obj = {
        firstSelect: firstSelect.value,
        secondSelect: secondSelect.value,
        thirdSelect: thirdSelect.value,
        fourSelect: fourSelect.value,
        fiveSelect: fiveSelect.value,
        firstInput: firstInput.value,
        secondInput: secondInput.value
    }
    let newObj = JSON.stringify(obj)
    result.textContent = newObj
    getApi()
}
form.addEventListener('submit', onSubmitHandler);