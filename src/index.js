import './style.css';
import modalPopUp from './modules/modal';
import checkboxVisual from './modules/checkboxVisual';
import deleteButton from './modules/deleteButton';
import submitForm from './modules/submitForm';
import openDetailModal from './modules/openDetailModal';
import closeDetailModal from './modules/closeDetailModal';

window.tasks = [];

// add task popup logic
modalPopUp();
//submit form functionality
submitForm();
// checkbox ticking visual functionality
checkboxVisual();
// delete button functionality
deleteButton();
//open details modal fxn
openDetailModal();
//close detail modals fxn
closeDetailModal();
