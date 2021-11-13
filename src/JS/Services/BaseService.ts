// import { FirebaseApp, initializeApp } from "@firebase/app";
// import { Firestore, getFirestore } from "@firebase/firestore";
// import { config } from "JS/Config";
// import { FirebaseStorage, getStorage } from "firebase/storage";

// export class BaseService {
//   protected firebaseApp: FirebaseApp;
//   protected db: Firestore;
//   protected storage: FirebaseStorage;

//   constructor() {
//     this.firebaseApp = initializeApp({
//       apiKey: config.firebase.apiKey,
//       appId: config.firebase.appId,
//       authDomain: config.firebase.authDomain,
//       databaseURL: config.firebase.databaseURL,
//       measurementId: config.firebase.measurementId,
//       messagingSenderId: config.firebase.messagingSenderId,
//       projectId: config.firebase.projectId,
//       storageBucket: config.firebase.storageBucket,
//     });
//     this.db = getFirestore(this.firebaseApp);
//     this.storage = getStorage(this.firebaseApp);
//   }
// }
export {};
