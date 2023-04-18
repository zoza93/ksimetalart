import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function Gallery({resource}) {
  return (
    <div>
      <ImageGallery items={resource} />
    </div>
  )
}

export default Gallery
