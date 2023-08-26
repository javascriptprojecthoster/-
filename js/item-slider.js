
  const mainPhoto = document.querySelector('.product__photo-main')
  const photos = document.querySelectorAll('.product__photo')
  let currentNumberPhoto = +document.querySelector('.outline__photo').dataset.photo

  for (const i of photos) {
    i.addEventListener('click', function(){
      currentNumberPhoto = i.dataset.photo

      const nextPhoto = document.querySelector(`[data-photo="${currentNumberPhoto}"]`)
      mainPhoto.firstElementChild.remove()
      img = document.createElement('img');
      img.src = nextPhoto.firstChild.dataset.src;
      mainPhoto.prepend(img);

      for (const j of photos) {
        j.classList.remove('outline__photo')
      }

      i.classList.add('outline__photo')
    })
  }