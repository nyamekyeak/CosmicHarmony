# SWE 432 Sprint 5 - Database and State

## Database Integration and Data Migration (60 points)
### Database Setup
Successful setup of MongoDB, including installation, configuration, and connection to the web
application.

![Alt text](MongoDBsetup.png)
![Alt text](MongoDBsetupcode.png)


### Data Model Schema Design:
Development of a MongoDB schema that accurately represents the data model for the application's needs, such as songs, DJs, playlists, listener preferences, etc.
![Alt text](djSchema.png)
![Alt text](producerSchema.png)
![Alt text](songSchema.png)

### Data Migration
Complete migration of existing data to the new database structure, ensuring that all previously hard-
coded data is now stored and retrieved from the database.
- Migration done using json files in `./data`
![Alt text](dataMigration.png)
![Alt text](dataMigrationDB.png)