import Controller from './Controller';

class CarouselController extends Controller {
  set($payload) {
    this.dispatch('carousel', 'slides', $payload)
  }
}

export default CarouselController
