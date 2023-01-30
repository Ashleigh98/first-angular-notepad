import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})

export class AppComponent { 
  displayVal: Array<string> = [];
  
  getValue(val: string){  
    //check if value is already in the array and alert user
    if(this.displayVal.includes(val)){
      alert('This item is already in your notepad');
      (document.getElementById('memo') as HTMLInputElement).value = ''
    }else{
      //push value in to array and clear the value input
      this.displayVal.push(val);
      (document.getElementById('memo') as HTMLInputElement).value = ''
    }
  }
  
  deleteItem(item:string){
    this.displayVal = this.displayVal.filter(e=> e !== item) //filter out the item clicked on
  }
}
