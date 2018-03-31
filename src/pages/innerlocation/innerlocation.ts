import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
/**
 * Generated class for the InnerlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-innerlocation',
  templateUrl: 'innerlocation.html',
})
export class InnerlocationPage {
  lat:number;
  lng:number;
  plac:any;
  location:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation:Geolocation,private nativeGeocoder: NativeGeocoder) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat=resp.coords.latitude;
      this.lng=resp.coords.longitude;
      this.location=resp;
      console.log("fetched");
     }).catch((error) => {
       console.log('Error getting location', error);
       
     });



     this.nativeGeocoder.reverseGeocode(17.4700015, 78.7216569)
  .then((result: NativeGeocoderReverseResult) => 
                                              this.plac=JSON.stringify(result) 
                                                  /*console.log(JSON.stringify(result))*/)
  .catch((error: any) => console.log(error));


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InnerlocationPage');
  }

}
