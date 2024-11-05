import 'reveal.js/dist/theme/solarized.css';
import "./home.css";

document.addEventListener("DOMContentLoaded", showAllAvailableSlides);

async function showAllAvailableSlides() {
  const files = import.meta.glob('../slides/**/*.md');

  console.log(files);

  let slidesHTML = '';
  let lastFolder = '';

  Object.keys(files)
    .map(filename => filename.replace("\.\./slides/", ""))
    .map(filename => filename.replace("\.md", ""))
    .map(filename => {
    
    let folder = filename.split('/')[0];
    folder = folder.substring(3).replaceAll("-", " ");

    let slidesName = filename.split('/')[1].replaceAll("-", " ");
    
    if(folder != lastFolder) {
      lastFolder = folder;

      const li = document.createElement('li');
      li.textContent = folder;
      document.querySelector("ul").append(li);

      const ul = document.createElement('ul');
      ul.id = filename.split('/')[0];
      li.append(ul);

      const li2 = document.createElement('li');
      li2.innerHTML = `<a href="/slides?filename=${filename}">${slidesName}</a>`;
      ul.append(li2);

    } else {

      const ul = document.getElementById(filename.split('/')[0]);

      const li2 = document.createElement('li');
      li2.innerHTML = `<a href="/slides?filename=${filename}">${slidesName}</a>`;
      ul.append(li2);
    }
  });

}