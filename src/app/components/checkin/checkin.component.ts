import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})

export class CheckinComponent implements OnInit{
data:any;
noOfbags:any;
constructor(private service:CheckinService,private router:Router){}
  ngOnInit(){
       this.data=this.service.reservationData;
       console.log(this.data);
  }
  public checkIn( noOfbags : number){
    var request={
      "id":this.data.id,
      "checkIn":true,
      "numberOfBags":noOfbags
    }
    this.service.checkin(request).subscribe((res:any)=>{
      this.router.navigate(['/confirm']);
    });
    
  }
}
