import { AnimalsService } from './../../services/animals.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-animal',
  templateUrl: './detail-animal.component.html',
  styleUrls: ['./detail-animal.component.css']
})
export class DetailAnimalComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(private animalsService: AnimalsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animalsService.findById(this.animalId);
  }

  like() {
    this.animalsService.like(this.animalId).subscribe(
      (like) => {
        if(like) {
          this.animal$ = this.animalsService.findById(this.animalId);
        }
      },
      (error) => {
        console.log(error)
      }
    )
  }

  delete() {
    this.animalsService.deleteAnimal(this.animalId).subscribe(
      () => {
        this.router.navigate(['/animals/'])
      },
      (error) => {
        console.log(error)
      }
    );
  }

}
