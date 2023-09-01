import { Component,OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgFor } from '@angular/common';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  
})

export class GalleryComponent implements OnInit  {
tiles:Tile[]=[];
jmCol=4;
ngOnInit(): void {

  this.tiles = [
    {text: 'https://images.pexels.com/photos/746111/pexels-photo-746111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cols: 1, rows: 1},
    {text: 'https://images.pexels.com/photos/4094742/pexels-photo-4094742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cols: 1, rows: 1},
    {text: 'https://images.pexels.com/photos/10294661/pexels-photo-10294661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cols: 1, rows: 1},
    {text: 'https://images.pexels.com/photos/3765594/pexels-photo-3765594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cols: 1, rows: 1},
    {text: 'https://images.pexels.com/photos/8889485/pexels-photo-8889485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cols: 1, rows: 1},
    {text: 'https://images.pexels.com/photos/13559223/pexels-photo-13559223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cols: 1, rows: 1},
    {text: 'https://images.pexels.com/photos/7380608/pexels-photo-7380608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cols: 1, rows: 1},
    {text: 'https://images.pexels.com/photos/10857675/pexels-photo-10857675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cols: 1, rows: 1},
    {text: 'https://images.pexels.com/photos/1379194/pexels-photo-1379194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cols: 1, rows: 1},
    {text: 'https://images.pexels.com/photos/4621292/pexels-photo-4621292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cols: 1, rows: 1},
    {text: 'https://images.pexels.com/photos/4065333/pexels-photo-4065333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cols: 1, rows: 1},
    {text: 'https://images.pexels.com/photos/1624881/pexels-photo-1624881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cols: 1, rows: 1},
  
  ];
 
}

  
}
