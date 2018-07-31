import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../shared/companies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'My Application from Angular 6';

  currentData: any;
  constructor( private cs: CompaniesService) { }

  ngOnInit() {
    this.cs.getCompanies()
    .subscribe(
      (res)=> {
        this.currentData = res['companies'];
        this.currentData.filter((el)=> el.monthBalance > 0); 
      },
      (err)=> console.log(err)
      )
  }

  selectHandler(event){
    console.log('selected item: ', event.id)
  }
}