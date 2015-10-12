/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var email;
 var app = {
    // Application Constructor
    initialize: function() {

     this.bindEvents();
   },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      app.receivedEvent('deviceready');

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       // alert(device.uuid);
       $(".device-id").html(device.uuid);
      

       window.plugins.DeviceAccounts.getEmail(function(accounts){
  // accounts is an array with objects containing name and type attributes


  //alert(accounts.length);
  $(".user-name").html(accounts);
  
  Insertdata(accounts);
      //alert('account registered on this device:'+accounts);

      window.plugins.socialsharing.available(function(isAvailable) {
  // the boolean is only false on iOS < 6
  if (isAvailable) {
  

    // now use any of the share() functions
  }
});

  //alert('account registered on this device:', accounts);
}, function(error){
  alert('Fail to retrieve accounts, details on exception:', error);
});



       var parentElement = document.getElementById(id);
       var listeningElement = parentElement.querySelector('.listening');
       var receivedElement = parentElement.querySelector('.received');

       listeningElement.setAttribute('style', 'display:none;');
       receivedElement.setAttribute('style', 'display:block;');

       console.log('Received Event: ' + id);


     }
   };

   app.initialize();
   function Insertdata(email)
   {


    var email_id= email;
    var deviceid= $(".device-id").html();



    calls();
  }