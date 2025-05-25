import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
]
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

  listFilter: any = '0';

  newWishText = '';

  get visibleItems() : WishItem[] {
    // Now we dont need this 

    // let value = this.listFilter;

    // if(value === '0') {
    //   return this.items;
    // } else if(value === '1'){
    //   return this.items.filter(item => !item.isComplete);
    // } else{
    //   return this.items.filter(item => item.isComplete);
    // }
    return this.items.filter(filters[this.listFilter]);
  };

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
    
  }
}
