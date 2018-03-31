import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchQuery: string = '';
  items: string[];
  tempitems: string[];
  finalitems: string[];
  ename : string;
  public typval:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    public toastCtrl  : ToastController,
    private storage: Storage,) {
    this.initializeItems();
    
  }

  initializeItems() {

    let options :any;
     let headers :any;
    //this.storage.get('name').then((val) => {
      //console.log('about', val);
      headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
       options ={"key" : "all"}
       this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
        console.log(data);
        this.items=data;
        this.tempitems=data;
        this.setItems();
         //this.sendNotification(JSON.stringify(data));
         
      },
      (error : any) =>
      {
        console.log(error);
         //this.sendNotification('Something went wrong!');
      });
   
  


    // this.items = [
    //   'Amsterdam',
    //   'Bogota'
    // ];
  }

  setItems(){
this.finalitems=this.tempitems;
console.log("in setItems"+JSON.stringify(this.finalitems));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  getItems(ev: any) {
    //this.typval=ev.target.value;
    // Reset items back to all of the items
    this.setItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.finalitems = this.finalitems.filter((item) => {
        return (item.ename.toLowerCase().indexOf(val.toLowerCase()) > -1);
        //return item;
      })
    }
  }

  itemClick(item){
    
    //this.viewctrl.dismiss();
          this.navCtrl.push(DetailPage,{
          'value':item
          });
    //console.log(item);
  }

}
