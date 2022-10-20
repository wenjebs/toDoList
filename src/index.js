import './style.css';
import modalPopUp from './modules/modal/modalPopUp';
import checkboxVisual from './modules/buttons/checkboxVisual';
import deleteButton from './modules/buttons/deleteButton';
import submitForm from './modules/submitForm';
import openDetailModal from './modules/detailModal/openDetailModal';
import closeDetailModal from './modules/detailModal/closeDetailModal';
import keyBoardFunction from './modules/keyBoardFunctionality';
import editButtonDom from './modules/editPopup/editButtonDOM';
import closeEditPopup from './modules/editPopup/closeEditPopupDOM';
import submitEditCard from './modules/editPopup/submitEditCard';


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

// edit button in dom
editButtonDom();
// close edit popup
closeEditPopup();
// submit edit n get details
submitEditCard();
// edit card DOM using details


//keyboard fxn
keyBoardFunction();
