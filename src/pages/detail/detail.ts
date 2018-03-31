import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http'; 
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import {  ToastController, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public items:any[];
  disableButton;
  dataa:any = {};
  info

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http:HttpClient,
               public toastCtrl  : ToastController,
               private storage: Storage) {
    this.info=this.navParams.get('value');
    //this.getData();
    this.getDetail();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DetailPage');
  }

  getData(){
    var url='http://www.edudesk.co.in/edudesk/app/item.php';
    let data : Observable<any> = this.http.get(url);
    data.subscribe(result =>{
      this.items=result;
      console.log(result);
    }
    )
  }

  getDetail(){
    let options :any;
     let headers :any;
    console.log('about detail', this.info);
      headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
       options ={"key" : "detail","name":this.info}
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
         this.sendNotification('Something went wrong!');
      });
  }
  sendNotification(message : string)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 3000
      });
      notification.present();
   }


   itemClick(item){
    
    this.storage.get('userid').then((sval) => {
      console.log('user id is', sval);
      console.log(item);


      let options :any;
     let headers :any;
    console.log('about detail', this.info);
      headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
       options ={"key" : "apply","eventid":item,"userid":sval,"status":"pending"}
       this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
        console.log(data);
        this.items =Array.of(data);
         this.sendNotification(JSON.stringify(data));
         //this.navCtrl.setRoot(HomePage);
         this.getDetail();         
      },
      (error : any) =>
      {
        console.log(error);
         this.sendNotification('Something went wrong!');
      });
      this.disableButton = true;
     });
    

   /* 
    */




  }



}
