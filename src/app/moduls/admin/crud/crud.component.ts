import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  userForm = {
    name: "",
    surname: ""
  }
  dataEdit: any = []

  constructor(
    private _http: RestService,
    private _data: DataService
  ) { }

  ngOnInit() {
    this._data.dataObjectSource.subscribe(response => {
      this.dataEdit = response
      this.userForm = {
        name: this.dataEdit.name,
        surname: this.dataEdit.surname
      }
    })
  }

  addUser() {
    if (this.dataEdit.id) {
      this._http.update('autor/update', this.dataEdit.id, this.userForm).subscribe(
        response => {
          if (response) {
            location.reload()
          } else {
            console.log("Error!!");

          }
        }
      )


    } else {
      this._http.post('autor/create', this.userForm).subscribe(response => {
        if (response) {
          console.log("se agrego el uuario");
          location.reload()
        } else {
          console.log("no se agrego el usuario");
        }
      })
    }

  }


}
