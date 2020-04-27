import postData from './postData';

const updateUI = data => {
  const analysedDataElements = document.querySelectorAll('.analysed-data');

  analysedDataElements.forEach(element => {
    const { id } = element;
    if (id === 'link') {
      element.src = data[id];
    } else {
      element.textContent = data[id] ? data[id] : 'No Data';
    }
  });
};

const handleSubmit = event => {
  event.preventDefault();

  const { value: url } = document.querySelector('#url');

  postData({ url })
    .then(data => data.json())
    .then(data => {
      updateUI({ ...data });
    })
    .catch(error => updateUI({ status: error, link: url }));

  event.target.reset();
};

export default handleSubmit;
