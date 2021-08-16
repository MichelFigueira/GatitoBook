import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from './messages/messages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MessagesModule,
    ReactiveFormsModule
  ],
  exports: [
    MessagesModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
