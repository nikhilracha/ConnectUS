import { Component } from '@angular/core';
import { NavController, Platform, ToastController,IonicPage, NavParams, ViewController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  
  districts: string ="North Sikkim";
  catg : string="All";
  isAndroid: boolean = false;
  public items:any;

  constructor(platform: Platform,
              public http: HttpClient,
              public toastCtrl  : ToastController,
              private storage: Storage,
              public navCtrl: NavController) {
    this.isAndroid = platform.is('android');
    this.storage.get('status').then((sval) => {
      console.log('status check', sval);
    });
  }

  ionViewWillEnter() : void
   {

    if(this.districts=="North Sikkim")
    {
     this.storage.remove('dname');
     //this.storage.clear();
     this.storage.set('dname','North Sikkim');
      console.log("this is nothsikkim tab");
      console.log("north tab update page cat"+this.catg);
      if(this.catg=="All"){
       console.log("this is  All tab in North Sikkim");
       let options :any;
       let headers :any;
      //this.storage.get('name').then((val) => {
        //console.log('about', val);
        headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
         options ={"key" : "locateall","disname":"North Sikkim"}
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
 
      
    }
    else if(this.districts=="South Sikkim"){
     this.storage.remove('dname');
     //this.storage.clear();
     this.storage.set('dname','South Sikkim');
      console.log("this is south sikkim tab");
      console.log("north tab update page cat"+this.catg);
 
      if(this.catg=="All"){
       console.log("this is  All tab in South Sikkim");
       let options :any;
       let headers :any;
      //this.storage.get('name').then((val) => {
        //console.log('about', val);
        headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
         options ={"key" : "locateall","disname":"South Sikkim"}
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
 
    }
    else if(this.districts=="East Sikkim"){
     this.storage.remove('dname');
    // this.storage.clear();
     this.storage.set('dname','East Sikkim');
      console.log("this is east sikkim tab");
      console.log("north tab update page cat"+this.catg);
 
      if(this.catg=="All"){
       console.log("this is  All tab in East Sikkim");
       let options :any;
       let headers :any;
      //this.storage.get('name').then((val) => {
        //console.log('about', val);
        headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
         options ={"key" : "locateall","disname":"East Sikkim"}
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
 
    }
    else if(this.districts=="West Sikkim"){
     this.storage.remove('dname');
     //this.storage.clear();
     this.storage.set('dname','West Sikkim');
      console.log("this is west sikkim tab");
      console.log("north tab update page cat"+this.catg);
 
      if(this.catg=="All"){
       console.log("this is  All tab in West Sikkim");
       let options :any;
       let headers :any;
      //this.storage.get('name').then((val) => {
        //console.log('about', val);
        headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
         options ={"key" : "locateall","disname":"West Sikkim"}
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
    }


   this.storage.get('dname').then((val) => {
    if(this.catg=="Health")
   {
    
     console.log("this is health tab in "+val);
    
   }
   else if(this.catg=="Environment"){
     console.log("this is Environment tab in "+val);

   }
   else if(this.catg=="All"){
    val="North Sikkim";
     console.log("this is  All tab in "+val);
   }
   else if(this.catg=="Social"){
     console.log("this is Social tab in "+val);
   }
   else if(this.catg=="Agriculture"){
    console.log("this is Agriculture tab in "+val);
  }
  else if(this.catg=="Education"){
    console.log("this is Education tab in "+val);
  }
  else if(this.catg=="Cultural"){
    console.log("this is Cultural tab in "+val);
  }
  });


  }



  selectupdate(){
    console.log("reset")
    this.catg="All";
    
  }

  itemClick(item){
    
    //this.viewctrl.dismiss();
          this.navCtrl.push(DetailPage,{
          'value':item
          });
    //console.log(item);
  }







  updatePage(districts){
    if(this.districts=="North Sikkim")
   {
    this.storage.remove('dname');
    //this.storage.clear();
    this.storage.set('dname','North Sikkim');
     console.log("this is nothsikkim tab");
     console.log("north tab update page cat"+this.catg);
     if(this.catg=="All"){
      console.log("this is  All tab in North Sikkim");
      let options :any;
      let headers :any;
     //this.storage.get('name').then((val) => {
       //console.log('about', val);
       headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
        options ={"key" : "locateall","disname":"North Sikkim"}
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

     
   }
   else if(this.districts=="South Sikkim"){
    this.storage.remove('dname');
    //this.storage.clear();
    this.storage.set('dname','South Sikkim');
     console.log("this is south sikkim tab");
     console.log("north tab update page cat"+this.catg);

     if(this.catg=="All"){
      console.log("this is  All tab in South Sikkim");
      let options :any;
      let headers :any;
     //this.storage.get('name').then((val) => {
       //console.log('about', val);
       headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
        options ={"key" : "locateall","disname":"South Sikkim"}
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

   }
   else if(this.districts=="East Sikkim"){
    this.storage.remove('dname');
   // this.storage.clear();
    this.storage.set('dname','East Sikkim');
     console.log("this is east sikkim tab");
     console.log("north tab update page cat"+this.catg);

     if(this.catg=="All"){
      console.log("this is  All tab in East Sikkim");
      let options :any;
      let headers :any;
     //this.storage.get('name').then((val) => {
       //console.log('about', val);
       headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
        options ={"key" : "locateall","disname":"East Sikkim"}
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

   }
   else if(this.districts=="West Sikkim"){
    this.storage.remove('dname');
    //this.storage.clear();
    this.storage.set('dname','West Sikkim');
     console.log("this is west sikkim tab");
     console.log("north tab update page cat"+this.catg);

     if(this.catg=="All"){
      console.log("this is  All tab in West Sikkim");
      let options :any;
      let headers :any;
     //this.storage.get('name').then((val) => {
       //console.log('about', val);
       headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
        options ={"key" : "locateall","disname":"West Sikkim"}
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
   }

  }

  updatePagecat(catg){
    this.storage.get('dname').then((val) => {
    if(this.catg=="Health")
   {
    
     console.log("this is health tab in "+val);
     let options :any;
     let headers :any;
    //this.storage.get('name').then((val) => {
      //console.log('about', val);
      headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
       options ={"key" : "locateupdate","disname":val,"cat":"health"}
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
   else if(this.catg=="Environment"){
     console.log("this is Environment tab in "+val);
     let options :any;
     let headers :any;
    //this.storage.get('name').then((val) => {
      //console.log('about', val);
      headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
       options ={"key" : "locateupdate","disname":val,"cat":"environment"}
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
   else if(this.catg=="All"){
     console.log("this is  All tab in "+val);
     let options :any;
     let headers :any;
    //this.storage.get('name').then((val) => {
      //console.log('about', val);
      headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
       options ={"key" : "locateall","disname":val}
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

   else if(this.catg=="Cultural"){
    console.log("this is  Cultural tab in "+val);
    let options :any;
     let headers :any;
    //this.storage.get('name').then((val) => {
      //console.log('about', val);
      headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
       options ={"key" : "locateupdate","disname":val,"cat":"cultural"}
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
  else if(this.catg=="Education"){
    console.log("this is  Education tab in "+val);
    let options :any;
     let headers :any;
    //this.storage.get('name').then((val) => {
      //console.log('about', val);
      headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
       options ={"key" : "locateupdate","disname":val,"cat":"education"}
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
  else if(this.catg=="Agriculture"){
    console.log("this is  Agriculture tab in "+val);

    let options :any;
     let headers :any;
    //this.storage.get('name').then((val) => {
      //console.log('about', val);
      headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
       options ={"key" : "locateupdate","disname":val,"cat":"agriculture"}
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

   else if(this.catg=="Social"){
     console.log("this is Social tab in "+val);
     let options :any;
     let headers :any;
    //this.storage.get('name').then((val) => {
      //console.log('about', val);
      headers 		= new HttpHeaders({ 'Content-Type': 'application/json' })
       options ={"key" : "locateupdate","disname":val,"cat":"social"}
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



}
