import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';

import { CommentStmt } from '@angular/compiler';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {

  responseData : any;
  user: FormGroup;
  emaill:any;
  passd:any;
  public hideForm               : boolean = false;
  logstatus   : boolean=false;

  constructor(public navCtrl: NavController,
              public http       : HttpClient,
              public toastCtrl  : ToastController,private storage: Storage ) {
                

  }

 



  
  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
    
    let input = control.value;
    
    let isValid=control.root.value[field_name]==input
    if(!isValid)
    return { 'equalTo': {isValid} }
    else
    return null;
    };
    }
    ngOnInit() {

      this.user = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      
      });

      
  }

  onSubmit(){

    this.emaill=this.user.get('email').value;
    this.passd=this.user.get('password').value;
    this.LoginEntry(this.emaill,this.passd);
    console.log(this.emaill,this.passd);
    this.storage.set('status',true);
     
     this.storage.get('status').then((sval) => {
      console.log('status updated', sval);
     });
     this.storage.set('userid',this.emaill);

   
  }

  LoginEntry( emLogin : string , pasLogin : string) : void
  {
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
      options 	: any		= { "key" : "Login", "emaill" : emLogin , "password" : pasLogin };
      console.log("inside entry"+emLogin,pasLogin);
  
  this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
  .subscribe((data : any) =>
  {
    console.log(data);
     // If the request was successful notify the user
     this.hideForm   = true;
     this.sendNotification(JSON.stringify(data));

     console.log(data);
     if(data=="Login successful!!")
     {
      this.navCtrl.setRoot(TabsPage);
     }
     else{
       console.log(data);
     }
     
     
  },
  (error : any) =>
  {
     this.sendNotification('Something went wrong!');
     console.log(error);
  });
}

onSignup(){
  this.navCtrl.setRoot(SignupPage);
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