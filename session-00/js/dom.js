// console.log(window);
// window.alert('hello world');

// const msg = document.getElementById("msg").innerHTML = 'message <mark>comes here</mark>';
// const divContainer = document.getElementsByClassName('container');
// const msg = document.querySelector("#msg").innerHTML = 'message <mark>comes here</mark>';
// const el = document.querySelector('div');
// const allDiv = document.querySelectorAll('div');

// console.log(allDiv)


const myform = document.querySelector('#my-form')
const fname = document.querySelector('#fname')
const lname = document.querySelector('#lname')
const country = document.querySelector('#country')
const subject = document.querySelector('#subject')
const msg = document.querySelector('.msg')
const contacts_ol = document.querySelector('#contacts-list')


myform.addEventListener('submit', onSubmitForm)

function onSubmitForm(e) {
    e.preventDefault()
    if (fname.value === '' || lname.value === '' || subject.value === '') {
        msg.innerHTML = "all fields are required"
        msg.classList.add('error')
        setTimeout(() => {
            msg.innerHTML = ''
            msg.classList.remove('error')
        }, 3000)
    } else {
        const newContactItem = document.createElement('li')
        newContactItem.appendChild(document.createTextNode(`${fname} ${lname} from '${country}': (<small>${subject}</small>)`))

        contacts_ol.appendChild(newContactItem)

        fname.value = ''
        lname.value = ''
        subject.value = ''
    }
}


