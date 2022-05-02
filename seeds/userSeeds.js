const { User } = require('../models');
const bcrypt = require('bcrypt');

const seedPass = ['Root1234_1', 'Root1234_2', 'Root1234_3', 'Root1234_4', 'Root1234_5', 'Root1234_6', 'Root1234_7'];

const securePass = seedPass.map(pass => bcrypt.hash(pass, 10, (err,hash) => console.log(hash)));


const seedUsers = async () => {
    const passwordsDefined = await securePass;
    const userData = [
        {
            username: 'User1',
            email: 'useone@example.com',
            password: 'Root1234_1' //passwordsDefined[0] // Root1234_1
        },
        {
            username: 'User2',
            email: 'usetwo@example.com',
            password: 'Root1234_2' //passwordsDefined[1] // Root1234_2
        },
        {
            username: 'User3',
            email: 'usethree@example.com',
            password: 'Root1234_3' //passwordsDefined[2] // Root1234_3
        },
        {
            username: 'User4',
            email: 'usefour@example.com',
            password: 'Root1234_4' //passwordsDefined[3] // Root1234_4
        },
        {
            username: 'User5',
            email: 'usefive@example.com',
            password: 'Root1234_5' //passwordsDefined[4] // Root1234_5
        },
        {
            username: 'User6',
            email: 'usesix@example.com',
            password: 'Root1234_6' //passwordsDefined[5] // Root1234_6
        },
        {
            username: 'User7',
            email: 'usesix@example.com',
            password: 'Root1234_7' //passwordsDefined[6] // Root1234_7
        }
    
    ];
    return User.bulkCreate(userData);
};

module.exports = seedUsers;