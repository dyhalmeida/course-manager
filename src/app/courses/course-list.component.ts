import { Component, OnInit } from "@angular/core";
import { ICourse } from './course';
import { CourseService } from "./courses.service";

@Component({
    selector: 'app-course-list',
    templateUrl: 'course-list.component.html',
})
export class CourseListComponent implements OnInit {

    courses: ICourse[] = [];

    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll();
    }

}