import './index.css';

let father;
let instance;
let close;
let ratio;
let imgs;
let current;
let total;
let clientWidth;
let startX;
let endX;
let speed = 25;
let defaultSrcs = [];

export default function preview (srcs = defaultSrcs) {
  // 初始化
  init(srcs);

  let elem = instance = document.createElement('div');
  elem.setAttribute('class', 'preview-wrapper animated zoomIn');

  // 右上角的当前图片 / 所有图片
  ratio = document.createElement('div');
  ratio.setAttribute('class', 'ratio');
  ratio.innerText = `${current}/${total}`;

  // 左上角的关闭icon
  close = document.createElement('i');
  close.setAttribute('class', 'iconfont icon-delete icon-close');
  
  // 动态添加图片
  createImgs(srcs);

  elem.appendChild(ratio);
  elem.appendChild(close);
  father.appendChild(elem);

  // 绑定事件
  bindEvent();
}

function createImgs (srcs) {
  if (!srcs.length) throw new Error('srcs should not be empty');

  let wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'preview-innerWrapper');
  wrapper.style.width = `${clientWidth * srcs.length}px`;
  let list = document.createDocumentFragment();
  const { length } = srcs;
  for (let i = 0; i < length; i++) {
    // 创建图片标签和图片的wrapper的标签
    let div = document.createElement('div');
    let img = document.createElement('img');
    // 设置初始样式和位置
    div.setAttribute('class', 'img-wrapper');
    div.style.width = `${clientWidth}px`;
    div.style.left = `${clientWidth * i}px`;
    // 设置图片的样式
    img.setAttribute('class', 'img');
    img.setAttribute('src', srcs[i]);
    div.appendChild(img);
    list.appendChild(div);
    imgs.push(div);
  }
  wrapper.appendChild(list);
  instance.appendChild(wrapper);
}

function slide (dir) {
  Promise.all([
    animate(dir, current - 1, speed, 0),
    animate(dir, dir === 'pre' ? current : current - 2, speed, dir === 'pre' ? clientWidth : -clientWidth)
  ]).then(() => {
    const offset = dir === 'pre' ? clientWidth : -clientWidth;
    for (let i = 0; i < total; i++) {
      if ((dir === 'pre' && i !== current && i !== current - 1) || 
          (dir === 'next' && i !== current - 2 && i !== current - 1)) {
        imgs[i].style.left = `${parseInt(imgs[i].style.left) + offset}px`;
      }
    }      
  });
}

function animate (dir, index , offset, boundary) {
  return new Promise (resolve => {
    const elem = imgs[index];
    if (dir === 'pre') {
      let timeId = setInterval(() => {
        const left = parseInt(elem.style.left);
        if (left + offset >= boundary) {
          elem.style.left = `${boundary}px`;
          clearInterval(timeId);
          resolve();
        } else {
          elem.style.left = `${left + offset}px`;
        }
      }, 20);
    } else if (dir === 'next') {
      let timeId = setInterval(() => {
        const left = parseInt(elem.style.left);
        if (left - offset <= boundary) {
          elem.style.left = `${boundary}px`;
          clearInterval(timeId);
          resolve();
        } else {
          elem.style.left = `${left - offset}px`;
        }
      }, 10);    
    }
  });
}

function init (srcs) {
  instance = null;
  instance = null;
  close = null;
  ratio = null;
  startX = null;
  endX = null;
  imgs = [];
  current = 1;
  total = srcs.length;
  clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
  father = document.getElementsByTagName('body')[0];
}

function destory (e) {
  instance.setAttribute('class', 'preview-wrapper animated zoomOut');
  instance.removeEventListener('click', () => {});
  instance.removeEventListener('touchstart', () => {});
  instance.removeEventListener('touchmove', () => {});
  instance.removeEventListener('touchend', () => {});
  e.stopPropagation();
  setTimeout(() => father.removeChild(instance), 500);
}

function bindEvent () {
  instance.addEventListener('click', destory);

  instance.addEventListener('touchstart', (e) => {
    startX = e.targetTouches[0].pageX;
  });

  instance.addEventListener('touchmove', (e) => {
    endX = e.targetTouches[0].pageX;
    const dir = endX - startX;
    if ((dir > 0 && current === 1) || 
        (dir < 0 && current === total)) return;
    const next_currentLeft = dir < 0 ? parseInt(imgs[current - 1].style.left) - speed : parseInt(imgs[current - 1].style.left) + speed;
    if ((dir < 0 && next_currentLeft <= -clientWidth) ||
        (dir > 0 && next_currentLeft >= clientWidth)) return;
    if (dir < 0) {
      imgs[current - 1].style.left = `${parseInt(imgs[current - 1].style.left) - speed}px`;
      imgs[current].style.left = `${parseInt(imgs[current].style.left) - speed}px`;
    } else {
      imgs[current - 1].style.left = `${parseInt(imgs[current - 1].style.left) + speed}px`;      
      imgs[current - 2].style.left = `${parseInt(imgs[current - 2].style.left) + speed}px`;
    }
  });

  instance.addEventListener('touchend', (e) => {
    if (endX === null) return;
    if (endX > startX && endX > startX + 40) {
      if (current === 1) return;
      current--;
      slide('pre');
    } else if (endX < startX && endX < startX + 40) {
      if (current === imgs.length) return;
      current++;
      slide('next');
    }
    ratio.innerText = `${current}/${total}`;
  });
}
