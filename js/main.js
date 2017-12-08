(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var carImages = document.querySelectorAll('.data-ref'),
       modelName = document.querySelector('.modelName'),
       priceInfo = document.querySelector('.priceInfo'),
       modelInfo = document.querySelector('.modelDetails'),
       appliedClass;

       const httpRequest = new XMLHttpRequest();
       function getCarData() {
         const url = './includes/functions.php?carModel=' + this.id;

         fetch(url)
          .then((resp) => resp.json())
          .then((data) => { processResult(data); })
          .catch(function(error)); {
            console.log(error);
        }
          //set up the AJAX call => handle errors first
          //if (!httpRequest) {
            //alert('giving up, your browser sucks');
          //  return false;
        //  }

        //  httpRequest.onreadystatechange = processRequest;
        //  httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
        //  httpRequest.send();//
          }


        function processRequest() {
          let reqIndicator = document.querySelector('.request-state');
          reqIndicator.textContent = httpRequest.readyState;
          debugger;

          if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) { // 200 means everything is awesome
              //debugger;
              let data = JSON.parse(httpRequest.responseText); //turn data into js project

              changeElements(data);
            } else {
              alert('There was a problem with the request.');
            }
          }
        }







       function changeElements(data) {
         const { modelname, pricing, modelDetails} = data;
         let carIndex = carData[this.id];
        let modelName = document.querySelector('.modelName').textContent = modelname;
        let priceInfo = document.querySelector('.priceInfo').innerHTML = pricing;
        let modelInfo = document.querySelector('.modelDetails').textContent = modelDetails;

         //modelName.firstChild.nodeValue = carIndex.carName;
        // priceInfo.firstChild.nodeValue = carIndex.price;
        // modelInfo.innerHTML = carIndex.description;



         carImages.forEach(function(element, index){
           element.classList.add('nonActive');
         });


          document.querySelector('#${data.model}').classList.remove('nonActive');
         //this.classList.remove('nonActive');




     }



       carImages.forEach(function(element, index) {
    // loop through the images and add event handling to each one
    element.addEventListener('click', getCarData, false);
  });



})();
