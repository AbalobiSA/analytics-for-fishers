//Sample code for Hybrid REST Explorer

function regLinkClickHandlers() {
  console.log("We got to the link click handlers");
    var $j = jQuery.noConflict();
    //var logToConsole = cordova.require("com.salesforce.util.logger").logToConsole;


    $j('#refresh-db-info').click(function() {
      console.log("Refresh Button Clicked!");
        // logToConsole("Refreshing DB Info CLICKED");
        forceClient.query("SELECT main_fisher_id__c, trip_date__c, landing_site__c FROM Ablb_Fisher_Trip__c", function (response){
          var $j = jQuery.noConflict();
          console.log("onSuccessSfdcContacts: received " + response.totalSize + " records");

          $j("#appendHere").html("")
          var ul = $j('<ul data-role="listview" data-inset="true" data-theme="a" data-dividertheme="a"></ul>');
          $j("#appendHere").append(ul);

          ul.append($j('<li data-role="list-divider">Salesforce Records: ' + response.totalSize + '</li>'));
          // $j.each(response.records, function(i, contact) {
          //     var newLi = $j("<li><a href='#'>" + (i + 1) + " - " + contact.Name + "</a></li>");
          //     ul.append(newLi);
          // });

          // $j("#div_sfdc_contact_list").trigger("create")
        }, onErrorSfdc);
    });

}


function onSuccessSfdcContacts(response) {

}


function onErrorSfdc(error) {
    //cordova.require("com.salesforce.util.logger").logToConsole("onErrorSfdc: " + JSON.stringify(error));
    console.log("onErrorSfdc: " + JSON.stringify(error));
    alert('Error getting sfdc contacts!');
}
