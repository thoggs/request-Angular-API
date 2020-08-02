import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../services/crud.service';
import {Images} from '../../models/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  images: any;
  err: any;

  constructor( private crudService: CrudService ) {
    this.getter();
  }

  ngOnInit(): void {
  }
  getter(): any {
    this.crudService.getFotos().subscribe((data: Images) => {
      this.images = data;
    }, (error => {
      this.err = error;
    }));
  }
}
