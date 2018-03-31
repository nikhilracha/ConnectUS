import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {

  responseData : any;
  user: FormGroup;
  namee:any;
  emaill:any;
  qualification:any;
  pnoo:any;
  passd:any;
  public hideForm               : boolean = false;
  


  

  constructor(public navCtrl: NavController,
              public http       : HttpClient,
              public toastCtrl  : ToastController ) {

    
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
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      qualification: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required]),
      re_password: new FormControl('', [Validators.required,this.equalto('password')])
      });

      
      
      }
      onSubmit(){
        
        //this.navCtrl.push(WelcomePage,name);
        //console.log('Name:' + this.user.get('name').value);
        this.namee=this.user.get('name').value;
        this.emaill=this.user.get('email').value;
        this.pnoo=this.user.get('phone').value;
        this.qualification=this.user.get('qualification').value;
        console.log("qualification"+this.qualification);
        this.passd=this.user.get('password').value;
        this.createEntry(this.namee,this.emaill,this.pnoo,this.qualification,this.passd);
        /*this.navCtrl.push(WelcomePage,{
         'value':this.emaill
          });*/

      }


      createEntry(nam : string, em : string , pn : string , qual : string , pas : string) : void
   {
     console.log("inside create "+em);
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "signup", "name" : nam , "emaill" : em , "phone" : pn , "qualification" : qual , "password" : pas }// "description" : description },
          ;

      this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
        console.log(data);
         // If the request was successful notify the user
         this.hideForm   = true;
         this.sendNotification("successfully registered");
         this.navCtrl.setRoot(LoginPage);
         
         
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

   goLogin(){
    this.navCtrl.setRoot(LoginPage);
   }

}

