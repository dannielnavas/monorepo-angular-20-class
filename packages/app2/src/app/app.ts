import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiShared } from '@monorepo-angular-20/ui-shared';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [NxWelcome, RouterModule, UiShared],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'app2';
}
