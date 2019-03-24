const mongoose = require('mongoose');
const config = require('./config');

const User = require('./models/User');
const Task = require('./models/Task');


mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', async () => {
    try {
        await db.dropCollection('users');
        await db.dropCollection('tasks');
    } catch (e) {
        console.log('Collections were not present, skipping drop...');
    }

    console.log('collection is dropped');

    const [user] = await User.create({
        username:'user',
        password: '123'
    });
    console.log('user created');

    const [] = await Task.create({
        userId: user._id,
        title: "task1",
        description: "Open file",
        status: "new"

    }, {
        userId: user._id,
        title: "task2",
        description: "Read file",
        status: "new"
    });

    console.log("Task created");

    db.close();
});