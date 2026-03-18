// Generated from https://botc.app/backend/data
// echo 'data...' | jq '.roles | [.[] | {id, name, team, edition, ability}]'
export const roles = [
    {
        "id": "steward",
        "name": "Steward",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "You start knowing 1 good player."
    },
    {
        "id": "knight",
        "name": "Knight",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "You start knowing 2 players that are not the Demon."
    },
    {
        "id": "chef",
        "name": "Chef",
        "team": "townsfolk",
        "edition": "tb",
        "ability": "You start knowing how many pairs of evil players there are."
    },
    {
        "id": "noble",
        "name": "Noble",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "You start knowing 3 players, 1 and only 1 of which is evil."
    },
    {
        "id": "investigator",
        "name": "Investigator",
        "team": "townsfolk",
        "edition": "tb",
        "ability": "You start knowing that 1 of 2 players is a particular Minion."
    },
    {
        "id": "washerwoman",
        "name": "Washerwoman",
        "team": "townsfolk",
        "edition": "tb",
        "ability": "You start knowing that 1 of 2 players is a particular Townsfolk."
    },
    {
        "id": "clockmaker",
        "name": "Clockmaker",
        "team": "townsfolk",
        "edition": "snv",
        "ability": "You start knowing how many steps from the Demon to its nearest Minion."
    },
    {
        "id": "grandmother",
        "name": "Grandmother",
        "team": "townsfolk",
        "edition": "bmr",
        "ability": "You start knowing a good player & their character. If the Demon kills them, you die too."
    },
    {
        "id": "librarian",
        "name": "Librarian",
        "team": "townsfolk",
        "edition": "tb",
        "ability": "You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)"
    },
    {
        "id": "shugenja",
        "name": "Shugenja",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "You start knowing if your closest evil player is clockwise or anti-clockwise. If equidistant, this info is arbitrary."
    },
    {
        "id": "pixie",
        "name": "Pixie",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "You start knowing 1 in-play Townsfolk. If you were mad that you were this character, you gain their ability when they die."
    },
    {
        "id": "bountyhunter",
        "name": "Bounty Hunter",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "You start knowing 1 evil player. If the player you know dies, you learn another evil player tonight. [1 Townsfolk is evil]"
    },
    {
        "id": "empath",
        "name": "Empath",
        "team": "townsfolk",
        "edition": "tb",
        "ability": "Each night, you learn how many of your 2 alive neighbors are evil."
    },
    {
        "id": "highpriestess",
        "name": "High Priestess",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Each night, learn which player the Storyteller believes you should talk to most."
    },
    {
        "id": "sailor",
        "name": "Sailor",
        "team": "townsfolk",
        "edition": "bmr",
        "ability": "Each night, choose an alive player: either you or they are drunk until dusk. You can't die."
    },
    {
        "id": "balloonist",
        "name": "Balloonist",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Each night, you learn a player of a different character type than last night. [+0 or +1 Outsider]"
    },
    {
        "id": "general",
        "name": "General",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Each night, you learn which alignment the Storyteller believes is winning: good, evil, or neither."
    },
    {
        "id": "preacher",
        "name": "Preacher",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Each night, choose a player: a Minion, if chosen, learns this. All chosen Minions have no ability."
    },
    {
        "id": "chambermaid",
        "name": "Chambermaid",
        "team": "townsfolk",
        "edition": "bmr",
        "ability": "Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability."
    },
    {
        "id": "villageidiot",
        "name": "Village Idiot",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Each night, choose a player: you learn their alignment. [+0 to +2 Village Idiots. 1 of the extras is drunk]"
    },
    {
        "id": "snakecharmer",
        "name": "Snake Charmer",
        "team": "townsfolk",
        "edition": "snv",
        "ability": "Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned."
    },
    {
        "id": "mathematician",
        "name": "Mathematician",
        "team": "townsfolk",
        "edition": "snv",
        "ability": "Each night, you learn how many players’ abilities worked abnormally (since dawn) due to another character's ability."
    },
    {
        "id": "king",
        "name": "King",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Each night, if the dead equal or outnumber the living, you learn 1 alive character. The Demon knows you are the King."
    },
    {
        "id": "dreamer",
        "name": "Dreamer",
        "team": "townsfolk",
        "edition": "snv",
        "ability": "Each night, choose a player (not yourself or Travellers): you learn 1 good & 1 evil character, 1 of which is correct."
    },
    {
        "id": "fortuneteller",
        "name": "Fortune Teller",
        "team": "townsfolk",
        "edition": "tb",
        "ability": "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you."
    },
    {
        "id": "cultleader",
        "name": "Cult Leader",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Each night, you become the alignment of an alive neighbor. If all good players choose to join your cult, your team wins."
    },
    {
        "id": "flowergirl",
        "name": "Flowergirl",
        "team": "townsfolk",
        "edition": "snv",
        "ability": "Each night*, you learn if a Demon voted today."
    },
    {
        "id": "towncrier",
        "name": "Town Crier",
        "team": "townsfolk",
        "edition": "snv",
        "ability": "Each night*, you learn if a Minion nominated today."
    },
    {
        "id": "oracle",
        "name": "Oracle",
        "team": "townsfolk",
        "edition": "snv",
        "ability": "Each night*, you learn how many dead players are evil."
    },
    {
        "id": "undertaker",
        "name": "Undertaker",
        "team": "townsfolk",
        "edition": "tb",
        "ability": "Each night*, you learn which character died by execution today."
    },
    {
        "id": "innkeeper",
        "name": "Innkeeper",
        "team": "townsfolk",
        "edition": "bmr",
        "ability": "Each night*, choose 2 players: they can't die tonight, but 1 is drunk until dusk."
    },
    {
        "id": "monk",
        "name": "Monk",
        "team": "townsfolk",
        "edition": "tb",
        "ability": "Each night*, choose a player (not yourself): they are safe from the Demon tonight."
    },
    {
        "id": "gambler",
        "name": "Gambler",
        "team": "townsfolk",
        "edition": "bmr",
        "ability": "Each night*, choose a player & guess their character: if you guess wrong, you die."
    },
    {
        "id": "acrobat",
        "name": "Acrobat",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Each night*, choose a player: if they are or become drunk or poisoned tonight, you die."
    },
    {
        "id": "exorcist",
        "name": "Exorcist",
        "team": "townsfolk",
        "edition": "bmr",
        "ability": "Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn't wake tonight."
    },
    {
        "id": "lycanthrope",
        "name": "Lycanthrope",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Each night*, choose an alive player. If good, they die & the Demon doesn’t kill tonight. One good player registers as evil."
    },
    {
        "id": "gossip",
        "name": "Gossip",
        "team": "townsfolk",
        "edition": "bmr",
        "ability": "Each day, you may make a public statement. Tonight, if it was true, a player dies."
    },
    {
        "id": "savant",
        "name": "Savant",
        "team": "townsfolk",
        "edition": "snv",
        "ability": "Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false."
    },
    {
        "id": "alsaahir",
        "name": "Alsaahir",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Each day, if you publicly guess which players are Minion(s) and which are Demon(s), good wins."
    },
    {
        "id": "engineer",
        "name": "Engineer",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Once per game, at night, choose which Minions or which Demon is in play."
    },
    {
        "id": "nightwatchman",
        "name": "Nightwatchman",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Once per game, at night, choose a player: they learn you are the Nightwatchman."
    },
    {
        "id": "courtier",
        "name": "Courtier",
        "team": "townsfolk",
        "edition": "bmr",
        "ability": "Once per game, at night, choose a character: they are drunk for 3 nights & 3 days."
    },
    {
        "id": "seamstress",
        "name": "Seamstress",
        "team": "townsfolk",
        "edition": "snv",
        "ability": "Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment."
    },
    {
        "id": "philosopher",
        "name": "Philosopher",
        "team": "townsfolk",
        "edition": "snv",
        "ability": "Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk."
    },
    {
        "id": "huntsman",
        "name": "Huntsman",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Once per game, at night, choose a living player: the Damsel, if chosen, becomes a not-in-play Townsfolk. [+the Damsel]"
    },
    {
        "id": "professor",
        "name": "Professor",
        "team": "townsfolk",
        "edition": "bmr",
        "ability": "Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected."
    },
    {
        "id": "artist",
        "name": "Artist",
        "team": "townsfolk",
        "edition": "snv",
        "ability": "Once per game, during the day, privately ask the Storyteller any yes/no question."
    },
    {
        "id": "slayer",
        "name": "Slayer",
        "team": "townsfolk",
        "edition": "tb",
        "ability": "Once per game, during the day, publicly choose a player: if they are the Demon, they die."
    },
    {
        "id": "fisherman",
        "name": "Fisherman",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Once per game, during the day, visit the Storyteller for some advice to help your team win."
    },
    {
        "id": "princess",
        "name": "Princess",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "On your 1st day, if you nominated & executed a player, the Demon doesn't kill tonight."
    },
    {
        "id": "juggler",
        "name": "Juggler",
        "team": "townsfolk",
        "edition": "snv",
        "ability": "On your 1st day, publicly guess up to 5 players' characters. That night, you learn how many you got correct."
    },
    {
        "id": "soldier",
        "name": "Soldier",
        "team": "townsfolk",
        "edition": "tb",
        "ability": "You are safe from the Demon."
    },
    {
        "id": "alchemist",
        "name": "Alchemist",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "You have a Minion ability. When using this, the Storyteller may prompt you to choose differently."
    },
    {
        "id": "cannibal",
        "name": "Cannibal",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution."
    },
    {
        "id": "amnesiac",
        "name": "Amnesiac",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "You do not know what your ability is. Each day, privately guess what it is: you learn how accurate you are."
    },
    {
        "id": "farmer",
        "name": "Farmer",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "When you die at night, an alive good player becomes a Farmer."
    },
    {
        "id": "minstrel",
        "name": "Minstrel",
        "team": "townsfolk",
        "edition": "bmr",
        "ability": "When a Minion dies by execution, all other players (except Travellers) are drunk until dusk tomorrow."
    },
    {
        "id": "ravenkeeper",
        "name": "Ravenkeeper",
        "team": "townsfolk",
        "edition": "tb",
        "ability": "If you die at night, you are woken to choose a player: you learn their character."
    },
    {
        "id": "sage",
        "name": "Sage",
        "team": "townsfolk",
        "edition": "snv",
        "ability": "If the Demon kills you, you learn that it is 1 of 2 players."
    },
    {
        "id": "choirboy",
        "name": "Choirboy",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "If the Demon kills the King, you learn which player is the Demon. [+the King]"
    },
    {
        "id": "banshee",
        "name": "Banshee",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "If the Demon kills you, all players learn this. From now on, you may nominate twice per day and vote twice per nomination."
    },
    {
        "id": "tealady",
        "name": "Tea Lady",
        "team": "townsfolk",
        "edition": "bmr",
        "ability": "If both your alive neighbors are good, they can't die."
    },
    {
        "id": "mayor",
        "name": "Mayor",
        "team": "townsfolk",
        "edition": "tb",
        "ability": "If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead."
    },
    {
        "id": "fool",
        "name": "Fool",
        "team": "townsfolk",
        "edition": "bmr",
        "ability": "The 1st time you die, you don't."
    },
    {
        "id": "virgin",
        "name": "Virgin",
        "team": "townsfolk",
        "edition": "tb",
        "ability": "The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately."
    },
    {
        "id": "magician",
        "name": "Magician",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "The Demon thinks you are a Minion. Minions think you are a Demon."
    },
    {
        "id": "poppygrower",
        "name": "Poppy Grower",
        "team": "townsfolk",
        "edition": "carousel",
        "ability": "Minions & Demons do not know each other. If you die, they learn who each other are that night."
    },
    {
        "id": "pacifist",
        "name": "Pacifist",
        "team": "townsfolk",
        "edition": "bmr",
        "ability": "Executed good players might not die."
    },
    // {
    //     "id": "atheist",
    //     "name": "Atheist",
    //     "team": "townsfolk",
    //     "edition": "carousel",
    //     "ability": "The Storyteller can break the game rules, and if executed, good wins, even if you are dead. [No evil characters]"
    // },
    {
        "id": "hermit",
        "name": "Hermit",
        "team": "outsider",
        "edition": "carousel",
        "ability": "You have all Outsider abilities. [-0 or -1 Outsider]"
    },
    {
        "id": "butler",
        "name": "Butler",
        "team": "outsider",
        "edition": "tb",
        "ability": "Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too."
    },
    {
        "id": "goon",
        "name": "Goon",
        "team": "outsider",
        "edition": "bmr",
        "ability": "Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment."
    },
    {
        "id": "ogre",
        "name": "Ogre",
        "team": "outsider",
        "edition": "carousel",
        "ability": "On your 1st night, choose a player (not yourself): you become their alignment (you don't know which) even if drunk or poisoned."
    },
    // {
    //     "id": "lunatic",
    //     "name": "Lunatic",
    //     "team": "outsider",
    //     "edition": "bmr",
    //     "ability": "You think you are a Demon, but you are not. The Demon knows who you are & who you choose at night."
    // },
    // {
    //     "id": "drunk",
    //     "name": "Drunk",
    //     "team": "outsider",
    //     "edition": "tb",
    //     "ability": "You do not know you are the Drunk. You think you are a Townsfolk character, but you are not."
    // },
    {
        "id": "tinker",
        "name": "Tinker",
        "team": "outsider",
        "edition": "bmr",
        "ability": "You might die at any time."
    },
    {
        "id": "recluse",
        "name": "Recluse",
        "team": "outsider",
        "edition": "tb",
        "ability": "You might register as evil & as a Minion or Demon, even if dead."
    },
    {
        "id": "golem",
        "name": "Golem",
        "team": "outsider",
        "edition": "carousel",
        "ability": "You may only nominate once per game. When you do, if the nominee is not the Demon, they die."
    },
    {
        "id": "sweetheart",
        "name": "Sweetheart",
        "team": "outsider",
        "edition": "snv",
        "ability": "When you die, 1 player is drunk from now on."
    },
    {
        "id": "plaguedoctor",
        "name": "Plague Doctor",
        "team": "outsider",
        "edition": "carousel",
        "ability": "When you die, the Storyteller gains a Minion ability."
    },
    {
        "id": "klutz",
        "name": "Klutz",
        "team": "outsider",
        "edition": "snv",
        "ability": "When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses."
    },
    {
        "id": "moonchild",
        "name": "Moonchild",
        "team": "outsider",
        "edition": "bmr",
        "ability": "When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die."
    },
    {
        "id": "saint",
        "name": "Saint",
        "team": "outsider",
        "edition": "tb",
        "ability": "If you die by execution, your team loses."
    },
    {
        "id": "barber",
        "name": "Barber",
        "team": "outsider",
        "edition": "snv",
        "ability": "If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters."
    },
    {
        "id": "hatter",
        "name": "Hatter",
        "team": "outsider",
        "edition": "carousel",
        "ability": "If you died today or tonight, the Minion & Demon players may choose new Minion & Demon characters to be."
    },
    {
        "id": "mutant",
        "name": "Mutant",
        "team": "outsider",
        "edition": "snv",
        "ability": "If you are “mad” about being an Outsider, you might be executed."
    },
    {
        "id": "politician",
        "name": "Politician",
        "team": "outsider",
        "edition": "carousel",
        "ability": "If you were the player most responsible for your team losing, you change alignment & win, even if dead."
    },
    {
        "id": "zealot",
        "name": "Zealot",
        "team": "outsider",
        "edition": "carousel",
        "ability": "If there are 5 or more players alive, you must vote for every nomination."
    },
    {
        "id": "damsel",
        "name": "Damsel",
        "team": "outsider",
        "edition": "carousel",
        "ability": "All Minions know a Damsel is in play. If a Minion publicly guesses you (once), your team loses."
    },
    {
        "id": "snitch",
        "name": "Snitch",
        "team": "outsider",
        "edition": "carousel",
        "ability": "Each Minion gets 3 bluffs."
    },
    // {
    //     "id": "heretic",
    //     "name": "Heretic",
    //     "team": "outsider",
    //     "edition": "carousel",
    //     "ability": "Whoever wins, loses & whoever loses, wins, even if you are dead."
    // },
    {
        "id": "puzzlemaster",
        "name": "Puzzlemaster",
        "team": "outsider",
        "edition": "carousel",
        "ability": "1 player is drunk, even if you die. If you guess (once) who it is, learn the Demon player, but guess wrong & get false info."
    },
    {
        "id": "mezepheles",
        "name": "Mezepheles",
        "team": "minion",
        "edition": "carousel",
        "ability": "You start knowing a secret word. The 1st good player to say this word becomes evil that night."
    },
    {
        "id": "godfather",
        "name": "Godfather",
        "team": "minion",
        "edition": "bmr",
        "ability": "You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [-1 or +1 Outsider]"
    },
    {
        "id": "poisoner",
        "name": "Poisoner",
        "team": "minion",
        "edition": "tb",
        "ability": "Each night, choose a player: they are poisoned tonight and tomorrow day."
    },
    {
        "id": "devilsadvocate",
        "name": "Devil's Advocate",
        "team": "minion",
        "edition": "bmr",
        "ability": "Each night, choose a living player (different to last night): if executed tomorrow, they don't die."
    },
    {
        "id": "spy",
        "name": "Spy",
        "team": "minion",
        "edition": "tb",
        "ability": "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead."
    },
    {
        "id": "harpy",
        "name": "Harpy",
        "team": "minion",
        "edition": "carousel",
        "ability": "Each night, choose 2 players: tomorrow, the 1st player is mad that the 2nd is evil, or one or both might die."
    },
    {
        "id": "witch",
        "name": "Witch",
        "team": "minion",
        "edition": "snv",
        "ability": "Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability."
    },
    {
        "id": "cerenovus",
        "name": "Cerenovus",
        "team": "minion",
        "edition": "snv",
        "ability": "Each night, choose a player & a good character: they are “mad” they are this character tomorrow, or might be executed."
    },
    {
        "id": "fearmonger",
        "name": "Fearmonger",
        "team": "minion",
        "edition": "carousel",
        "ability": "Each night, choose a player: if you nominate & execute them, their team loses. All players know if you choose a new player."
    },
    // {
    //     "id": "pithag",
    //     "name": "Pit-Hag",
    //     "team": "minion",
    //     "edition": "snv",
    //     "ability": "Each night*, choose a player & a character they become (if not in play). If a Demon is made, deaths tonight are arbitrary."
    // },
    {
        "id": "psychopath",
        "name": "Psychopath",
        "team": "minion",
        "edition": "carousel",
        "ability": "Each day, before nominations, you may publicly choose a player: they die. If executed, you only die if you lose roshambo."
    },
    {
        "id": "assassin",
        "name": "Assassin",
        "team": "minion",
        "edition": "bmr",
        "ability": "Once per game, at night*, choose a player: they die, even if for some reason they could not."
    },
    {
        "id": "wizard",
        "name": "Wizard",
        "team": "minion",
        "edition": "carousel",
        "ability": "Once per game, choose to make a wish. If granted, it might have a price & leave a clue as to its nature."
    },
    {
        "id": "widow",
        "name": "Widow",
        "team": "minion",
        "edition": "carousel",
        "ability": "On your 1st night, look at the Grimoire & choose a player: they are poisoned. 1 good player knows a Widow is in play."
    },
    {
        "id": "xaan",
        "name": "Xaan",
        "team": "minion",
        "edition": "carousel",
        "ability": "On night X, all Townsfolk are poisoned until dusk. [X Outsiders]"
    },
    // {
    //     "id": "marionette",
    //     "name": "Marionette",
    //     "team": "minion",
    //     "edition": "carousel",
    //     "ability": "You think you are a good character, but you are not. The Demon knows who you are. [You neighbor the Demon]"
    // },
    {
        "id": "wraith",
        "name": "Wraith",
        "team": "minion",
        "edition": "carousel",
        "ability": "You may choose to open your eyes at night. You wake when other evil players do."
    },
    {
        "id": "summoner",
        "name": "Summoner",
        "team": "minion",
        "edition": "carousel",
        "ability": "You get 3 bluffs. On the 3rd night, choose a player: they become an evil Demon of your choice. [No Demon]"
    },
    {
        "id": "eviltwin",
        "name": "Evil Twin",
        "team": "minion",
        "edition": "snv",
        "ability": "You & an opposing player know each other. If the good player is executed, evil wins. Good can't win if you both live."
    },
    {
        "id": "goblin",
        "name": "Goblin",
        "team": "minion",
        "edition": "carousel",
        "ability": "If you publicly claim to be the Goblin when nominated & are executed that day, your team wins."
    },
    {
        "id": "boomdandy",
        "name": "Boomdandy",
        "team": "minion",
        "edition": "carousel",
        "ability": "If you are executed, all but 3 players die. After a 10 to 1 countdown, the player with the most players pointing at them, dies."
    },
    {
        "id": "mastermind",
        "name": "Mastermind",
        "team": "minion",
        "edition": "bmr",
        "ability": "If the Demon dies by execution (ending the game), play for 1 more day. If a player is then executed, their team loses."
    },
    {
        "id": "scarletwoman",
        "name": "Scarlet Woman",
        "team": "minion",
        "edition": "tb",
        "ability": "If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don't count.)"
    },
    {
        "id": "vizier",
        "name": "Vizier",
        "team": "minion",
        "edition": "carousel",
        "ability": "All players know you are the Vizier. You cannot die during the day. If good voted, you may choose to execute immediately."
    },
    {
        "id": "organgrinder",
        "name": "Organ Grinder",
        "team": "minion",
        "edition": "carousel",
        "ability": "All players keep their eyes closed when voting and the vote tally is secret. Each night, choose if you are drunk until dusk."
    },
    {
        "id": "boffin",
        "name": "Boffin",
        "team": "minion",
        "edition": "carousel",
        "ability": "The Demon (even if drunk or poisoned) has a not-in-play good character’s ability. You both know which."
    },
    {
        "id": "baron",
        "name": "Baron",
        "team": "minion",
        "edition": "tb",
        "ability": "There are extra Outsiders in play. [+2 Outsiders]"
    },
    {
        "id": "yaggababble",
        "name": "Yaggababble",
        "team": "demon",
        "edition": "carousel",
        "ability": "You start knowing a secret phrase. For each time you said it publicly today, a player might die."
    },
    {
        "id": "pukka",
        "name": "Pukka",
        "team": "demon",
        "edition": "bmr",
        "ability": "Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy."
    },
    {
        "id": "lilmonsta",
        "name": "Lil' Monsta",
        "team": "demon",
        "edition": "carousel",
        "ability": "Each night, Minions choose who babysits Lil' Monsta & \"is the Demon\". Each night*, a player might die. [+1 Minion]"
    },
    {
        "id": "nodashii",
        "name": "No Dashii",
        "team": "demon",
        "edition": "snv",
        "ability": "Each night*, choose a player: they die. Your 2 Townsfolk neighbors are poisoned."
    },
    {
        "id": "imp",
        "name": "Imp",
        "team": "demon",
        "edition": "tb",
        "ability": "Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp."
    },
    {
        "id": "shabaloth",
        "name": "Shabaloth",
        "team": "demon",
        "edition": "bmr",
        "ability": "Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated."
    },
    {
        "id": "ojo",
        "name": "Ojo",
        "team": "demon",
        "edition": "carousel",
        "ability": "Each night*, choose a character: they die. If they are not in play, the Storyteller chooses who dies."
    },
    {
        "id": "kazali",
        "name": "Kazali",
        "team": "demon",
        "edition": "carousel",
        "ability": "Each night*, choose a player: they die. [You choose which players are which Minions. -? to +? Outsiders]"
    },
    {
        "id": "po",
        "name": "Po",
        "team": "demon",
        "edition": "bmr",
        "ability": "Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight."
    },
    {
        "id": "zombuul",
        "name": "Zombuul",
        "team": "demon",
        "edition": "bmr",
        "ability": "Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead."
    },
    {
        "id": "vigormortis",
        "name": "Vigormortis",
        "team": "demon",
        "edition": "snv",
        "ability": "Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbor. [-1 Outsider]"
    },
    {
        "id": "vortox",
        "name": "Vortox",
        "team": "demon",
        "edition": "snv",
        "ability": "Each night*, choose a player: they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins."
    },
    {
        "id": "legion",
        "name": "Legion",
        "team": "demon",
        "edition": "carousel",
        "ability": "Each night*, a player might die. Executions fail if only evil voted. You register as a Minion too. [Most players are Legion]"
    },
    {
        "id": "fanggu",
        "name": "Fang Gu",
        "team": "demon",
        "edition": "snv",
        "ability": "Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]"
    },
    {
        "id": "lordoftyphon",
        "name": "Lord of Typhon",
        "team": "demon",
        "edition": "carousel",
        "ability": "Each night*, choose a player: they die. [Evil characters are in a line. You are in the middle. +1 Minion. -? to +? Outsiders]"
    },
    {
        "id": "lleech",
        "name": "Lleech",
        "team": "demon",
        "edition": "carousel",
        "ability": "Each night*, choose a player: they die. You start by choosing a player: they are poisoned. You die if & only if they are dead."
    },
    {
        "id": "alhadikhia",
        "name": "Al-Hadikhia",
        "team": "demon",
        "edition": "carousel",
        "ability": "Each night*, you may choose 3 players (all players learn who): each silently chooses to live or die, but if all live, all die."
    },
    {
        "id": "riot",
        "name": "Riot",
        "team": "demon",
        "edition": "carousel",
        "ability": "On day 3, Minions become Riot & nominees die but nominate an alive player immediately. This must happen."
    },
    {
        "id": "leviathan",
        "name": "Leviathan",
        "team": "demon",
        "edition": "carousel",
        "ability": "If more than 1 good player is executed, evil wins. All players know you are in play. After day 5, evil wins."
    },
    {
        "id": "thief",
        "name": "Thief",
        "team": "traveller",
        "edition": "tb",
        "ability": "Each night, choose a player (not yourself): their vote counts negatively tomorrow."
    },
    {
        "id": "bureaucrat",
        "name": "Bureaucrat",
        "team": "traveller",
        "edition": "tb",
        "ability": "Each night, choose a player (not yourself): their vote counts as 3 votes tomorrow."
    },
    {
        "id": "barista",
        "name": "Barista",
        "team": "traveller",
        "edition": "snv",
        "ability": "Each night, until dusk, 1) a player becomes sober, healthy & gets true info, or 2) their ability works twice. They learn which."
    },
    {
        "id": "harlot",
        "name": "Harlot",
        "team": "traveller",
        "edition": "snv",
        "ability": "Each night*, choose a living player: if they agree, you learn their character, but you both might die."
    },
    {
        "id": "butcher",
        "name": "Butcher",
        "team": "traveller",
        "edition": "snv",
        "ability": "Each day, after the 1st execution, you may nominate again."
    },
    {
        "id": "cacklejack",
        "name": "Cacklejack",
        "team": "traveller",
        "edition": "carousel",
        "ability": "Each day, choose a player: a different player changes character tonight."
    },
    {
        "id": "gunslinger",
        "name": "Gunslinger",
        "team": "traveller",
        "edition": "tb",
        "ability": "Each day, after the 1st vote has been tallied, you may choose a player that voted: they die."
    },
    {
        "id": "matron",
        "name": "Matron",
        "team": "traveller",
        "edition": "bmr",
        "ability": "Each day, you may choose up to 3 sets of 2 players to swap seats. Players may not leave their seats to talk in private."
    },
    {
        "id": "gangster",
        "name": "Gangster",
        "team": "traveller",
        "edition": "carousel",
        "ability": "Once per day, you may choose to kill an alive neighbor, if your other alive neighbor agrees."
    },
    {
        "id": "bonecollector",
        "name": "Bone Collector",
        "team": "traveller",
        "edition": "snv",
        "ability": "Once per game, at night*, choose a dead player: they regain their ability until dusk."
    },
    {
        "id": "judge",
        "name": "Judge",
        "team": "traveller",
        "edition": "bmr",
        "ability": "Once per game, if another player nominated, you may choose to force the current execution to pass or fail."
    },
    {
        "id": "apprentice",
        "name": "Apprentice",
        "team": "traveller",
        "edition": "bmr",
        "ability": "On your 1st night, you gain a Townsfolk ability (if good), or a Minion ability (if evil)."
    },
    {
        "id": "beggar",
        "name": "Beggar",
        "team": "traveller",
        "edition": "tb",
        "ability": "You must use a vote token to vote. If a dead player gives you theirs, you learn their alignment. You are sober & healthy."
    },
    {
        "id": "deviant",
        "name": "Deviant",
        "team": "traveller",
        "edition": "snv",
        "ability": "If you were funny today, you cannot die by exile."
    },
    {
        "id": "scapegoat",
        "name": "Scapegoat",
        "team": "traveller",
        "edition": "tb",
        "ability": "If a player of your alignment is executed, you might be executed instead."
    },
    {
        "id": "gnome",
        "name": "Gnome",
        "team": "traveller",
        "edition": "carousel",
        "ability": "All players start knowing a player of your alignment. You may choose to kill anyone who nominates them."
    },
    {
        "id": "bishop",
        "name": "Bishop",
        "team": "traveller",
        "edition": "bmr",
        "ability": "Only the Storyteller can nominate. At least 1 opposing player must be nominated each day."
    },
    {
        "id": "voudon",
        "name": "Voudon",
        "team": "traveller",
        "edition": "bmr",
        "ability": "Only you & the dead can vote. They don't need a vote token to do so. A 50% majority isn't required."
    },
    // {
    //     "id": "angel",
    //     "name": "Angel",
    //     "team": "fabled",
    //     "edition": "fabled",
    //     "ability": "Something bad might happen to whoever is most responsible for the death of a new player."
    // },
    // {
    //     "id": "buddhist",
    //     "name": "Buddhist",
    //     "team": "fabled",
    //     "edition": "fabled",
    //     "ability": "For the first 2 minutes of each day, veteran players may not talk."
    // },
    // {
    //     "id": "deusexfiasco",
    //     "name": "Deus ex Fiasco",
    //     "team": "fabled",
    //     "edition": "carousel",
    //     "ability": "At least once per game, the Storyteller will make a mistake, correct it, and publicly admit to it."
    // },
    // {
    //     "id": "djinn",
    //     "name": "Djinn",
    //     "team": "fabled",
    //     "edition": "fabled",
    //     "ability": "Use the Djinn's special rule. All players know what it is."
    // },
    // {
    //     "id": "doomsayer",
    //     "name": "Doomsayer",
    //     "team": "fabled",
    //     "edition": "fabled",
    //     "ability": "If 4 or more players live, each living player may publicly choose (once per game) that a player of their own alignment dies."
    // },
    // {
    //     "id": "duchess",
    //     "name": "Duchess",
    //     "team": "fabled",
    //     "edition": "fabled",
    //     "ability": "Each day, 3 players may choose to visit you. At night*, each visitor learns how many visitors are evil, but 1 gets false info."
    // },
    // {
    //     "id": "ferryman",
    //     "name": "Ferryman",
    //     "team": "fabled",
    //     "edition": "carousel",
    //     "ability": "On the final day, all dead players regain their vote token."
    // },
    // {
    //     "id": "fibbin",
    //     "name": "Fibbin",
    //     "team": "fabled",
    //     "edition": "fabled",
    //     "ability": "Once per game, 1 good player might get incorrect information."
    // },
    // {
    //     "id": "fiddler",
    //     "name": "Fiddler",
    //     "team": "fabled",
    //     "edition": "fabled",
    //     "ability": "Once per game, the Demon secretly chooses an opposing player: all players choose which of these 2 players win."
    // },
    // {
    //     "id": "hellslibrarian",
    //     "name": "Hell's Librarian",
    //     "team": "fabled",
    //     "edition": "fabled",
    //     "ability": "Something bad might happen to whoever talks when the Storyteller has asked for silence."
    // },
    // {
    //     "id": "revolutionary",
    //     "name": "Revolutionary",
    //     "team": "fabled",
    //     "edition": "fabled",
    //     "ability": "2 neighboring players are known to be the same alignment. Once per game, 1 of them registers falsely."
    // },
    // {
    //     "id": "sentinel",
    //     "name": "Sentinel",
    //     "team": "fabled",
    //     "edition": "fabled",
    //     "ability": "There might be 1 extra or 1 fewer Outsider in play."
    // },
    // {
    //     "id": "spiritofivory",
    //     "name": "Spirit of Ivory",
    //     "team": "fabled",
    //     "edition": "fabled",
    //     "ability": "There can't be more than 1 extra evil player."
    // },
    // {
    //     "id": "toymaker",
    //     "name": "Toymaker",
    //     "team": "fabled",
    //     "edition": "fabled",
    //     "ability": "The Demon may choose not to attack & must do this at least once per game. Evil players get normal starting info."
    // },
    // {
    //     "id": "bootlegger",
    //     "name": "Bootlegger",
    //     "team": "loric",
    //     "edition": "loric",
    //     "ability": "This script has homebrew characters or rules."
    // },
    // {
    //     "id": "bigwig",
    //     "name": "Big Wig",
    //     "team": "loric",
    //     "edition": "loric",
    //     "ability": "Each nominee chooses a player: until voting, only they may speak & they are mad the nominee is good or they might die."
    // },
    // {
    //     "id": "gardener",
    //     "name": "Gardener",
    //     "team": "loric",
    //     "edition": "loric",
    //     "ability": "The Storyteller assigns 1 or more players' characters."
    // },
    // {
    //     "id": "hindu",
    //     "name": "Hindu",
    //     "team": "loric",
    //     "edition": "loric",
    //     "ability": "The first 4 players to die are immediately reincarnated as Travellers of the same alignment."
    // },
    // {
    //     "id": "pope",
    //     "name": "Pope",
    //     "team": "loric",
    //     "edition": "loric",
    //     "ability": "There are duplicate good characters in play. They might also be bluffs."
    // },
    // {
    //     "id": "stormcatcher",
    //     "name": "Storm Catcher",
    //     "team": "loric",
    //     "edition": "loric",
    //     "ability": "Name a good character. If in play, they can only die by execution, but evil players learn which player it is."
    // },
    // {
    //     "id": "tor",
    //     "name": "Tor",
    //     "team": "loric",
    //     "edition": "loric",
    //     "ability": "Players don't know their character or alignment. They learn them when they die."
    // },
    // {
    //     "id": "ventriloquist",
    //     "name": "Ventriloquist",
    //     "team": "loric",
    //     "edition": "loric",
    //     "ability": "If a player is mad as a fresh character during their nomination, they might not die if executed today."
    // },
    // {
    //     "id": "zenomancer",
    //     "name": "Zenomancer",
    //     "team": "loric",
    //     "edition": "loric",
    //     "ability": "One or more players each have a goal. When achieved, that player learns a piece of true info."
    // }
]