import bg from './bg_img.jpg'
import style from './index.scss'
import createAvatar from './createAvatar.js';

createAvatar();
var root = document.getElementById("root");
var img = new Image();
img.src = bg;
img.classList.add(style.avatar);
root.append(img);

