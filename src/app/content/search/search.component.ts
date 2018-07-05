import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query;
  result;
  constructor(private http: HttpClient) { }

  getApiUrl():string{
    var baseUrl='https://www.giantbomb.com/api/search';
    var apiKey='ad89fa0ba26ac9972d2312d08046f9c77a2d214e';
    
    var url=`${baseUrl}/?api_key=${apiKey}&format=jsonp&resources=game&query=${this.query}`
    return url;
  }

  ngOnInit() {
  }
  search(){
    console.log(this.query)
    var url=this.getApiUrl();
    this.http.jsonp(url, "json_callback").subscribe(result=>{
      this.result = result;
      console.log("*******************")
      console.log(this.result)
      this.query = "";
    });
  }

}
