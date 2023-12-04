const modalButtons = document.querySelectorAll('[data-toggle="modal"]');
const modalCloseButtons = document.querySelectorAll('[data-dismiss="modal"]');
const modals = document.querySelectorAll('[data-modal]');

for (const modalButton of modalButtons){
  modalButton.addEventListener('click', handleModal);
}

for (const modalCloseButton of modalCloseButtons){
  modalCloseButton.addEventListener('click', handleModal);
}

for (const modal of modals){
  modal.addEventListener('click', handleModalClick);
}

function handleModal(e) {
  modal = document.getElementById(e.target.dataset.target);
  modal.classList.toggle('d-block');
}
  
function handleModalClick(e) {
  modalContent = e.target.querySelector('[data-content="modal"]');
  if(modalContent != null && !modalContent.contains(e.target)) {
    modal.classList.remove('d-block');
  }
}