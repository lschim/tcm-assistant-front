import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrugViewComponent } from "./drug-view/drug-view";
import { DrugApi } from './core/api/drug.api';
import { Drug } from './core/models/drug.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DrugViewComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  constructor(private drugApi: DrugApi) {}
  protected readonly title = signal('tcm-assistant-front');
  protected drug = signal<Drug>({"id" :-1, "name" : ""});

  ngOnInit(): void {
    const id = 1;
    this.drugApi.getById(id).subscribe({
      next: (d) => this.drug.set(d),
      error: (err) => console.error(err)
    });
  }
}
