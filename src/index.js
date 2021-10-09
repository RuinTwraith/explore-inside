/* -------------------- form validation & submission ---------------- */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase, ref, set, push } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD37tS5030ttQJQReO3ti_aOgmq6osjv9I',
  authDomain: 'exploreinsidephotography.firebaseapp.com',
  databaseURL:
    'https://exploreinsidephotography-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'exploreinsidephotography',
  storageBucket: 'exploreinsidephotography.appspot.com',
  messagingSenderId: '960113646377',
  appId: '1:960113646377:web:f0a22ae82688ebb5e07538',
  measurementId: 'G-K0F2D6GFD6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getDatabase()
//reference messages collection
const messageRef = ref(db, 'messages')
const contactForm = document.getElementById('contactForm')
const alertText = document.querySelector('.form__alert')

//save message to firebase
function saveMessage(data) {
  set(push(messageRef), data)
}

contactForm.addEventListener('submit', submitForm)
// submit form
function submitForm(e) {
  e.preventDefault()

  const data = {
    name: getInputVal('name'),
    phone: getInputVal('phone'),
    email: getInputVal('email'),
    city: getInputVal('city'),
    message: getInputVal('message'),
  }
  // save message
  saveMessage(data)

  // show alert
  alertText.style.opacity = '1'
  setTimeout(() => {
    alertText.style.opacity = '0'
  }, 3000)

  // clear form
  contactForm.reset()
}

//funtion to get form values
function getInputVal(id) {
  return document.getElementById(id).value
}

$(window).on('beforeunload', function () {
  $(window).scrollTop(0)
})
