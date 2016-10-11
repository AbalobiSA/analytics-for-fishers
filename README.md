Analytics for Fishers
=======================
This is a hybrid local app, running on cordova, using the SalesForce App SDK.
More information on this can be found at the  [Salesforce Getting Started Guide](https://trailhead.salesforce.com/mobile_sdk_hybrid/mobilesdk_hybrid_getting_started).

-----
### Getting Started
This repo only contains the www folder and config files, as the compiled/build
folders are too large to upload. As such, you'll need to obtain them from
a privately hosted zip file.

- Clone this repo: `git clone https://somewhere.repo.com`
- Copy `platforms, plugins, hooks` folders from the zip file
- Rename `www/bootconfig-example.json` to `bootconfig.json`
- Add necessary `remoteAccessConsumerKey` and `oauthRedirectURI` to bootconfig file.

### Prerequisites
You'll need the following software
- Node.js
- Cordova 6.2.0
- Forcedroid (instructions below)
- Android Studio


    $ npm install -g cordova@6.2.0
    $ npm install -g forcedroid

Navigate into your project directory, then do:

    $ cordova telemetry off

### Building
You'll need to import the project into Android Studio. More on this can be
found at the [Salesforce Getting Started Guide](https://trailhead.salesforce.com/mobile_sdk_hybrid/mobilesdk_hybrid_getting_started).

### Important Notes
When you run cordova prepare after making some changes and you want to build on android, first go to:

     ../abalobi-analytics-for-fishers/platforms/android/AndroidManifest.xml

You'll need to delete the second ``<activity>..</activity>`` tag there to be able to
build in android studio, for some reason.
