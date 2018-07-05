import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.css']
})
export class GamedetailsComponent implements OnInit {
  id: string;
  private sub: any;
  result;
  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      // In a real app: dispatch action to load the details here.
   });
    this.search()
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getApiUrl():string{
    var baseUrl='https://www.giantbomb.com/api/game';
    var apiKey='ad89fa0ba26ac9972d2312d08046f9c77a2d214e';
    console.log(this.id)
    var url=`${baseUrl}/${this.id}/?api_key=${apiKey}&format=jsonp`
    console.log(url)
    return url;
  }

  search(){
    var url = this.getApiUrl();
    this.http.jsonp(url, "json_callback").subscribe(result=>{
      this.result = result;
      console.log("*******************")
      console.log(this.result)
    });
  }

}
