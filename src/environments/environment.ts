// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlGoty: 'http://localhost:5000/game-of-year-firebase/us-central1',
  firebase: {
    apiKey: "AIzaSyCHFIa5JTe7VainGRR83mOjeeJd8g67_ic",
    authDomain: "game-of-year-firebase.firebaseapp.com",
    databaseURL: "https://game-of-year-firebase.firebaseio.com",
    projectId: "game-of-year-firebase",
    storageBucket: "game-of-year-firebase.appspot.com",
    messagingSenderId: "163139495930",
    appId: "1:163139495930:web:39b9ecffeb3c563c98a643"
  }
  // firebase: {
  //   apiKey: '<your-key>',
  //   authDomain: '<your-project-authdomain>',
  //   databaseURL: '<your-database-URL>',
  //   projectId: '<your-project-id>',
  //   storageBucket: '<your-storage-bucket>',
  //   messagingSenderId: '<your-messaging-sender-id>'
  // }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
