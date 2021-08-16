import { AnimalsService } from './../../../services/animals.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Comments } from 'src/app/models/comment';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() id!: number;
  comments$!: Observable<Comments>;
  commentForm!: FormGroup;

  constructor(private animalService: AnimalsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.comments$ = this.animalService.findComment(this.id);

    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required]
    })
  }

  saveComment(): void {
    const comment = this.commentForm.get('comment')?.value ?? '';
    this.comments$ = this.animalService
    .newComment(this.id, comment)
    .pipe(switchMap(() => this.animalService.findComment(this.id))
    ,tap(() => {
      this.commentForm.reset();
      alert('Comentário Salvo com Sucesso!');
    })
    );
  }

}
