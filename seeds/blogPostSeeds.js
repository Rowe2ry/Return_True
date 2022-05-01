const { User } = require('../models');
const bcrypt = require('bcrypt');

const seedPass = ['Root1234_0', 'Root1234_1', 'Root1234_2', 'Root1234_3', 'Root1234_4', 'Root1234_5', 'Root1234_6'];

const securePass = seedPass.map(pass => bcrypt.hash(pass));

const userData = [
    {
        username: 'User0',
        email: 'usezero@example.com',
        password: securePass[0] // Root1234_0
    },
    {
        username: 'User1',
        email: 'useone@example.com',
        password: securePass[1] // Root1234_1
    },
    {
        username: 'User2',
        email: 'usetwo@example.com',
        password: securePass[2] // Root1234_2
    },
    {
        username: 'User3',
        email: 'usethree@example.com',
        password: securePass[3] // Root1234_3
    },
    {
        username: 'User4',
        email: 'usefour@example.com',
        password: securePass[4] // Root1234_4
    },
    {
        username: 'User5',
        email: 'usefive@example.com',
        password: securePass[5] // Root1234_5
    },
    {
        username: 'User6',
        email: 'usesix@example.com',
        password: securePass[6] // Root1234_6
    }
];

const seedUsers = () => {
    User.bulkCreate(userData);
};

module.exports = seedUsers;