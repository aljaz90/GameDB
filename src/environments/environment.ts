// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDCNSL9VLA24JVQSySAcVq0SbDN1CHsb4U",
    authDomain: "gamedb-2018.firebaseapp.com",
    databaseURL: "https://gamedb-2018.firebaseio.com",
    projectId: "gamedb-2018",
    storageBucket: "gamedb-2018.appspot.com",
    messagingSenderId: "943168966336"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
