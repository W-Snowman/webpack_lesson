import bg from './bg_img.jpg'
import './index.scss'

var root = document.getElementById("root");
var img = new Image();
img.src = bg;
img.classList.add('avatar');
root.append(img);

