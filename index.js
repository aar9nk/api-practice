const factContainer = document.querySelector("#top-fact");
const button = document.querySelector('#button');
const listContainer = document.querySelector("#fact-list");

const createTopFactHtml = (text) => {
  return `
  <div class="shadow-sm bg-body rounded" style="display: flex; flex-direction: column; align-items: center; padding: 24px; border: 1px solid black">
    <h2>Todays Top Fact</h2>
    <p>${text}</p>
  </div>
`;
};

async function getTopFactData() {
  const response = await fetch('https://meowfacts.herokuapp.com/?id=3');
  const data = await response.json()

  const catFact = data.data[0];

  factContainer.innerHTML = createTopFactHtml(catFact);
}

getTopFactData()

const createListOfFactsHtml = (factNumber, text) => {
  return `
  <div class="shadow-sm bg-body rounded" style="display: flex; flex-direction: column; align-items: center; padding: 24px; border: 1px solid black">
    <h2>Fact: ${factNumber}</h2>
    <p>${text}</p>
  </div>
`;
};

button.addEventListener('click', async () => {
  const response = await fetch('https://meowfacts.herokuapp.com/?count=50');
  const data = await response.json()

  console.log(data);

  let finishedHtml = '';

  console.log('One item: ', createListOfFactsHtml(0, data.data[0]));
  
  for (let i = 0; i < data.data.length; i++) {
    finishedHtml = finishedHtml + createListOfFactsHtml(i + 1, data.data[i]);
  }
  
  console.log('all items: ', finishedHtml);

  listContainer.innerHTML = finishedHtml;
})












