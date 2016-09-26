var links = {
  weather: 'https://www.google.es/search?q=Weather+at+',
  google: 'https://www.google.es/search?q=',
  bing: 'http://www.bing.com/search?q=',
  amazon: 'https://www.amazon.es/s/field-keywords='
};
var emptyLinks = {
  weather: 'https://www.google.es/search?q=Weather',
  google: 'https://www.google.es/',
  bing: 'http://www.bing.com/',
  amazon: 'https://www.amazon.es/'
};
function searchIn(sel) {
  var value = sel.target.value;
  var text = document.getElementById('searcher').value;

  if (value != '' && text != '') {
    window.open(links[value] + text);
  } else if (value != '' && text == '') {
    window.open(emptyLinks[value]);
  }
};

function news() {
  window.open('http://www.nytimes.com/');
  window.open('http://time.com/');
  window.open('http://www.bbc.com/');
  window.open('http://cnn.com/');
};
function social() {
  window.open('https://www.facebook.com/');
  window.open('https://twitter.com/');
  window.open('https://www.linkedin.com/');
  window.open('https://vk.com/');
};
function shopping() {
  window.open('https://www.amazon.com/');
  window.open('https://www.ebay.com');
  window.open('https://aliexpress.com/');
};


document.getElementById("searchSelection").addEventListener("change", searchIn, false);
document.getElementById("news").addEventListener("click", news, false);
document.getElementById("social").addEventListener("click", social, false);
document.getElementById("shopping").addEventListener("click", shopping, false);
