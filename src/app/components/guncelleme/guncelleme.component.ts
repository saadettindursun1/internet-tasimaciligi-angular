import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guncelleme',
  templateUrl: './guncelleme.component.html',
  styleUrls: ['./guncelleme.component.css']
})
export class GuncellemeComponent implements OnInit {

  uid: string;
  rol: string;
  constructor() { }

  ngOnInit(): void {

    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.rol = user.displayName;
  }

}
