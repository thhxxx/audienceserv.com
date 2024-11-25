document.addEventListener('DOMContentLoaded', function () {
  let header = document.getElementById('header');
  let banner = document.getElementById('banner');
  if (banner) {
    banner.style.height = `calc(100vh - ${header.offsetHeight}px)`;
  }
});

function changeBackground (button) {
  const city = button.getAttribute('data-bs-target');
  switch (city) {
    case '#BERLIN':
      return document.getElementById('banner').style.background = 'url(../../images/BERLIN.jpg) fixed no-repeat center center / cover';
    case '#MUNICH':
      return document.getElementById('banner').style.background = 'url(../../images/MUNICH.jpg) fixed no-repeat center center / cover';
    case '#BARCELONA':
      return document.getElementById('banner').style.background = 'url(../../images/BARCELONA.jpg) fixed no-repeat center center / cover';
    case '#PORTO':
      return document.getElementById('banner').style.background = 'url(../../images/PORTO.jpg) fixed no-repeat center center / cover';
    case '#SINGAPORE':
      return document.getElementById('banner').style.background = 'url(../../images/SINGAPORE.jpg) fixed no-repeat center center / cover';
    case '#HANOI':
      return document.getElementById('banner').style.background = 'url(../../images/HANOI.jpg) fixed no-repeat center center / cover';
    default:
      return document.getElementById('banner').style.background = 'url(../../images/BERLIN.jpg) fixed no-repeat center center / cover';
  }
}


