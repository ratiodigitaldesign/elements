/* globals $ */

import Flickity from 'flickity';
import Imagesloaded from 'imagesloaded';

export default () => {
  if ($('.gallery').length > 0) {
    Imagesloaded('.gallery', () => {
      console.log('yo');
    });
  }
};
