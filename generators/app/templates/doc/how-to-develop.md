# Plugin Development Guide

## Getting started

1- Clone the project
  ```
  git clone https://github.com/<me>/<%= projectName %>
  ```

2- Install dependencies
  ```
  npm install -g weex-toolkit
  weex update weex-devtool@latest
  npm install
  ```
  For more detail, see [Setup Development Environment](https://weex.apache.org/guide/set-up-env.html).

## Project structure

The project structure is:
```
     ├── android   (Android native code project)
     │    └── ...
     ├── ios   (iOS native code project)
     │    └── ...
     ├── js   (html5 project)
     │    └── ...
     ├── examples   (sample app)
     │    └── index.vue
     ├── playground   (sample projects to test the plugin)
     │    ├── android
     │    ├── browser
     │    └── ios
     ├── <%= iOSProjectName %>.podspec   (iOS .podspec)
     ├── package.json
     ├── README.md
  ```

The `examples` directory contains a weex app that you can use to test your plugin. This test app will be loaded from the playground apps that are installed in the `playground` folder.

## Web

### Developing and testing with the playground app
1. Build the example weex app in `examples/index.vue`:
  ```

  ```
  Webpack will be listening for changes in `examples/index.vue` and re-build the example app for you. The app will be served in the port 12580 (e.g. http://localhost:12580).

2. Edit the plugin JavaScript/HTML/CSS code under the `js` folder. Refresh the test app to update the plugin in the playground app.

### Extending Web functionality
See [Extend Web Render](https://weex.apache.org/guide/guide/extend-web-render.html).

## Android

### Developing and testing with the playground app
1. Build the example weex app in `examples/index.vue`:
  ```
  npm run start:native
  ```
  Webpack will be listening for changes in `examples/index.vue` and re-build the example app for you.

2. Open the android project under `playground/android` with Android Studio.

  The native plugin code will be linked as a gradle dependency. You can develop and test the plugin directly from Android Studio. You can also use `weex debug` to debug the playground app.

### Extending native functionality
See [Extend Android](https://weex.apache.org/guide/extend-android.html).

## iOS

### Developing and testing with the playground app
1. Build the example weex app in `examples/index.vue`:
  ```
  npm run start:native
  ```
  Webpack will be listening for changes in `examples/index.vue` and re-build the example app for you.

2. Open the iOS playground app and install the dependencies:
  ```
  cd playground/ios
  pod install
  ```
3. Open `WeexDemo.xcworkspace` in Xcode.

  The native plugin code will be linked as cocoa pod. You can develop and test the plugin directly from Xcode. You can also use `weex debug` to debug the playground app.

### Extending native functionality
See [Extend iOS](https://weex.apache.org/guide/extend-ios.html).

### Publishing the plugin to the cocapods repository
1. Edit the `<%= iOSProjectName %>.podspec` generated in the root of the plugin project.
2. Check the correctness of the iOS plugin:
  ```
  pod spec lint --allow-warnings
  ```
3. Publish to cocoapods repository:
  ```
  pod trunk push --allow-warnings
  ```

## Publish the plugin in the weex market
You can publish to the [Weex Market](https://weex.apache.org/tools/market.html) with the simple command:
```
weex plugin publish
```

