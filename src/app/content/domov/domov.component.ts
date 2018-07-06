import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-domov',
  templateUrl: './domov.component.html',
  styleUrls: ['./domov.component.css']
})
export class DomovComponent implements OnInit {
  result_last;
  result_popular;
  result_rated;
  
  getRatedGame(){
    var url=this.getApiUrl("&sort=number_of_user_reviews:desc");
    this.http.jsonp(url, "json_callback").subscribe(result=>{
      this.result_rated = result;
      console.log("//////////////RATED///GAME//////////////////")
      console.log(this.result_rated)
    });
  }
  
  getPopularGame(){
    var url=this.getApiUrl("");
    this.http.jsonp(url, "json_callback").subscribe(result=>{
      this.result_popular = result;
      console.log("------------POPULAR---GAME----------------")
      console.log(this.result_popular)
    });
  }

  
  constructor(private http: HttpClient) {
    this.getLastGame()
    this.getPopularGame()
    this.getRatedGame()
   }

  getApiUrl(params:string):string{
    var baseUrl='https://www.giantbomb.com/api/games';
    var apiKey='ad89fa0ba26ac9972d2312d08046f9c77a2d214e';
    
    var url=`${baseUrl}/?api_key=${apiKey}&format=jsonp${params}`
    return url;
  }
  getLastGame(){
    var url=this.getApiUrl("&sort=original_release_date:desc");
    this.http.jsonp(url, "json_callback").subscribe(result=>{
      this.result_last = result;
      console.log("*********LAST**GAME**********")
      console.log(this.result_last)
    });
  }


  ngOnInit() {
  }

}
