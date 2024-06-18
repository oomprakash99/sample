import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatServiceService } from '../service/cat-service.service';
import { CommonModule } from '@angular/common';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'sample';
  res!:any;
  constructor(public catservice:CatServiceService){}
  
  callit(){
    this.catservice.call();
    this.res=this.catservice.res;
    // console.log(this.res);
    return this.res;
  }

}

