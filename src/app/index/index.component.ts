import { Component, OnInit } from '@angular/core';
import { Url } from '../url';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  urls: Url[] = [
    {
      original: "google.com",
      short: "shorten.ed"
    },
    {
      original: "test.com",
      short: "short.ly"
    },
    {
      original: "twitter.com",
      short: "shorturl.com"
    }
  ];

  constructor() { }


  ngOnInit() {
  }

}
