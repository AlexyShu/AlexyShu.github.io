'use strict';

(function () {

  var renderPhotos = function (photos) {
    var picturesBlock = document.querySelector('.pictures');
    var photosTemplate = document.querySelector('#picture').content.querySelector('.picture');
    var photosCurrent = picturesBlock.querySelectorAll('.picture');
    for (var j = 0; j < photosCurrent.length; j++) {
      picturesBlock.removeChild(photosCurrent[j]);
    }
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < photos.length; i++) {
      var photo = photos[i];
      var element = photosTemplate.cloneNode(true);
      element.querySelector('.picture__img').src = photo.url;
      element.querySelector('.picture__likes').textContent = photo.likes;
      element.querySelector('.picture__comments').textContent = photo.comments.length;
      element.addEventListener('click', window.showPhoto.openPhoto(photo));
      fragment.appendChild(element);
    }
    picturesBlock.appendChild(fragment);
  };

  window.renderPic = {
    renderPhotos: renderPhotos
  };

})();
