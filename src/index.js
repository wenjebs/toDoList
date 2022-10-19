import './style.css';
import modalPopUp from './modules/modal';
import checkboxVisual from './modules/checkboxVisual';
import deleteButton from './modules/deleteButton';
import submitForm from './modules/submitForm';

window.tasks = [];

// add task popup logic
modalPopUp();
//submit form functionality
submitForm();
// checkbox ticking visual functionality
checkboxVisual();
// delete button functionality
deleteButton();


