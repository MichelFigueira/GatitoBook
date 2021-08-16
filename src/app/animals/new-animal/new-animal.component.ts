import { Router } from '@angular/router';
import { AnimalsService } from './../../services/animals.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent implements OnInit {

  animalForm!: FormGroup;
  file!: File;
  preview!: string;
  percentFinish = 0;

  constructor(private animalsService: AnimalsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.animalForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      allowComments: ['', Validators.required]
    })
  }

  upload() {
    const allowComments = this.animalForm.get('allowComments')?.value ?? false;
    const description = this.animalForm.get('description')?.value ?? '';

    this.animalsService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigate(['animals'])))
      .subscribe((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress) {
          const total = event.total ?? 1;
          this.percentFinish = Math.round(100*(event.loaded / total));
        }
      },
      (error) => {
        console.log(error);
      }
      );
  }

  saveFile(fileReceived: any): void {
    const [file] = fileReceived?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }

}
