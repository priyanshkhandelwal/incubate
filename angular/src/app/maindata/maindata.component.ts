import { Component, OnInit } from '@angular/core';
import { DataService } from "../shared/data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-maindata',
  templateUrl: './maindata.component.html',
  styleUrls: ['./maindata.component.css']
})
export class MaindataComponent implements OnInit {

  isTrue: boolean = false
  data: any
  page: number = 1
  totalLength: any;

  constructor(public dataService: DataService, public router: Router) { }

  ngOnInit(): void {
  }

  getdata(){
    this.isTrue = true
    this.dataService.getdata().subscribe(
      res=>{
        this.data = res
        this.totalLength = this.data.length
      },
      err=>{
        console.log(err)
      }
    )
  }

}
