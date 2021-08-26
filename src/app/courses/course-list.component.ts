import { Component, OnInit } from "@angular/core";
import { ICourse } from './course';
import { CourseService } from "./courses.service";

@Component({
    selector: 'app-course-list',
    templateUrl: 'course-list.component.html',
})
export class CourseListComponent implements OnInit {

    public filteredCourses: ICourse[] = [];

    private _courses: ICourse[] = [];
    private _filterBy: string = '';

    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses;
    }

    public set filter(value: string) {
        
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: ICourse) => {
            return course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
        });
            
    }

    public get filter() {
        return this._filterBy;
    }

}