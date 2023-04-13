const mockTop100Films = [{
    href: '',
    image: '../../assets/top_jpg/1.jpg',
    name: 'Втеча з Шоушенка(1994)',
  },
  {
    href: '',
    image: '../../assets/top_jpg/2.jpg',
    name: 'Хрещений батько(1972)',
  },
  {
    href: '',
    image: '../../assets/top_jpg/3.jpg',
    name: 'Темний лицар (2008)',
  },
];

function getTop100Films() {
  return mockTop100Films;
}

function createLink(href) {
  const a = document.createElement('a');
  a.href = href;

  return a;
}

function createImage(imagePath) {
  const img = document.createElement('img');
  img.src = imagePath;

  return img;
}

function fillTop100(content) {
  const parent = document.getElementById('content-top-100');

  content.forEach(function(element) {
    const link = createLink(element.href);
    const image = createImage(element.image);

    link.appendChild(image);
    parent.appendChild(link);
  });
}

fillTop100(getTop100Films());