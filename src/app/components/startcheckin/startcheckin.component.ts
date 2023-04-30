import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-startcheckin',
  templateUrl: './startcheckin.component.html',
  styleUrls: ['./startcheckin.component.css']
})
export class StartcheckinComponent {
reservationId:any;
constructor(private service:CheckinService,private router:Router){}

public onClick(id:number){
  this.service.getReservation(id).subscribe((res:any)=>{
    this.router.navigate(['/checkIn']);
    console.log(this.service.reservationData);   
  })
}
}
