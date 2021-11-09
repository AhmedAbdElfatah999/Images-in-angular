import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { toBase64 } from '../utilities/utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }
  //will show get the image information
  @Output() OnImageSelected =new EventEmitter();
  imgName :string;
  imgSize:number;
  imgType:any;
  ImageBase64 : string;
  ngOnInit(): void {
  }

  change(event)
  {
     if(event.target.files.length > 0)
     {
       //save the file
        const file: File =event.target.files[0];
        toBase64(file).then((Value:string)=> this.ImageBase64= Value);
       // this.OnImageSelected.emit(file.name);
        this.imgName=file.name;
        this.imgSize=file.size;
        this.imgType=file.type;

     }
  }
}
