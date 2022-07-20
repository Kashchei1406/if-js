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
    enctype: 'multipart/form-data',
  };

  try {
    const response = await fetch('https://fe-student-api.herokuapp.com/api/file', options);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});
