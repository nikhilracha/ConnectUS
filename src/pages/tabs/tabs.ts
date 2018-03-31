import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, ToastController, Searchbar } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = SearchPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  

  constructor(public navCtrl: NavController,private storage: Storage) {




  }


}
