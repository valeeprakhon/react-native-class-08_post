import * as firebase from 'firebase';
import '@firebase/firestore';
import FIREBASE_CONFIG from './config';

class Firestore {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp({projectId:'class08-9d23d'});
    } else {
      console.log('firebase apps already running...');
    }
    this.db = firebase.firestore();
  }

  getCar(getSuccess,getUnsuccess){
    let docRef = this.db.collection('Cars');
    docRef.get()
      .then(function (querySnapshot) {
        getSuccess(querySnapshot);
      })
      .catch(function (error) {
        getUnsuccess(error);
      });
  }

  addCar(car, addSuccess, addUnsuccess) {
    car.createdDate = firebase.firestore.FieldValue.serverTimestamp();
    this.db
      .collection('Cars')
      .add(car)
      .then(function (docRef) {
        addSuccess(docRef);
      })
      .catch(function (error) {
        addUnsuccess(error);
      });
  }

  updateCar(car,updateSuccess, updateUnsuccess){
    this.db.collection('Cars').doc(car.id).update({
      model:car.model,
      description:car.description
    })
    .then(function(){
      updateSuccess()
    })
    .catch(function(error){
      updateUnsuccess(error)
    });
  }

  deleteCar(id,deleteSuccess, deleteUnsuccess){
    this.db.collection('Cars').doc(id).delete()
    .then(function(){
      deleteSuccess()
    })
    .catch(function(error){
      deleteUnsuccess(error);
    });
  }
}
const firestore = new Firestore();
export default firestore;