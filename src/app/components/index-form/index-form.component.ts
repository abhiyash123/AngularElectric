import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-form',
  templateUrl: './index-form.component.html',
  styleUrls: ['./index-form.component.css']
})
export class IndexFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  adminbutton(){
    this.router.navigate(['admin'])
  }

}
