import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { RestService } from 'src/app/service/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-squeleton',
  templateUrl: './squeleton.component.html',
  styleUrls: ['./squeleton.component.css']
})
export class SqueletonComponent implements OnInit {
  dataPost: any
  post: any
  env:string=""

  constructor(private _http: RestService, private _data: DataService) {

  }

  ngOnInit() {
    this.env = environment.BACK_URL
    this._http.get('post').subscribe(res => {
      if (res) {
        this.dataPost = res
        console.log("data", this.dataPost[0]);
        this.post = this.dataPost[0]
        console.log("post", this.post)
      } else {
        console.log("Error !!");


      }
    })

  }
  deletePost(id: string) {
    this._http.delete('post/destroy', id).subscribe(response => {
      if (response) {

        location.reload()

      } else {
        console.log("Error!!");


      }
    })
  }

  editPost(item: any) {
    this._data.sendData(item)

  }

}
