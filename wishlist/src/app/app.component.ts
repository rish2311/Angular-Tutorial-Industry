import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { AnyRecordWithTtl } from 'dns';
@Component({
  selector: 'app-root',
  imports: [CommonModule],
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

  // toggleItem(e: any) {
  //  console.log(e) }
  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
