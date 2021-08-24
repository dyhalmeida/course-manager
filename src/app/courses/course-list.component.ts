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
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'ABC-112345',
                releaseDate: 'August, 24, 2021',
                duration: 120,
                rating: 5           
            },
            {
                id: 1,
                name: 'Angular HTTP',
                imageUrl: '/assets/images/http.png',
                price: 45.99,
                code: 'ABC-112346',
                releaseDate: 'August, 24, 2021',
                duration: 80,
                rating: 2.5            
            }
        ]
    }

}