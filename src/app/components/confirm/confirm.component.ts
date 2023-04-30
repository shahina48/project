import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
data:any;
noOfbags:any;
constructor(private service:CheckinService,private router:Router){}
  ngOnInit(){
       this.data=this.service.reservationData;
       console.log(this.data);
  }
}
