// 页面初始加载动画延时
setTimeout(function () {
  document.getElementById('siteWelcome').classList.remove('active')
}, 0000)
// 初始化
// scrollTopBar()
progessRedMove()
window.onscroll = onscrollListen


function onscrollListen() {
  if (window.scrollY > 15) {
    document.getElementById('topNavBar').classList.add('sticky')
  } else {
    document.getElementById('topNavBar').classList.remove('sticky')
  }
  if(window.scrollY > 650) {
    document.getElementsByClassName('sectionSkill')[0].classList.add('recover')

  }
  if(window.scrollY > 850){
    document.getElementsByClassName('project')[0].classList.add('recover')
  }
}
// 生活照红条添加onclick
function progessRedMove() {
  for (let x = 0, li = document.getElementsByClassName('portfolio-li'); x < li.length; x++) {
    li[x].setAttribute('onclick', "document.getElementById('portfolioBar').className = 'progessBarInner state-" + (x + 1) + "'," + "document.getElementById('live-picture-inside').className = 'live-picture-inside changePicture" + x + "'")
  }
}

// 顶部添加滑动距离
// function scrollTopBar() {
//   for (let x = 0, li = document.getElementById('topBarUl').getElementsByTagName('li'); x < li.length; x++) {
//     li[x].getElementsByTagName('span')[0].setAttribute('onclick', "slowMove(" + (document.getElementsByClassName('anchor')[x].offsetTop - 120) + ")")
//   }
// }

function slowMove(y) {
  let needScrollTop = y - window.scrollY
  let currentY = window.scrollY
  setTimeout(() => {
    let moveY = Math.ceil(needScrollTop / 10)
    currentY += moveY
    window.scrollTo(0, currentY)
    if (needScrollTop > 10 || needScrollTop < -10) {
      slowMove(y)
    } else {
      window.scrollTo(0, y)
    }
  }, 6)
}