import { Component, EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
//usrdefined event creation
@Output() onMenuBtnClicked = new EventEmitter()


menubtnClicked(){
  //to occur an usedefined event
  this.onMenuBtnClicked.emit()
  setTimeout(()=>{
    window.dispatchEvent(new Event('resize'))},100);

}

}
