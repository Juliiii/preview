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
let defaultSrcs = ['http://wx1.sinaimg.cn/mw690/005JtfT5ly1fjswr0d89kj32ao328qv6.jpg', 'http://wx1.sinaimg.cn/mw690/005JtfT5ly1fjswr6uy2rj32ao328b2g.jpg'];
let speed = 40;

function preview (srcs = defaultSrcs) {
  // 初始化
  init(srcs);

  let elem = instance = document.createElement('div');
  elem.setAttribute('class', 'preview-wrapper');

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
  if (!srcs.length) return;

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
  if (dir === 'pre') {
    animate(current, 0 - speed, 0);
    animate(current - 1, 0 - speed, clientWidth);
    if (current !== 1) {
      for (let i = 0; i < current - 1; i++) {
        imgs[i].style.left = `${(i + 1 - current) * clientWidth}px`;
      }
    }
    for (i = current + 1; i < imgs.length; i++) {
      imgs[i].style.left = `${(i + 1 - current) * clientWidth}px`;
    }
  } else {
    animate(current, speed, 0);
    animate(current - 1, speed, 0 - clientWidth);
    if (current !== 1) {
      for (let i = 0; i < current - 1; i++) {
        imgs[i].style.left = `${(i + 1 - current) * clientWidth}px`;
      }
    }
    for (i = current + 1; i < imgs.length; i++) {
      imgs[i].style.left = `${(i + 1 - current) * clientWidth}px`;
    }    
  }
}

function animate (index ,offset, boundary) {
  const elem = imgs[index - 1];
  let timeId = setInterval(() => {
    const left = parseInt(elem.style.left);
    if (left + offset >= boundary) {
      elem.style.left = `${boundary}px`;
      clearInterval(timeId);
    } else {
      elem.style.left = `${left + offset}px`;
    }
  }, 10);  
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
  instance.removeEventListener('click', () => {});
  close.removeEventListener('click', () => {});
  father.removeChild(instance);
  e.stopPropagation();
}

function bindEvent () {
  instance.addEventListener('click', destory);
  instance.addEventListener('touchstart', (e) => {
    startX = e.targetTouches[0].pageX;
  });
  instance.addEventListener('touchmove', (e) => {
    endX = e.targetTouches[0].pageX;
  });
  instance.addEventListener('touchend', (e) => {
    if (endX > startX && endX > startX + 20) {
      if (current === 1) return;
      current--;
      slide('pre');
    } else if (endX < startX && endX < startX + 20) {
      if (current === imgs.length) return;
      current++;
      slide('next');
    }
    console.log(current)
    ratio.innerText = `${current}/${total}`;
  });
  close.addEventListener('click', destory);
}




preview();