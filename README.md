# OVERVIEW

The purpose of this project is to demonstrate successful collaboration on a full-cycle CRUD app that utilizes a Firebase Realtime Database. This app is a dashboard for Renaissance Faire event planners to create, update, and delete events, food vendors, souvenir vendors, and festival staff. If the user does not provide authentication, they are only able to see the faire information, but do not have the ability to manipulate data.
# FEATURES

1. The user can create new Shows (Entertainment), Souvenirs (souvenirs), Food (Feasts), and Staff (Court).
2. The user can read the existing data and see the shows, souvenirs, food, and staff that currently exist in the database.
3. The user can update the aforementioned objects and see the page update in realtime.
4. The user can delete those objects from the dashboard, which then deletes the data from the Firebase database.
5. The user can either login with Google to make changes to the data or skip login to access the read-only view.
6. The user can navigate through a Lord of the Rings inspired app named "FreeLancer."
# GITHUB KANBAN PROJECT

https://github.com/nss-evening-cohort-14/renaissance-fair-dashboard-renaissance-fair/projects/1
# WIREFRAMES + ERD

- Canva: https://bit.ly/2P1skp2

- ERD: https://dbdiagram.io/d/604d1efbfcdcb6230b24029b
# COLOR PALETTE

![shire palette](https://user-images.githubusercontent.com/67122062/111388953-2e8e2180-867e-11eb-8c0c-6f4b18d0abc9.png)
# CONTRIBUTORS

@jrobinson0529
@chiestroud
@katherinevfry
@hmparsons-sde

Product Owner: @drteresavasquez
# DEPLOYED NETLIFY APP

https://renfaire.netlify.app/
# LOOM VIDEOS

- Shows Page: https://www.loom.com/share/7ea3fc112b7b438096629850f45bb07b
- Souvenirs Page: https://www.loom.com/share/cf40062f54c14143ab94d5c32e732e66
- Staff Page: https://www.loom.com/share/89929de9cf9546799e14df43ec38654f
- Food Page: https://www.loom.com/share/8ee4dc438d93422e89da2c5b161264e6

## Description
### Week 1:
Welcome to FreeLancer the worlds go to organizer of Renaissance Fairs. Now that your company has proven its worth at staffing all sorts of different Renaissance events the owners have decided to come out of the dark ages and build one of those **FANCY** things on the interwebs.

Your task is to create a dashboard for the owners to keep track of the Food, Souvenirs, Shows, and Staff they have available across all locations.  They should be able to perform full CRUD on each of those 4 topics.  Additionally they should be able to authenticate into the application - if they are not authenticated the website should perform READ only operations.

The owners of FreeLancer are expecting to see some great branding but they aren't sure what they want so make it flashy and make it remind them about why they fell in love with Renaissance Fairs in the first place.


### Week 2:
The owners of FreeLancer were very pleased with the results of V1 of their website but didn't have enough money to continue paying the same developers so they hired you.  Now that they are able to perform full CRUD on Food, Souvenirs, Shows, and Staff they would like to be able to bring all the modules together and create events that get Food, Souvenirs, Shows, and Staff assigned to them.  They would also like to be able to do some financial reporting and graphing to easily visualize how much revenue they are bringing in both per event and for all events.  This application will mainly be used by the companies event planners.

# Mentor
Zoe

## Week 1
### Week 1 Requirements
* Authenticate in order to perform any actions (CUD)
* Food Module
* Souvenirs Module
* Shows Module
* Staff Module
* Well styled branded website

### Week 1 User Stories
#### Authentication
As a user, when I am unauthenticated I should be able to see the dashboard (Read only)
As a user, when I am authenticated I should be able to perform all actions on the dashboard (full CRUD).
As a user I should be able to login via google.
As a user I should be able to logout.

#### Shows
As a user, I should be able to add possible shows to my Renaissance Fair.
As a user, I should be able to see all possible shows at my Renaissance Fair.
As a user, I should be able to edit my spellin' mistakes on shows.
As a user, I should be able to delete a crappy show from my Renaissance Fair

#### Souvenirs
As a user, I should be able to add possible Souvenirs to my Renaissance Fair.

As a user, I should be able to see all possible Souvenirs at my Renaissance Fair.

As a user, I should be able to edit my spellin' mistakes on Souvenirs.

As a user, I should be able to delete a crappy Souvenir from my Renaissance Fair.

#### Staff
As a user, I should be able to add possible Staff to my Renaissance Fair.

As a user, I should be able to see all possible Staff at my Renaissance Fair.

As a user, I should be able to edit my spellin' mistakes on Staff.

As a user, I should be able to delete a crappy Staff from my Renaissance Fair.

#### Foods
As a user, I should be able to add possible Foods to my Renaissance Fair.

As a user, I should be able to see all possible Foods at my Renaissance Fair.

As a user, I should be able to edit my spellin' mistakes on Foods.

As a user, I should be able to delete a crappy Food from my Renaissance Fair.

## Week 2
### Description:
The owners of FreeLancer were very pleased with the results of V1 of their website but didn't have enough money to continue paying the same developers so they hired you.  Now that they are able to perform full CRUD on Food, Souvenirs, Shows, and Staff they would like to be able to bring all the modules together and create events that get Food, Souvenirs, Shows, and Staff assigned to them.  They would also like to be able to do some financial reporting and graphing to easily visualize how much revenue they are bringing in both per event and for all events.  This application will mainly be used by the companies event planners.

### Week 2 Requirements
* Authenticated user is the Event planner
* Event Module
* Financial Reporting
* Graphing

### Week 2 User Stories
#### Events
As a user, I should be able to add Renaissance Fair Events.

As a user, I should be able to add Staff to an Event I have created.

As a user, I should be able to add Food to an Event I have created.

As a user, I should be able to add Shows to an Event I have created.

As a user, I should be able to delete Souvenirs from an Event I have created.

As a user, I should be able to delete Staff from an Event I have created.

As a user, I should be able to delete Food from an Event I have created.

As a user, I should be able to delete Shows from an Event I have created.

As a user, I should be able to delete Souvenirs from an Event I have created.

As a user, I should be able to see(READ) entire Event with all the Staff, food, Shows, and Souvenirs.

#### Authentication
As a user, when I am logged in I should have access to an events dashboard.

As a user, when I am logged out I should NOT have access to an events dashboard.

As a user, when I am on the Events page I should only be able to modify or delete events I have created

#### Financial Reporting
As a user, I should be able to see a detail page for a specific event.

As a user, I should be able to see financial reporting broken up per module (Food, Shows, Souvenirs, Staff) for a specific event.

As a user, I should be able to see financial totals broken up per module (Food, Shows, Souvenirs, Staff) for a specific event.

As a user, I should be able to see the total cost of a specific event.

As a user, I should be able to filter a list of all costs for all modules by module name or by price range

#### Graphing
As a user, I would like to be able to see a column chart on the specific event page that displays the cost for each module (ie module on the x axis cost on the y axis).

As a user, I would like to see a graph on the Events dashboard that shows costs across ALL events.

As a developer, I would like to use AmCharts to make all charts - use the free version.
