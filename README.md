Analytics for Fishers
=======================
This is a hybrid local app, running on cordova, using the SalesForce App SDK.
More information on this can be found at the  [Salesforce Getting Started Guide](https://trailhead.salesforce.com/mobile_sdk_hybrid/mobilesdk_hybrid_getting_started).

-----
### Getting Started
This repo only contains the `www` folder and `config` files, as the compiled/build
folders are too large to upload. As such, you'll need to obtain them from
a privately hosted zip file.

- Clone this repo: `git clone https://github.com/poetic/ember-cli-cordova.git`
- Copy `platforms, plugins, hooks` folders [from this zip file](https://www.dropbox.com/s/4jnvhhvy4zi0dpn/abalobi-analytics-for-fishers.zip?dl=1)
- Rename `www/bootconfig-example.json` to `bootconfig.json`
- Add necessary `remoteAccessConsumerKey` and `oauthRedirectURI` to bootconfig file.
- Import the `platforms/android` folder into a new Android Studio project
- Go into Android Studio settings and disable `Instant Run`.

> DO NOT UPDATE GRADLE!!! If you accidentally update gradle you'll have to delete `platforms, plugins, hooks` folders and re-import them from the zip file.

### Prerequisites
You'll need the following software
- Node.js
- Cordova 6.2.0 (Explicitly this version, uninstall newer versions)
- Forcedroid (instructions below)
- Android Studio

You'll need to install these:

    $ npm install -g cordova@6.2.0
    $ npm install -g forcedroid

Navigate into your project directory, then do:

    $ cordova telemetry off

### Building
You'll need to import the project into Android Studio. More on this can be
found at the [Salesforce Getting Started Guide](https://trailhead.salesforce.com/mobile_sdk_hybrid/mobilesdk_hybrid_getting_started). However, as a rough guide,

    $ cordova prepare

### Important Notes
When you run `cordova prepare` after making some changes and you want to build on android, first go to:

     ../abalobi-analytics-for-fishers/platforms/android/AndroidManifest.xml

You'll need to delete the second ``<activity>..</activity>`` tag there to be able to
build in android studio, for some reason. It should be a single line.

Then open android studio, and build.
