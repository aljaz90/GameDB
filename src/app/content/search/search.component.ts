import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  querry;
  constructor() { }

  ngOnInit() {
  }
  search(){
    console.log(this.querry)
    fetch('https://api-endpoint.igdb.com/games/?search=Halo',{
      headers: {
        "Accept": "application/json",
        "user-key": "2eba42ae20fcc61c3ab4e3917ea36856"
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
  }

}
