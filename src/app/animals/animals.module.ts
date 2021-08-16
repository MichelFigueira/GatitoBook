import { CardModule } from './../shared/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalComponent } from './animal/animal.component';
import { GridAnimalsComponent } from './grid-animals/grid-animals.component';


@NgModule({
  declarations: [
    ListAnimalsComponent,
    AnimalComponent,
    GridAnimalsComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule
  ]
})
export class AnimalsModule { }
