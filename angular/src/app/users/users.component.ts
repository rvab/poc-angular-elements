import { Component, Inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: any[] = [];
  email: string = '';

  constructor(@Inject('$stateParams') private $stateParams: any,private userService: UserService) {}

  ngOnInit() {
    this.email = this.$stateParams.email;
    this.userService.getUsers().pipe(
      catchError((error) => 
        throwError(() => error)
      )
    ).subscribe((response: any) => {
      this.users = response['data']
    })
  }

}
