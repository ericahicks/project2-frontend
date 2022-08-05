import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {

  saveNewUser: User = new User;

  


  constructor(private service: UserService) { }

  postUser(): void{
    this.service.postUser(this.saveNewUser).subscribe(data =>{
      console.log(data);
    });
  }

  // //save(): void {
  //   this.service.save(this.warehouseToSave).subscribe(data =>{
  //     console.log(data);
  //   });
  // }

  ngOnInit(): void {
  }
 

  // postUser(){

  //   const { value } = this.formValue;

  //     console.log(value);



  //   const postObj = {

     

  //     id: value.number,
  //   firstName: value.string,
  //   lastName: value.string,
  //   number: value.string,
  //   email: value.string,

  //   }

}

