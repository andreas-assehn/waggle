# MongoDB Atlas local setup

# Connect with mongoDB Compass

Replace USER and PASSWORD with login details and connect with this url
'mongodb+srv://USER:PASSWORD@cluster0.0rmucpd.mongodb.net/?retryWrites=true&w=majority'

# Seed the database

"npm run seed" from the server folder will seed the "thesis" database with mock data from server/utils/mock-data. Be aware that this will first wipe the database and you will loose any data you added to it before.
