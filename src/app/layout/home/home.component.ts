import { Component, OnInit } from '@angular/core';
import { ScriptLoader } from 'src/utils/script-injectable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 // Url="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.js";
ngOnInit(): void {
//  new ScriptLoader().load(this.Url);
}
}
