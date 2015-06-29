import ko from 'ko';
import './like-or-dislike.js';

class Product {
  constructor(name, rating = null) {
    this.name = name;
    this.userRating = ko.observable(rating);
  }
}

class ProductsViewModel {
  constructor() {
    this.products = ko.observableArray();
    this.likedCount = ko.pureComputed(() => this.products().filter(p => p.userRating() == 'like').length);
    this.dislikedCount = ko.pureComputed(() => this.products().filter(p => p.userRating() == 'dislike').length);
  }

  addProduct() {
      const name = `Product ${this.products().length + 1}`;
      this.products.push(new Product(name));
  }
}

ko.applyBindings(new ProductsViewModel(), document.getElementById('root'));
