var app = angular.module('demoApp', ["ngRoute"]);

app.controller('SimpleController', function ($scope) {
  $scope.customers = [
    { name: 'John Smith', city: "Phoenix" }
  ]
})


app.config(function ($routeProvider) {
    $routeProvider
      .when('/',
        {
          controller: 'SimpleController',
          templateUrl:'views/page1.html'
        })
      .when('/partial1',
        {
          controller: 'SimpleController',
          templateUrl:'views/page1.html'
        })
      .when('/partial2',
        {
          controller: 'SimpleController',
          templateUrl:'views/page2.html'
        })
      .otherwise({ redirectTo: '/' });

});





(function () {

    "use strict";

    /* Adding platform (ios/android) specific css */
    var platformStyle = document.createElement('link');
    platformStyle.setAttribute('rel', 'stylesheet');
    if (/Android/.test(navigator.userAgent)) {
        platformStyle.setAttribute('href', 'css/ratchet-theme-android.css');
    } else if (/iPhone/.test(navigator.userAgent)) {
        platformStyle.setAttribute('href', 'css/ratchet-theme-ios.css');
    }
    document.querySelector('head').appendChild(platformStyle);


    /* Wait until cordova is ready to initiate the use of cordova plugins and app launch */
    document.addEventListener("deviceready", function() {
        authenticateUser(showFishingInfo);

    }, false);

    /* Method to authenticate user with Salesforce Mobile SDK's OAuth Plugin */
    var authenticateUser = function(successHandler, errorHandler) {

        // Get salesforce mobile sdk OAuth plugin
        var oauthPlugin = cordova.require("com.salesforce.plugin.oauth");

        // Call getAuthCredentials to get the initial session credentials
        oauthPlugin.getAuthCredentials(
            // Callback method when authentication succeeds.
            function (creds) {
                // Create forcetk client instance for rest API calls
                var forceClient = new forcetk.Client(creds.clientId, creds.loginUrl);
                forceClient.setSessionToken(creds.accessToken, "v36.0", creds.instanceUrl);
                forceClient.setRefreshToken(creds.refreshToken);

                // Call success handler and handover the forcetkClient
                successHandler(forceClient);
            },
            function (error) {
                alert('Failed to authenticate user: ' + error);
            }
        );
    }
    /*==========================================================================
      Display Methods
    ===========================================================================*/

    /* This method will render a list of users from current salesforce org */
    var showUsersList = function(forceClient) {

        // fetchRecords(forceClient, function(data) {
        //     var users = data.records;
        //
        //     var listItemsHtml = '';
        //     for (var i=0; i < users.length; i++) {
        //         listItemsHtml += ('<li class="table-view-cell"><div class="media-body">' + users[i].Name + '</div></li>');
        //     }
        //
        //     document.querySelector('#users').innerHTML = listItemsHtml;
        // })
    }

    /* This method will trigger our custom query */
    var showFishingInfo = function(forceClient) {

        customQuery(forceClient, function(data) {
            var results = data.records;

            var listItemsHtml = '';
            for (var i=0; i < (results.length); i++) {
                listItemsHtml += (
                  '<li class="table-view-divider">Item: ' + (i+1) + '</li>'
                  + '<li class="table-view-cell"><div class="media-body">Main ID:&nbsp;<p>' + results[i].main_fisher_id__c + '</p></div></li>'
                  + '<li class="table-view-cell"><div class="media-body">Trip Date:&nbsp;<p>' + results[i].trip_date__c + '</p></div></li>'
                  + '<li class="table-view-cell"><div class="media-body">Landing Site:&nbsp;<p>' + results[i].landing_site__c + '</p></div></li>'
                );
            }

            document.querySelector('#users').innerHTML = listItemsHtml;
        })
    }
    /*==========================================================================
      SQL Operations
    ===========================================================================*/

    /* This method will fetch a list of user records from salesforce.
    Just change the soql query to fetch another sobject. */
    var fetchRecords = function (forceClient, successHandler) {
        var soql = 'SELECT Id, Name FROM User LIMIT 10';
        forceClient.query(soql, successHandler, function(error) {
            alert('Failed to fetch users: ' + error);
        });
    };

    /* Custom query to display on a second page */
    var customQuery = function (forceClient, successHandler) {
        var soql = 'SELECT main_fisher_id__c, trip_date__c, landing_site__c FROM Ablb_Fisher_Trip__c';
        forceClient.query(soql, successHandler, function(error) {
            alert('Failed to fetch fishing data: ' + error);
        });
    };

})();
