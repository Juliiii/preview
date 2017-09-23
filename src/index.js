import './index.css';

let father;
let instance;
let close;
let imgs;
let current;
let total;
let clientWidth;
let defaultSrcs = ['http://wx1.sinaimg.cn/mw690/005JtfT5ly1fjswr0d89kj32ao328qv6.jpg', 'http://wx1.sinaimg.cn/mw690/005JtfT5ly1fjswr6uy2rj32ao328b2g.jpg'];

function preview (srcs = defaultSrcs) {
  // 初始化
  init(srcs);

  let elem = instance = document.createElement('div');
  elem.setAttribute('class', 'preview-wrapper');

  // 右上角的当前图片 / 所有图片
  let ratio = document.createElement('div');
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
  let imgs = document.createDocumentFragment();
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
    imgs.appendChild(div);
    imgs
  }
  wrapper.appendChild(imgs);
  instance.appendChild(wrapper);
}

function slide () {

}

function init (srcs) {
  instance = null;
  instance = null;
  close = null;
  imgs = null;
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
  instance.addEventListener('touchstart', () => console.log(1));
  instance.addEventListener('touchmove', (...args) => console.log(args));
  instance.addEventListener('touchend', (...args) => console.log(args));
  close.addEventListener('click', destory);
  instance.ontouchmove = () => {
    console.log('move');
  }
  instance.ontouchend = () => {
    console.log('end');
  }
}


preview();