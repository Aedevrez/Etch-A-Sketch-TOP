const container = document.querySelector("#container");
container.setAttribute('style', 'display: flex; width: 500px; height: 500px; flex-wrap: wrap; flex-direction: column; background-color: gray;');

for(let i = 0; i < 4; i++) {
  const section = document.createElement('div');
  section.classList.add('section');
  container.appendChild(section);
  for(let j = 0; j < 4; j++) {
    const div = document.createElement('div');
    div.classList.add('block');
    section.appendChild(div);
    div.addEventListener('mouseenter', () => {
      div.classList.toggle('active');
    });
  }
}
