import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import {App} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  d: string ="apl";

  
  constructor(public navCtrl: NavController,private storage: Storage) {

    
    
    
  }

  
  
 
  
  onLogout(){
    this.storage.set('status',false);
    this.navCtrl.parent.parent.setRoot(LoginPage);


  }
  

  
}
