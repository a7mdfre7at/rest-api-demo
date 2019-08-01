const _ = require('lodash');
const express = require('express');
const router = express.Router();

var users = [
    {
        id: 1,
        name: 'Ahmad',
        games: [
            {
                id: 1,
                name: 'need for speed'
            },
            {
                id: 2,
                name: 'sniper elite'
            }
        ]
    },
    {
        id: 2,
        name: 'Mutasim',
        games: [
            {
                id: 3,
                name: 'Attak on the titans'
            },
            {
                id: 5,
                name: 'C&C Generals'
            }
        ]
    },
    {
        id: 3,
        name: 'Montaser',
        games: [
            {
                id: 7,
                name: 'FIFA 19'
            },
            {
                id: 10,
                name: 'Men of war'
            }
        ]
    }
];


router.get('/', async (req, res) => {
    res.send(users);
});

router.get('/:id', async (req, res) => {
    var user = users.find(u => u.id == req.params.id);

    if (user == null || user == undefined) {
        res.send('User not found.')
    } else {
        res.send(user);
    }
});

router.get('/:id/games', async (req, res) => {
    var user = users.find(u => u.id == req.params.id);
    
    if (user == null || user == undefined) {
        res.send('User not found.')
    } else {
        res.send(user.games);
    }
});

router.get('/:id/games/:gameId', async (req, res) => {
    var user = users.find(u => u.id == req.params.id);
    
    if (user == null || user == undefined) {
        res.send('User not found.')
    } else {
        var game = user.games.find(g => g.id == req.params.gameId);
        if (game == null || game == undefined) {
            res.send('Game not found');
        } else {
            res.send(game);
        }
    }
});

router.post('/', async (req, res) => {
    users.push(req.body);
    res.send('User has been added');
});


router.post('/:id/games', async (req, res) => {
    var user = users.find(u => u.id == req.params.id);
    
    if (user == null || user == undefined) {
        res.send('User not found.')
    } else {
        user.games.push(req.body);
        res.send('Game has been added');
    }
});

module.exports = router; 