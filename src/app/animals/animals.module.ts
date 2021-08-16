import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from './../shared/messages/messages.module';
import { CardModule } from './../shared/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalComponent } from './animal/animal.component';
import { GridAnimalsComponent } from './grid-animals/grid-animals.component';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { CommentsComponent } from './detail-animal/comments/comments.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';


@NgModule({
  declarations: [
    ListAnimalsComponent,
    AnimalComponent,
    GridAnimalsComponent,
    DetailAnimalComponent,
    CommentsComponent,
    NewAnimalComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
    SharedModule
  ]
})
export class AnimalsModule { }
