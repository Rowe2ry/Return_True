const { Comment } = require('../models');

// 8 blog posts, will put 2 or so comments on 3 or 4 posts

const commentData = [
    { // commenting on going to the movies
        content: 'Wow this brings back memories. At first I wasn\'t sure this was fitting of a tech blog post, but movies are an integral part of display technology and media evolution in society. I need to go see a movie again soon.',
        user_id: 5,
        post_id: 1
    },
    {
        content: 'Yeah, I almost didn\'t put this post here because I was worried it wasn\'t \"tech\" enough, but it was just what was on my mind that day. Thanks for reading and commenting.',
        user_id: 3,
        post_id: 1
    },
    {
        content: 'Seriously though!!! I think I am doomed to rent an apartment with 3 room mates until the day I die. I have a little saved up, but at the rate homes are gonig up, I\'d be better off investing it in stocks.',
        user_id: 4,
        post_id: 2
    },
    {
        content: 'LOL @ the users not being able to describe what they want. So true! Tools like GH Copilot are pretty cool but there is no way its bridging the gap of human reasoning and client needs. Bots can keystroke, but can they innovate?',
        user_id: 7,
        post_id: 4
    },
    {
        content: 'Elecctric cars are just like toys. Give me a real V8 any day. Have fun recharging for hours while the lithium in your battery pack kills the planet even faster.',
        user_id: 5,
        post_id: 5
    },
    {
        content: 'Electric cars are quieter, faster, don\'t need to be warmed up. Leave your house with a full charge every morning. And don\'t waste energy when idling. They certainly have their place. There is good reson Bezos wants to use them',
        user_id: 1,
        post_id: 5
    }
];

const seedComments = () => {
    return Comment.bulkCreate(commentData);
};

module.exports = seedComments;