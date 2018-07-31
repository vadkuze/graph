import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  @Input() items: Array<any>;
  @Output() onItemSelected: EventEmitter<any> = new EventEmitter();
  names: Array<string> = ['Все вхождения'];
  currentCompany: string = this.names[0];

  categories: Array<string> = ['Все категории'];
  currentCategory: string = this.categories[0];
  balance: number = 0;
  monthBalance: number = 0;

  data: any;
  type: string = 'Line';
  options = {
     showArea: true,
     low: 0
  };

  activeBtn: boolean = false;
  constructor() { }

  ngOnInit() {
    if(this.items){
      this.getCurrentCategories();
      this.getCurrentCompany();      
      this.calcByCategories(this.items)
    }
  }

  onChangeCAT(){
    let tempCategory;
      if(this.currentCategory == this.categories[0])
        tempCategory = this.items;
      else
        tempCategory= this.items
            .filter((el) => el.category == this.currentCategory);

    this.calcByCategories(tempCategory)
  }

  onChangeCompany(){
    if(this.currentCompany != this.names[0])
      this.activeBtn = true;
    else
      this.activeBtn = false;    
  }

  open(){
    let item = this.items.find(el=> el.name == this.currentCompany)
    this.onItemSelected.emit(item)
  }

  getCurrentCategories(){
    this.items.forEach((el)=>{
      if(this.categories.indexOf(el.category) < 0)
        this.categories.push(el.category)
    });
  }
  getCurrentCompany(){
    this.items.forEach((el)=>{
      if(this.names.indexOf(el.name) < 0)
        this.names.push(el.name)
    });
  }

  calcByCategories(cs: Array<any>){
    this.resetData();
    cs.forEach(el =>{
      let week = el.weekStats;
      let index = 0;
        for(let key in week){
          this.data.series[0][index] += +week[key]
          ++index;
        }

        this.balance += el.balance;
        this.monthBalance += el.monthBalance;
    })
  }

  resetData(){
    this.data = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [
        [0, 0, 0, 0, 0, 0, 0]
      ]
    };
    this.balance = 0;
    this.monthBalance = 0;
  }
}