//Variable container
var button_submit = document.querySelector('.button_submit');
var i;


//Variables for add contacts details
// var genero = document.getElementById('.genero');


//Creacion HTML 
let datos = [];

//eventListeners
eventListeners();

//Function 
function eventListeners() {

    button_submit.addEventListener('click', ((e) => {
        addContact();
    }))
}


function addContact() {

    var nameContact = document.querySelector('.name').value;
    var telephoneContact = document.querySelector('.telephone').value;
    var emailContact = document.querySelector('.email').value;
    var directionContact = document.querySelector('.direction').value;


    if (nameContact === '' || telephoneContact === '' || emailContact === '' || directionContact === '') {
        console.log('No pude ir vacio');

        return;
    }
    const informationContact = {
        nameContactObject: nameContact,
        telephoneContactObject: telephoneContact,
        emailContactObject: emailContact,
        directionContactObject: directionContact,
    }


    const { nameContactObject, telephoneContactObject, emailContactObject, directionContactObject } = informationContact;

    Refresh_Selection_Contacts();

    //Creacion y acceso de variables
    //Details for contact
    const nameContactNew = document.createElement('p');
    const telephoneContactNew = document.createElement('p');
    const emailContactNew = document.createElement('p');
    const directionContactNew = document.createElement('p');
    const imagenContactNew = document.createElement('img');
    //Create containers contacts
    const NewContact = document.createElement('div');
    const container_contacts = document.querySelector('#container_contacts');
    //Add class
    nameContactNew.classList.add('contacts_name');
    NewContact.classList.add('contacts_contrated');
    telephoneContactNew.classList.add('contacts_telephone');
    emailContactNew.classList.add('contacts_gmail');
    directionContactNew.classList.add('contacts_direction');

    //Add text
    nameContactNew.innerHTML = nameContactObject;
    telephoneContactNew.innerHTML = telephoneContactObject;
    emailContactNew.innerHTML = emailContactObject;
    directionContactNew.innerHTML = directionContactObject;
    //Add details
    genderSelection();
    NewContact.appendChild(imagenContactNew).src = i;
    NewContact.appendChild(nameContactNew);
    NewContact.appendChild(telephoneContactNew);
    NewContact.appendChild(emailContactNew);
    NewContact.appendChild(directionContactNew);

    //Add NewContact
    container_contacts.appendChild(NewContact);

    Refresh_Selection_Contacts();
    ClosedContainerAddContacts();
}

function ClosedContainerAddContacts() {
    container_form_add_contacts.classList.remove('container_add_contact_expanded');
    container_form_add_contacts.classList.add('container_add_contact_contracted');
}


function genderSelection() {
    if (document.getElementById('Hombre').checked) {
        i = 'Icons/hombre-de-negocios.png';
    } else if (document.getElementById('Mujer').checked) {
        i = 'Icons/mujer_de_negocios.png';
    }
    if (document.getElementById('No').checked) {
        i = 'Icons/icons8-batman-viejo-48.png';
    }
}

