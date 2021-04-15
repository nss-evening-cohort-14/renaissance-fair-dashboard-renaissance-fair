import firebase from 'firebase/app';
import 'firebase/auth';
import { createEvent } from '../helpers/data/eventsData';
import { createEventSouvenirsRelationship } from '../helpers/data/eventsSouvenirs';
import { createEventShowsRelationship } from '../helpers/data/eventsShows';

const eventsEvents = (e) => {
  e.preventDefault();
  const eventObject = {
    date: document.querySelector('#event-date').value,
    title: document.querySelector('#event-title').value,
    image: document.querySelector('#event-image').value,
    uid: firebase.auth().currentUser.uid
  };
  createEvent(eventObject).then((event) => {
    const eventKey = event.firebaseKey;
    const souvenirObject = {};
    const eventSouvenirArray = document.querySelector('#ul-souvenir').childNodes;
    eventSouvenirArray.forEach((element) => {
      console.warn(element.childNodes[1].checked);
      if (element.childNodes[1].checked) {
        // console.warn(element.childNodes[1].value);
        souvenirObject.event_firebaseKey = eventKey;
        souvenirObject.souvenir_firebaseKey = element.childNodes[1].value;
        createEventSouvenirsRelationship(souvenirObject).then(() => console.warn(souvenirObject));
      }
    });
    const showObject = {};
    const eventShowArray = document.querySelector('#ul-show').childNodes;
    eventShowArray.forEach((element) => {
      if (element.childNodes[1].checked) {
        showObject.event_firebaseKey = eventKey;
        showObject.show_firebaseKey = element.childNodes[1].value;
        createEventShowsRelationship(showObject).then(() => console.warn(showObject));
      }
    });
  });
};

export default eventsEvents;
