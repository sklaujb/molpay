import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';

function _window() : any {
   // return the global native browser window object
   return window;
}

@Injectable()
export class WindowRef {
   get nativeWindow() : any {
      return _window();
   }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public iab: InAppBrowser, public platform: Platform) {
    // this.platform = platform;
    // this.platform.ready().then(() => {
    //      console.log("PLATFORM READY IN PROVIDER")
    //  })

     var app = {
         initialize: function() {
           console.log("Intializing");
             this.bindEvents();
         },
         bindEvents: function() {
           console.log("Binding Events");
             document.addEventListener('deviceready', this.onDeviceReady, false);
             // app.receivedEvent('deviceready');
         },
         onDeviceReady: function() {
           console.log("Device Ready");
             app.receivedEvent('deviceready');
         },
         receivedEvent: function(id) {
             console.log("id: ",id);
             // MOLPay payment details
             var paymentDetails = {
                 // ------- SDK required data ----------
                 'mp_amount' : '10',
                 'mp_username' : 'api_SB_newdot',
                 // 'mp_username' : 'newdot@domain.com',
                 'mp_password' : 'api_tOd2201weN',
                 // 'mp_password' : '5R9A5uWW',
                 'mp_merchant_ID' : 'SB_newdot',
                 'mp_app_name' : 'newdot',
                 'mp_order_ID' : 'Test1',
                 'mp_currency' : 'MYR',
                 'mp_country' : 'MY',
                 'mp_verification_key' : 'a62b45541fe0782b9a40f35e7e4fb90a',
                 'mp_channel' : '',
                 'mp_bill_description' : 'Bill description',
                 'mp_bill_name' : 'Bill name',
                 'mp_bill_email' : 'newdot@domain.com',
                 'mp_bill_mobile' : '123456',
                 // 'mp_channel_editing' : false,
                 // 'mp_editing_enabled' : false,
                 // 'mp_transaction_id' : '', // Optional, required when mp_request_type is 'Status'
                 // 'mp_preferred_token' : '', // Optional, set the token id to nominate a preferred token as the default selection
                 // 'mp_request_type' : '', // Optional, set 'Status' when performing a transactionRequest
                 // 'mp_bin_lock' : ['414170', '414171'], // Optional for credit card BIN restrictions
                 // 'mp_bin_lock_err_msg' : 'Only UOB allowed', // Optional for credit card BIN restrictions
                 // 'mp_is_escrow' : '', // Optional for Escrow, put "1" to enable escrow
                 // 'mp_filter' : '0', // Optional for debit card only transactions
                 // 'mp_custom_css_url' : cordova.file.applicationDirectory + 'www/custom.css', // Optional for custom UI
                 // 'mp_is_recurring' : false, // Optional, set true to process this transaction through the recurring api, please refer the MOLPay Recurring API pdf
                 // 'mp_allowed_channels': ['credit', 'credit3'], // Optional for channels restriction
                 // 'mp_sandbox_mode': true, // Optional for sandboxed development environment, set boolean value to enable.
                 // 'mp_express_mode': true, // Optional, required a valid mp_channel value, this will skip the payment info page and go direct to the payment screen.
                 // 'mp_advanced_email_validation_enabled': true, // Optional, enable this for extended email format validation based on W3C standards.
                 // 'mp_advanced_phone_validation_enabled': true, // Optional, enable this for extended phone format validation based on Google i18n standards.
                 // 'mp_bill_name_edit_disabled': true, // Optional, explicitly force disable billing name edit.
                 // 'mp_bill_email_edit_disabled': true, // Optional, explicitly force disable billing email edit.
                 // 'mp_bill_mobile_edit_disabled': true, // Optional, explicitly force disable billing mobile edit.
                 // 'mp_bill_description_edit_disabled': true, // Optional, explicitly force disable billing description edit.
                 // 'mp_language': 'EN', // Optional, EN, MS, VI, TH, FIL, MY, KM, ID, ZH.
                 'mp_dev_mode': true // Optional, enable for online sandbox testing.
             };

             var molpayCallback = function (transactionResult) {
                 // console.log('molpayCallback transactionResult = '+transactionResult);
                 alert('molpayCallback transactionResult = '+transactionResult);
             };
             // console.log("window.molpay: ",window);
             // console.log("window.molpay: ",_window().molpay);

             _window().molpay.startMolpay(paymentDetails, molpayCallback);
             // window.molpay.startMolpay(paymentDetails, molpayCallback);
             // window.molpay.transactionRequest(paymentDetails, molpayCallback);
             // window.molpay.closeMolpay();
         }
     };

     platform.ready().then(() => {
         console.log("Platform is ready");
         app.initialize();
         app.receivedEvent('deviceready');
     });

  }


//   openBrowser() {
// 		const browser = this.iab.create('https://ionicframework.com/');
//   }
}

