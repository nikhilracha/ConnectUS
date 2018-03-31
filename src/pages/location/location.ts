import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AboutPage } from '../about/about';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  public form                   : FormGroup;
  public technologyName         : any;
  //public technologyDescription  : any;
  public isEdited               : boolean = false;

  public hideForm               : boolean = false;

   public pageTitle              : string;

   public recordID               : any      = null;

   ;




     // Initialise module classes
     constructor(public navCtrl    : NavController,
      public http       : HttpClient,
      public NP         : NavParams,
      public fb         : FormBuilder,
      public toastCtrl  : ToastController,private storage: Storage)
     {     

          // Create form builder validation rules
              this.form = fb.group({
              "name"                  : ["", Validators.required],
              //"description"           : ["", Validators.required]
                                   });
                                   
     }


     ionViewWillEnter() : void
   {
      this.resetFields();

      if(this.NP.get("record"))
      {
         this.isEdited      = true;
         this.selectEntry(this.NP.get("record"));
         this.pageTitle     = 'Amend entry';
      }
      else
      {
         this.isEdited      = false;
         this.pageTitle     = 'Create entry';
      }
   }

   resetFields() : void
   {
      this.technologyName           = "";
      //this.technologyDescription    = "";
   }

   selectEntry(item : any) : void
   {
      this.technologyName        = item.name;
     // this.technologyDescription = item.description;
      this.recordID              = item.id;
   }



   saveEntry() : void
   {
      let name          : string = this.form.controls["name"].value;
          //,description   : string    = this.form.controls["description"].value;
         // console.log(name);
         
     this.storage.set('name',name);
     console.log("location saved");

      
         this.createEntry(name);//, description);
      
   }

   resetLocation(){
    this.storage.clear();
    console.log("location reset successful");
   }

   createEntry(name : string):void//, description : string) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "locate", "name" : name}// "description" : description },
          ;

      this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
        console.log(data);
         // If the request was successful notify the user
         this.hideForm   = true;
         this.sendNotification(JSON.stringify(data));
         this.navCtrl.setRoot(AboutPage);
         
      },
      (error : any) =>
      {
         this.sendNotification('Something went wrong!');
         console.log(error);
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




