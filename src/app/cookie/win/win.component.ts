import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent implements OnInit {

  win = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.win = this.route.snapshot.url[0].path === 'win';
  }

}
