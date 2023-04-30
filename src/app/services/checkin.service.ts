import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JsonpClientBackend } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  reservationUrl:string="http://localhost:8080/flightservices/reservations/";
  reservationData:any;
  constructor(private _http:HttpClient) { }

public getReservation(id:number):any{
    return this._http.get(this.reservationUrl+id).pipe(
      map((res:any)=>{
         this.reservationData=res;
      }
    )
    )
  }
public checkin(checkInRequest:any):any{
    return this._http.put(this.reservationUrl,checkInRequest).pipe(
      map((res:any)=>{
        return res;
      }
      )
    )
  }
}
