function generator(number) {
  for(let i = 0; i < number; i++) {
    const section = document.createElement('div');
    section.classList.add('section');
    section.setAttribute('style', `height: ${100/number}%;`);
    container.appendChild(section);
    for(let j = 0; j < number; j++) {
      const div = document.createElement('div');
      div.classList.add('block');
      div.setAttribute('style', `width: ${100/number}%;`);
      section.appendChild(div);
      div.addEventListener('mouseenter', () => {
        div.classList.toggle('active');
      });
    }
  }
}

const container = document.querySelector("#container");
container.setAttribute('style', 'display: flex; width: 400px; height: 400px; flex-wrap: wrap; flex-direction: column; background-color: #f2f2f2;');

let number = 4;

generator(number);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  do {
    number = Number(prompt("Enter number between 1 and 100:"));
  }
  while(number < 1 || number > 100);

  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  generator(number);
});
