import { Component, Input } from '@angular/core';
import { Course } from '@monorepo-angular-20/utils-common';

@Component({
  selector: 'shared-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCardComponent {
  @Input({ required: true }) course!: Course;
  @Input() showActions = true;
}
