import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MorePipe } from './pipes/more.pipe';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BookComponent,
    SpinnerComponent,
    MorePipe,
    PhonePipe
  ],
})
export class SharedModule {}
