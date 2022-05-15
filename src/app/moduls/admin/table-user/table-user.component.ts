import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {
  dataUser: any = []
  userData: any = []

  constructor(
    private _http: RestService,
    private _data: DataService

  ) {

  }

  ngOnInit() {
    this.getUser()


  }

  getUser() {
    this._http.get('autor').subscribe(response => {
      if (response) {
        this.dataUser = response
        this.userData = this.dataUser.data
        console.log("llego la data del user", this.userData);
      } else {

      }

    })
  }

  deleteUser(id: string) {
    this._http.delete('autor/destroy', id).subscribe(response => {
      if (response) {

        location.reload()

      } else {
        console.log("Error!!");


      }
    })
  }
  editUser(item: any) {
    this._data.sendData(item)
  }


}
