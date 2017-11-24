(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var theImages = document.querySelectorAll('.data-ref'),
    carTitle = document.querySelector('.modelName'),
    price = document.querySelector('.priceInfo'),
    desc = document.querySelector('.modelDetails'),
    appliedClass;

    function changeElements() {

    let carIndex = carData[this.id];

    carTitle.firstChild.nodeValue = carIndex.headline;
    price.firstChild.nodeValue = carIndex.price;
    desc.firstChild.nodeValue = carIndex.text;

   theImages.forEach(function(element, index){
     element.classList.add('nonActive');
   })

  this.classList.remove('nonActive');
}

  theImages.forEach(function(element, index) {

  element.addEventListener('click', changeElements, false);

})

})();
