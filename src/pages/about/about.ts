import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs/Observable';
import { DetailPage } from '../detail/detail';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocationPage } from '../location/location';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  d: string ="apl";

  items: string[];
  

  constructor(public navCtrl: NavController,
    public http       : HttpClient,
    public NP         : NavParams,
    public fb         : FormBuilder,
    public toastCtrl  : ToastController,private storage: Storage,
     public viewctrl : ViewController) {
   //this.getvalue();
      //this.fetchData();
   

  }


  ionViewWillEnter() : void{
    this.storage.get('userid').then((sval) => {
      console.log('user id is', sval);
    let options :any;
       let headers :any;
      //this.storage.get('name').then((val) => {
        //console.log('about', val);
        headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
         options ={"key" : "myapplied","userid":sval}
         this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
        .subscribe((data : any) =>
        {
          console.log(data);
          this.items=data;
           //this.sendNotification(JSON.stringify(data));
           
        },
        (error : any) =>
        {
          console.log(error);
           //this.sendNotification('Something went wrong!');
        });
      });


  }

  

  
  

}
