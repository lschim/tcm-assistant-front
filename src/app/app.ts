import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrugsView } from './drugs-view/drugs-view';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DrugsView],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tcm-assistant-front');
}
