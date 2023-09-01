// console.log(window);
// window.alert('hello world');

// const msg = document.getElementById("msg").innerHTML = 'message <mark>comes here</mark>';
// const divContainer = document.getElementsByClassName('container');
// const msg = document.querySelector("#msg").innerHTML = 'message <mark>comes here</mark>';
// const el = document.querySelector('div');
// const allDiv = document.querySelectorAll('div');
const bodyElement = document.querySelector('body');
bodyElement.addEventListener('dblclick', () => {
    console.log('double clicked on body!')
})


const myform = document.querySelector('#my-form')
const fname = document.querySelector('#fname')
const lname = document.querySelector('#lname')
const country = document.querySelector('#country')
const favColor = document.querySelector('#fav-color')
const subject = document.querySelector('#subject')
const msg = document.querySelector('#msg')
const contacts_ol = document.querySelector('#contacts-list')


myform.addEventListener('submit', onSubmitForm)

function onSubmitForm(e) {
    e.preventDefault()
    if (fname.value === '' || lname.value === '' || subject.value === '') {
        msg.innerHTML = "All fields are required"
        msg.classList.add('error')
        setTimeout(() => {
            msg.innerHTML = ''
            msg.classList.remove('error')
        }, 7000)
    } else {
        const newContactItem = document.createElement('li')
        const itemText = `${fname.value} ${lname.value} from '${country.value}': (${subject.value})`

        newContactItem.appendChild(document.createTextNode(itemText))
        newContactItem.style.backgroundColor = favColor.value
        newContactItem.style.padding = '5px'

        contacts_ol.appendChild(newContactItem)

        fname.value = ''
        lname.value = ''
        subject.value = ''
    }
}


const btnChangeBgColor = document.querySelector('#btnChangeBgColor')

btnChangeBgColor.addEventListener('click', () => {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    let randColor = randomNumber.toString(16);
    console.log(randColor)
    bodyElement.style.backgroundColor = `#${randColor}`;
})

