// Variables

const btn_cambio = document.querySelector('.btn_cambio');
const contenedor_informacion = document.querySelector('#bar_information');

//Variables/Section Contacts

var container_form_add_contacts = document.querySelector('#container_form_add_contacts');
var btnOpenContacts = document.querySelector('.img_add_contacts');
var button_remove_container = document.querySelector('#button_remove_container');

// eventListener

btn_cambio.addEventListener('click', (e) => {
    contenedor_informacion.classList.toggle('expanded');
    contenedor_informacion.classList.toggle('contracted');
    container_contacts.classList.toggle('inhability_contenedor_contactos');
    container_contacts.classList.toggle('contenedor_contactos');
})

btnOpenContacts.addEventListener('click' , (() =>{
    container_form_add_contacts.classList.toggle('container_add_contact_expanded');
    container_form_add_contacts.classList.toggle('container_add_contact_contracted');
}))

button_remove_container.addEventListener('click',(() =>{
   container_form_add_contacts.classList.remove('container_add_contact_expanded');
   container_form_add_contacts.classList.add('container_add_contact_contracted');
}))


function Refresh_Selection_Contacts() {
var principal_contact = document.querySelectorAll('.contacts_contrated');
principal_contact.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('contacts_expanded');
        element.classList.toggle('contacts_contrated');
    })
});
}

