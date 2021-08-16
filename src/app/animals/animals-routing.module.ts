import { NewAnimalComponent } from './new-animal/new-animal.component';
import { ListAnimalsResolver } from './list-animals/list-animals.resolver';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListAnimalsComponent,
    resolve: { animals: ListAnimalsResolver }
  },
  { path: 'new', component: NewAnimalComponent },
  { path: ':animalId', component: DetailAnimalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
