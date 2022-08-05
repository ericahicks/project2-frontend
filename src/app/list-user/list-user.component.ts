import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private service: UserService) { 
    this.userList = [];
  }

  userList: User[];

  ngOnInit(): void {
    this.service.getUsers().subscribe((data) => {
      this.userList = data;
      console.log(this.userList);
    });


  }

}
