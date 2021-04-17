import firebase from 'firebase/app';
import 'firebase/auth';
import {
  createEvent, updateEvent,
  getAllEvents, getSingleEvent, deleteEvent
} from '../helpers/data/eventsData';
import { createEventSouvenirsRelationship, deleteEventSouvenirs } from '../helpers/data/eventsSouvenirs';
import { createEventShowRelationship, deleteEventShows } from '../helpers/data/eventsShows';
import { createEventStaffRelationship, deleteEventStaff } from '../helpers/data/eventsStaff';
import { createEventFoodRelationship, deleteEventFood } from '../helpers/data/eventsFood';
import { showEvents } from '../components/showEvents';
import editEventForm from '../components/forms/editEventForm';
import { getAllEventItems } from '../helpers/data/eventsRelationships';

const eventsEvents = () => {
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
      if (element.childNodes[1].checked) {
        souvenirObject.event_firebaseKey = eventKey;
        souvenirObject.souvenir_firebaseKey = element.childNodes[1].value;
        createEventSouvenirsRelationship(souvenirObject);
      }
    });
    const showObject = {};
    const eventShowArray = document.querySelector('#ul-show').childNodes;
    eventShowArray.forEach((element) => {
      if (element.childNodes[1].checked) {
        showObject.event_firebaseKey = eventKey;
        showObject.show_firebaseKey = element.childNodes[1].value;
        createEventShowRelationship(showObject);
      }
    });
    const staffObject = {};
    const eventStaffArray = document.querySelector('#ul-staff').childNodes;
    eventStaffArray.forEach((element) => {
      if (element.childNodes[1].checked) {
        staffObject.event_firebaseKey = eventKey;
        staffObject.staff_firebaseKey = element.childNodes[1].value;
        createEventStaffRelationship(staffObject);
      }
    });
    const foodObject = {};
    const eventFoodArray = document.querySelector('#ul-food').childNodes;
    eventFoodArray.forEach((element) => {
      if (element.childNodes[1].checked) {
        foodObject.event_firebaseKey = eventKey;
        foodObject.food_firebaseKey = element.childNodes[1].value;
        createEventFoodRelationship(foodObject);
      }
    });
    getAllEvents().then((eventsArray) => showEvents(eventsArray));
  });
};

const updateExistingEvent = (eventId) => {
  const eventObject = {
    date: document.querySelector('#event-date').value,
    title: document.querySelector('#event-title').value,
    image: document.querySelector('#event-image').value,
    uid: firebase.auth().currentUser.uid
  };
  updateEvent(eventId, eventObject).then(() => {
    const souvenirObject = {};
    const eventSouvenirArray = document.querySelector('#ul-souvenir').childNodes;
    eventSouvenirArray.forEach((element) => {
      let count = element.childNodes[5].value;
      if (!count) {
        count = '0';
      }
      if (element.childNodes[1].checked) {
        souvenirObject.event_firebaseKey = eventId;
        souvenirObject.souvenir_firebaseKey = element.childNodes[1].value;
        souvenirObject.count = parseInt(count, 10);
        createEventSouvenirsRelationship(souvenirObject);
      }
    });
    const showObject = {};
    const eventShowArray = document.querySelector('#ul-show').childNodes;
    eventShowArray.forEach((element) => {
      if (element.childNodes[1].checked) {
        showObject.event_firebaseKey = eventId;
        showObject.show_firebaseKey = element.childNodes[1].value;
        createEventShowRelationship(showObject);
      }
    });
    const staffObject = {};
    const eventStaffArray = document.querySelector('#ul-staff').childNodes;
    eventStaffArray.forEach((element) => {
      if (element.childNodes[1].checked) {
        staffObject.event_firebaseKey = eventId;
        staffObject.staff_firebaseKey = element.childNodes[1].value;
        createEventStaffRelationship(staffObject);
      }
    });
    const foodObject = {};
    const eventFoodArray = document.querySelector('#ul-food').childNodes;
    eventFoodArray.forEach((element) => {
      let count = element.childNodes[5].value;
      if (!count) {
        count = '0';
      }
      if (element.childNodes[1].checked) {
        foodObject.event_firebaseKey = eventId;
        foodObject.food_firebaseKey = element.childNodes[1].value;
        foodObject.count = parseInt(count, 10);
        createEventFoodRelationship(foodObject);
      }
    });
    getAllEvents().then((eventsArray) => showEvents(eventsArray));
  });
};

const editEvent = (firebaseKey) => {
  getSingleEvent(firebaseKey).then((event) => {
    getAllEventItems(event.firebaseKey).then((obj) => editEventForm(event, obj));
  });
};

const clearEventData = (eventId) => {
  deleteEventFood(eventId);
  deleteEventStaff(eventId);
  deleteEventShows(eventId);
  deleteEventSouvenirs(eventId);
};

const submitUpdateEvent = (eventId) => {
  clearEventData(eventId);
  updateExistingEvent(eventId);
};

const deleteEventWithData = (eventId) => {
  clearEventData(eventId);
  return deleteEvent(eventId);
};

export {
  eventsEvents, editEvent,
  submitUpdateEvent, deleteEventWithData
};
