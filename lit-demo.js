import { html, render } from 'lit-html';

const template = (dogCount) => html`
  <h2>Animal Demo</h2>
  <p>I have ${dogCount} dogs</p>
  <p>I have ${catCount} cats</p>
`;

let dogCount = 2;
let catCount = 2;

setInterval(() => {
  dogCount++;
  render(template(dogCount, catCount), document.body);
}, 500);

document.addEventListener('mousemove', () => {
  catCount++;
  render(template(dogCount, catCount), document.body);
})
