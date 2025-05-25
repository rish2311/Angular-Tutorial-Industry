import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Just niche wali line se error to nhi aayega but data bhi nhi dikhega agar hum new WishItems ko comment krde.
  items : WishItem[] = [

    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];

  title = 'wishlist';

  listFilter: String = '';

  newWishText = '';

  visibleItems : WishItem[] = this.items;

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  // toggleItem(e: any) {
  //  console.log(e) }
  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }

  // filterChanged(value: any) {
  //   console.log('The new value is', value);
  // }
  filterChanged(value: any) {
    if(value === '0') {
      this.visibleItems = this.items;
    } else if(value === '1'){
      this.visibleItems = this.items.filter(item => !item.isComplete);
    } else{
      this.visibleItems = this.items.filter(item => item.isComplete);
    }
  }
}
