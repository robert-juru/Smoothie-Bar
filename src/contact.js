import contactIcon from './contact-icons/contact-icon.png';
import addressIcon from './contact-icons/address-icon.png';
import programIcon from './contact-icons/program-icon.png';

export function createContactPage() {
    const contactContainer = document.createElement('main');
    contactContainer.className = 'contact-container';
    const form = document.createElement('form');

    const formHeading = document.createElement('h2');
    formHeading.textContent = 'Have a question? Feel free to ask below!';
    form.appendChild(formHeading);

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Full name (*):';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.required = true;
    nameLabel.appendChild(nameInput);
    form.appendChild(nameLabel);

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email address (*):';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.required = true;
    emailLabel.appendChild(emailInput);
    form.appendChild(emailLabel);

    const subjectLabel = document.createElement('label');
    subjectLabel.textContent = 'Subject (*):';
    const subjectInput = document.createElement('input');
    subjectInput.type = 'text';
    subjectInput.required = true;
    subjectLabel.appendChild(subjectInput);
    form.appendChild(subjectLabel);

    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message (*):';
    const messageTextarea = document.createElement('textarea');
    messageTextarea.required = true;
    messageLabel.appendChild(messageTextarea);
    form.appendChild(messageLabel);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);


    const contactDetailsSection = document.createElement('div');
    contactDetailsSection.classList.add('contact-details-section');
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const contactPhoto = new Image();
    contactPhoto.src = contactIcon;
    contactInfo.appendChild(contactPhoto);

    contactInfo.innerHTML += `
    <div>
    <h2>Contact</h2>
    <p><strong>Phone number:</strong> +40 731 555 888</p>
    <p><strong>Email:</strong> fuelicious@smoothie.com</p>
    </div>
    `;
    contactDetailsSection.appendChild(contactInfo);

    const addressInfo = document.createElement('div');
    addressInfo.classList.add('address-info');

    const addressPhoto = new Image();
    addressPhoto.src = addressIcon;
    addressInfo.appendChild(addressPhoto);

    addressInfo.innerHTML += `
    <div>
    <h2>Our Address</h2>
    <p>SmoothieVille Square,</p>
    <p>NutriGrove, NG 67890,</p>
    <p>Fitville, FTV</p>
    </div>
    `;
    contactDetailsSection.appendChild(addressInfo);

    const openingHoursInfo = document.createElement('div');
    openingHoursInfo.classList.add('opening-hours-info');

    const programPhoto = new Image();
    programPhoto.src = programIcon;
    openingHoursInfo.appendChild(programPhoto);

    openingHoursInfo.innerHTML += `
    <div>
    <h2>Hours</h2>
    <p><strong>Monday-Friday:</strong> 11:00-23:00</p>
    <p><strong>Saturday:</strong> 12:00-22:00</p>
    <p><strong>Sunday:</strong> 14:00-21:00</p>
    </div>
    `;
    contactDetailsSection.appendChild(openingHoursInfo);
    contactContainer.appendChild(form);
    contactContainer.appendChild(contactDetailsSection);

    return contactContainer;
}
