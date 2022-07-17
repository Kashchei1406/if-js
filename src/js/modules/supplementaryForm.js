const form = document.getElementById('form-file');
const inputFile = document.getElementById('input');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const file = inputFile.files[0];
  formData.append('file', file);
  const options = {
    method: 'POST',
    body: formData,
    mode: 'no-cors',
    headers: { 'Content-Type': 'multipart/form-data' },
  };

 await fetch('https://fe-student-api.herokuapp.com/api/file', options)
    .then((response) => console.log(response.status))
    .catch((err) => console.error(err));
});
