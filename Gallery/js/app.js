document.addEventListener("DOMContentLoaded", function(){
     var arrayImg = document.querySelectorAll('.gallery li');
     var body = document.querySelector('body');

         for ( var i=0 ; i < arrayImg.length; i++) {
             arrayImg[i].addEventListener('click', function (event){
                 console.log();
                 var imgSrc = this.firstElementChild.getAttribute('src');
                 console.log(imgSrc);

                 var newDivs = document.createElement('div');
                 newDivs.classList.add('fullScreen');

                 var newImg = document.createElement('img');
                 newImg.setAttribute('src',imgSrc);

                 var newButton = document.createElement('button');
                 newButton.classList.add('close');
                 newButton.innerText = 'close';

                 var addFullScreen = body.appendChild(newDivs);
                 addFullScreen.appendChild(newImg);

                 var closeButton = addFullScreen.appendChild(newButton);
                 closeButton.addEventListener('click', function (e) {
                     addFullScreen.parentNode.removeChild(addFullScreen);
                 });
             });

         }
 });
