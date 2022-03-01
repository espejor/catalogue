import { Component, OnInit, Input } from '@angular/core';
import { Detail } from '../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() detail: Detail = {
    fromName: "",
    subject: "",
    date: "",
    id: 0,
    read: false
  };

  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
