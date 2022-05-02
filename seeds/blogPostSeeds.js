const { DATE, Sequelize } = require('sequelize/types');
const sequelize = require('sequelize');
const { Blogpost } = require('../models');
const { combineTableNames } = require('sequelize/types/utils');

// 7 users seeded so this should seed maybe 15 posts, giving some users more than one post and some none.

const postData = [
    { // 1 of 8 -- user 3 of 7 | index 2
        title: 'Going to the movies.',
        body: 'I used to love going to the movies as a kid. Memories bring recollections of buttery popcorn and enormous sodas. The most alluring aspect of going to the movies was seeing the hottest new films on \"the big screen.\" With the rising costs of tickets and concessions, as well as the vast improvements to home theater setups, is going to the movies even worth it anymore? While it is pricey, I think giving the special outing memories to you children may be worth doing once a year or so, but not to the degree movie theaters have been popular for the majority of cinema. I don\'t think I\'m going to go much more as a young adult. Even on dates, there is very little chance to get to know the other person, but I think when I settle down, I want to give my kids the same memories I am so fond of.',
        date_created: '2021-10-18T16:47:10.000Z',
        user_id: 2
    },
    { // 2 of 8 -- user 7 of 7 | index 6
        title: 'What\'s up with the housing market?',
        body: '30 years ago(1992), you could get into the average American home for around $121,500. Accounting for inflation, that\'s about the equivalent purchasing power of $249,000 in 2022. However, the average home price now in 2022 is $374,900. This means that housing, as a commodity, is approximately three times more valuable/expensive as it was then. With rising populations, and finite housing resources, demand is outgrowing supply. If this trend continues, the American dream of owning your own home is going to be reserved to that of only the upper class.',
        date_created: sequelize.fn('now'),
        user_id: 6
    },
    {   // 3 of 8 -- user 1 of 7 | index 0
        title: 'Three.JS The future? Or a fad?',
        body: 'Wether we are ready for them are not 3D websites are here. But are these new ways of exploring the internet going to become the standard, or will they turn into the next passing fad that only had flash in the pan success?',
        date_created: '2022-02-23T10:13:41.481Z',
        user_id: 0
    },
    {   // 4 of 8 -- user 1 of 7 | Index 0
        title: 'Web Development and Coding done by AI?',
        body: 'As programmers, it makes sense to see the roles we have as complex enough to not be at risk of being taken over by computers in our lifetime. A fun joke on the subject is \"In order for artificial intelligence to take over developer jobs, users would first have to be able to describe what they want. We\'re safe\". Tools like Github Copilot suggest this possibility might be closer than originally thought.',
        date_created: '2021-06-30T14:24:34.000Z',
        user_id: 0
    },
    { // 5 of 8 - user 2 of 7 | index 1
        title: 'Rivian: the new kid on the block in electric vehciles',
        body: 'All eyes are on Rivian, the latest in an emerging trend of new electric vehicle (EV) automakers. While veteran automakers and startups alike are scrambling to bring more EVs to market, Rivian has an extra trick up its sleeve. Amazon, the popular online retailer, and one of the most successful companies on the planet has decided to heavily invest in Rivian to supply an enormous fleet of \"last mile\" delivery solutions to the large chain. \"The last mile from the distribution center to the consumer\'s home is the most difficult and expensive for Amazon\" sites Amazon\'s CEO, Jeff Bezos. \"If we can subsidize fuel costs with more sustainable electricity, we can continue to provide the same service that Amazon customers have grown to love despite rising fuel prices.',
        date_created: '2021-09-03T09:38:04.649Z',
        user_id: 1
    },
    { // 6 of 8 -- user 4 of 7 | index 3
        title: 'Is personal device innovation dead?',
        body: 'In 2007, 14 years ago today, Apple debuted the original iPhone. With a then impressive 3.5 inch display and 4GB of solid state hard drive storage, its easy to see how far we\'ve come. However, as cameras, storage, processors, graphics cards, battery life, and display quality for mobile devices improve, very little of the base functionality has changed. Some phones are bringing back the flip form factor. A few features such as fingerprint reading, facial recognition, and wireless payment process have snuck into the enormous list of features for our personal hand-held computers. That being said however, not much is truly changing anymore. Are we done seeing major improvements? Will wearables be the next big thing? Only time will tell.',
        date_created: '2021-06-29T16:23:08.541Z',
        user_id: 3
    },
    { // 7 of 8 -- user 1 of 7 | index 0
        title: 'Elon Musk: Billionare turned Meme master',
        body: 'From shilling for success of a meme coin about our favorite good boi doggo to talk of purchasing social media giant, Twitter, Elon Musk certainly does one thing well: stirring up attention online. The eclectic billionare gave us PayPal, Tesla, and SpaceX t name a few. While many investors and fans of Musk eagerly anticipate his next move with bated breath, its important to realize Musk is merely human much like you and I. He is not infallible, and is likely always moving in a direction that benefits his bottom line. Few people this successful and wealthy got where they are by being altruistic and selfless. While I respect Elon and his great successes, its important to stay cautiously optimistic about whatever next move he makes, as history has echoed, there will certainly be more Musk public actions that shake up the masses and stir up conversation.',
        date_created: '2022-04-26T11:52:40.384Z',
        user_id: 0
    },
    { // 8 of 8 -- user 7 of 7 | index 6
        title: 'Hacking in movies',
        body: 'The less someone understands a concept, the more that concept will seem illustrious and magical in nature. I think this is much the way the lay-person views computer programming. While most software developers will know, the logic that drives the internet and cyber security is less glamourous than the Hollywood rendition. While it is fun to see your favorite Hollywood action hero \"access the mainframe\" in under 5 minutes using only a bluetooth connected toaster, REAL hacking is rarely ever done this way. More often than not the easiest way to breach a secure system is through human error. This is why training employees to recognize and avoid phishing scams is important. Not using the same password for multiple services is another. So remember the next time you see Tom Cruise hanging upside down with his fingers furiously pawing at a keyboard to open a bank vault, he would have likely had more success sending an email to the bank\'s owner telling them that they had been logged out and needed to \"click here\" to log back in.',
        date_created: sequelize.fn('now'),
        user_id: 6
    }
   
];

const seedPosts = () => {
    User.bulkCreate(postData);
};

module.exports = seedPosts;