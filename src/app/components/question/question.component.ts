import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Question } from 'src/Models/Question';
import { Router } from '@angular/router';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  question : Question = { Id : 0, questionName: "", CorrectAnswer:"", WrongAnswer: "",UserId:"" };
  public questions: Question[] = [];

  post(question: any) {

    this.api.PostQuestion(question);
    this.router.navigate(["/"]);
  }

  constructor(private api: ApiService, private router: Router) {
    this.GetQuestions();
  }

  ngOnInit(): void {
    this.GetQuestions();
  }



  GetQuestions() {
    this.api.GetQuestion().subscribe(r => {
      this.questions = r as Question[];
    });

  }


}