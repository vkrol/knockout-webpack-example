import ko from 'knockout';
import likeOrDislikeHtml from './like-or-dislike.html';

class LikeWidgetViewModel {
  constructor(params) {
    this.chosenValue = params.value;
  }

  like() {
    this.chosenValue('like');
  }

  dislike() {
    this.chosenValue('dislike');
  }
}

ko.components.register('like-or-dislike', {
  viewModel: LikeWidgetViewModel,
  template: likeOrDislikeHtml
});
