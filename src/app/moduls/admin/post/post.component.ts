import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from 'src/app/service/rest.service';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  data: any = []
  dataUser: any = []
  idTmp: any
  nameUser: string = ""
  activate: boolean = false
  dataEdit: any = []
  post = {
    id_user: "",
    title: "",
    autor: "",
    content: "",
    image: ""
  }
  env:string=""
  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",

    uploadAPI: {
      url: environment.BACK_URL + 'post/upload',

      headers: {

      },

    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Seleccionar archivo',
      resetBtn: 'Reset',
      uploadBtn: 'Subir',
      dragNDropBox: 'Arrastrar y soltar',
      attachPinBtn: 'Sube imagen ...',
      afterUploadMsg_success: '¡ Subido correctamente !',
      afterUploadMsg_error: '¡ Fallo en la subida !',
      sizeLimit: 'Tamaño máx.'
    }
  };

  constructor(private _http: RestService, private _data: DataService) { }



  ngOnInit() {
    this._http.get('autor').subscribe(
      res => {
        if (res) {
          this.data = res
          this.dataUser = this.data.data
        } else {
          console.log("Ups Ocurrio un Error");
        }
      }
    )
    this._data.dataObjectSource.subscribe(response => {
      this.dataEdit = response
      console.log("respose", this.dataEdit);
      this.post = {
        id_user: this.dataEdit.id_user,
        title: this.dataEdit.title,
        autor: this.dataEdit.autor,
        content: this.dataEdit.content,
        image: this.dataEdit.image
      }


    })
  }
  addPost() {
    if (this.dataEdit.id) {
      this._http.update('post/update', this.dataEdit.id, this.post).subscribe(
        response => {
          if (response) {
            location.reload()
          } else {
            console.log("Error!!");

          }
        }
      )
    } else {
      this._http.getOne('autor/user', this.post.id_user).subscribe(
        respose => {
          this.idTmp = respose
          let name = this.idTmp.data[0].name
          let surname = this.idTmp.data[0].surname
          this.nameUser = `${name} ${surname}`
          this.post.autor = this.nameUser
          this._http.post('post/create', this.post).subscribe(
            res => {
              if (res) {
                window.alert("se agrego post")
                location.reload();

              } else {
                console.log("Error!!");

              }
            }
          )

        }
      )

    }

  }
  docUpload(data: any) {
    this.post.image = data.body.image
  }

}
