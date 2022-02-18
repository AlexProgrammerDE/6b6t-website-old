interface Categories {
    name: string,
    commands: Command[]
}

interface Command {
    name: string
    description: string
    limited?: Limited
}

interface Limited {
    name: string
}

export var commands: Categories[] = [
    {
        name: 'Teleportation Commands',
        commands: [
            {
                name: '/tpa',
                description: 'send a teleport request to a player'
            },
            {
                name: '/tpahere',
                description: 'send a teleport request to teleport a player to you'
            },
            {
                name: '/tpacancel',
                description: 'cancel a teleport request'
            },
            {
                name: '/home <home name>',
                description: 'teleport to your home'
            },
            {
                name: '/sethome <home name>',
                description: 'set a new home'
            },
            {
                name: '/delhome <home name>',
                description: 'delete a home'
            },
            {
                name: '/tptoggle',
                description: 'prevent anyone from sending teleportation requests to you',
                limited: {
                    name: '[Donator+ and VIP]'
                }
            },
            {
                name: '/lobby',
                description: 'teleport to the server authentication server'
            },
            {
                name: '/kill',
                description: 'set your health to 0 without much effort'
            },
        ]
    },
    {
        name: 'Communication Commands',
        commands: [
            {
                name: '/msg <player name>',
                description: 'message a player'
            },
            {
                name: '/reply',
                description: 'reply to the last player who messaged you'
            },
            {
                name: '/last',
                description: 'message the last player you messaged'
            },
            {
                name: '/ignore <player name>',
                description: 'ignore the player until next server restart'
            },
            {
                name: '/ignorehard <player name>',
                description: 'ignore the player forever'
            },
            {
                name: '/togglechat',
                description: 'prevent getting chat messages'
            },
            {
                name: '/togglewhispering',
                description: 'prevent getting private messages'
            },
        ]
    },
    {
        name: 'Statistics Commands',
        commands: [
            {
                name: '/stats',
                description: 'check server statistics '
            },
            {
                name: '/ping <player name>',
                description: 'check yours or players ping in milliseconds',
                limited: {
                    name: '[Donator+ and VIP]'
                }
            },
            {
                name: '/tps',
                description: 'check server tps and cpu usage'
            },
            {
                name: '/online',
                description: 'check how many players are currently online on the server you are on'
            },
            {
                name: '/joindate <player name>',
                description: 'check the join date of a player'
            },
        ],
    },
    {
        name: 'Server Socials Commands',
        commands: [
            {
                name: '/website',
                description: 'link to the official website'
            },
            {
                name: '/discord',
                description: 'link to the official discord'
            },
            {
                name: '/donate',
                description: 'link to the official donation page'
            }
        ]
    },
    {
        name: 'Player Customization Commands',
        commands: [
            {
                name: '/language',
                description: 'change the language of server messages'
            },
            {
                name: '/hat',
                description: 'put an item on your head',
                limited: {
                    name: '[Voter, Donator, Donator+ and VIP]'
                }
            },
            {
                name: '/skin <premium player name>',
                description: 'change your skin'
            },
            {
                name: '/nick',
                description: 'change your nickname and the color of it',
                limited: {
                    name: '[Donator+ and VIP]'
                }
            },
        ]
    }
]
