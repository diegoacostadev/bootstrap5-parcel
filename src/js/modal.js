import { Modal } from 'bootstrap';

const modal = document.getElementById('myModal');

modal.addEventListener('show.bs.modal', ev => {
  console.log('show modal');
});

modal.addEventListener('hide.bs.modal', ev => {
  console.log('hide modal');
})