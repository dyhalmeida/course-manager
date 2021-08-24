import { Component, OnInit } from "@angular/core";
import { ICourse } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: 'course-list.component.html',
})
export class CourseListComponent implements OnInit {

    courses: ICourse[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular Forms',
                imageUrl: '',
                price: 99.99,
                code: 'ABC-112345',
                duration: 120,
                rating: 5.4            
            },
            {
                id: 1,
                name: 'Angular HTTP',
                imageUrl: '',
                price: 45.99,
                code: 'ABC-112346',
                duration: 80,
                rating: 4            
            }
        ]
    }

}