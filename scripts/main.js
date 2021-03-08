const detail_image_selector = '[data-image-role="target"]'
const detail_image_title = '[data-image-role="title"]'
const thumbnail_link_selector = '[data-image-role="trigger"]'

function setDetails(imageUrl, titleText) {
    'use strict';

// Code will go here
    let detailImage = document.querySelector(detail_image_selector);
    detailImage.src = imageUrl;

    let detailTitle = document.querySelector(detail_image_title);
    detailTitle.textContent = titleText;
}


function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}


function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(thumbnail_link_selector);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}
initializeEvents();
