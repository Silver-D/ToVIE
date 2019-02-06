/*
	Data IDs to names parsed from https://hyouta.com/vesperia/index.php
	Never would have been possible without their site. Simply amazing resource.
	
*/

var db = { };

db.skills =
{
	'0075': "Ability Plus",
	'00d2': "Absorption",
	'01a7': "Advance Ability Plus",
	'017e': "Aerial Ability Plus",
	'010f': "Aerial Armor",
	'0107': "Aerial Artes",
	'0108': "Aerial Artes 2",
	'0109': "Aerial Artes 3",
	'000e': "Aerial Combo",
	'0104': "Aerial Combo 2",
	'0105': "Aerial Combo 3",
	'011c': "Aerial Dash",
	'0118': "Aerial Finish",
	'010c': "Aerial Force",
	'010e': "Aerial Guard",
	'017f': "Aerial High Ability Plus",
	'0180': "Aerial Hyper Ability Plus",
	'0116': "Aerial Jump",
	'0117': "Aerial Jump 2",
	'010d': "Aerial Magic Guard",
	'0114': "Aerial OVL",
	'0119': "Aerial Step",
	'011d': "Aerial Tension",
	'003c': "Alembic",
	'00a2': "Angel's Tear",
	'015d': "Anti Break",
	'0026': "Anti Element",
	'008e': "Anti Magic",
	'0101': "Appeal Target",
	'0186': "Arte Smash",
	'006d': "Assassin",
	'0031': "Athenor",
	'00ad': "Attack Arte Charge",
	'00a0': "Auto Medicine",
	'016c': "Auto Medicine 2",
	'006c': "Axes Up ",
	'0059': "BA Force",
	'0035': "Backstep",
	'013a': "Bark",
	'015b': "Bastion",
	'01b0': "Blonde Universe",
	'01a6': "Brainiac Combo Magic",
	'019f': "Brainiac Combo Magic 2",
	'01a9': "Brainiac Grace",
	'01a8': "Brainiac Magic Combo",
	'01c2': "Brainiac Magic Selection",
	'019e': "Brainiac Speed Cast",
	'00af': "Break Down",
	'00a8': "Bug Busters",
	'0177': "Bullfight Mind",
	'0160': "Burst Guard",
	'0166': "Burst Hold",
	'01ab': "Burst Security",
	'0188': "Burst Smash",
	'0016': "Chain",
	'00e9': "Change Style",
	'00ea': "Change Style 2",
	'00ae': "Charge Hold",
	'016e': "Charge Hold 2",
	'00a5': "Charge Smash",
	'0083': "Charming Thrust",
	'0100': "Chivalry",
	'00e5': "Combat Force",
	'00a9': "Combatir",
	'0063': "Combination",
	'0064': "Combination 2",
	'0065': "Combination 3",
	'0038': "Combo Force",
	'0174': "Combo Magic",
	'0175': "Combo Magic 2",
	'003b': "Combo Plus",
	'0072': "Combo Plus 2",
	'0073': "Combo Plus 3",
	'01a5': "Combo Plus Advance",
	'0061': "Combo Voltage",
	'002a': "Condition Guard",
	'00e4': "Convert Absorption",
	'00fe': "Cooking Plus",
	'00be': "Coward",
	'00a6': "Critical",
	'00a4': "Critical Break",
	'001e': "Critical Guard",
	'01a0': "Critical Hitter",
	'00cc': "Critical Magic",
	'00c4': "Critical Recover",
	'01c0': "Critical Upgrade",
	'019d': "Critical Upgrade 2",
	'000a': "Cross Counter",
	'0030': "Crucible",
	'014d': "Cure Area",
	'008a': "Cure Guard",
	'012d': "Dark Breath",
	'0134': "Dash",
	'0133': "Dash Cancel",
	'0018': "Defend",
	'0019': "Defend 2",
	'001a': "Defend 3",
	'0087': "Defend 4",
	'0070': "Defend Artes",
	'01aa': "Defend Artes Advance",
	'0157': "Defend Conversion",
	'00f2': "Defend T",
	'0147': "Devotion",
	'005d': "Dispersion",
	'012e': "Double Appeal",
	'00b2': "Down Hit",
	'006b': "Dragon Buster",
	'01b1': "Dream Couple",
	'005b': "EXP Share",
	'0007': "Elemental",
	'00cf': "Elemental Effect",
	'012a': "Encounter Bonus",
	'00e6': "Endless Shot",
	'0025': "Endure",
	'014a': "Energy Coat",
	'0110': "Escape Jump",
	'00f4': "Escape Step",
	'009c': "Eternal Support",
	'00c2': "Eternal Weakness",
	'0032': "Evade",
	'0033': "Evade 2",
	'0034': "Evade 3",
	'0127': "Evade 4",
	'0092': "Extend Guard",
	'0095': "Extra Combo I",
	'0096': "Extra Combo II",
	'0097': "Extra Combo III",
	'000b': "FS Bonus",
	'000c': "FS Bonus 2",
	'01be': "Fatal Exceed",
	'007d': "Fatal Finish",
	'007e': "Fatal Finish Plus",
	'01ad': "Female Company",
	'019b': "Fighting Lens",
	'01bf': "Form Hold",
	'019a': "Form Selection",
	'013e': "Full Check",
	'003d': "Gale",
	'0196': "Gambler's Soul",
	'0071': "Glory",
	'005e': "Great Deluge",
	'0091': "Guard All",
	'016a': "Guard All 2",
	'0090': "Guard Artes",
	'018c': "Guard Artes 2",
	'0089': "Guard Impact",
	'0021': "Guard Plus",
	'0086': "Guard Plus 2",
	'0028': "Guard Reflect",
	'0093': "Guard Supply",
	'008b': "Guardian",
	'018d': "Guarding Cast",
	'018b': "Guarding Skill",
	'000f': "HP Condition",
	'0011': "HP Condition 2",
	'0010': "HP Condition 3",
	'0012': "HP Condition 4",
	'0051': "HP Recover",
	'0150': "HP Relax",
	'0190': "HP Surge",
	'0013': "Half Damage",
	'004c': "Happiness",
	'004d': "Happiness 2",
	'004e': "Happiness 3",
	'0178': "Headhunter",
	'00bf': "Heal Supply",
	'0179': "Healing Arrow",
	'017a': "Healing Arrow 2",
	'00b4': "Healing Arte Charge",
	'00a1': "Healing Artes",
	'00f0': "Heavy Arrow",
	'00f5': "Heavy Energy",
	'0008': "Heavy Hit",
	'00ca': "Heavy Magic",
	'00b3': "Heavy Weight",
	'0017': "Hell Fire",
	'0144': "Hero",
	'0076': "High Ability Plus",
	'017c': "High Aerial Tension",
	'0106': "High Combo",
	'016f': "High Fatal Tension",
	'0197': "High Form Change",
	'0168': "High Heal",
	'0172': "High Magic Tension",
	'0184': "High Mobility",
	'017b': "High Taunt",
	'00f6': "High Tension",
	'0066': "High Tension",
	'006a': "Hit Plus",
	'012c': "Holy Breath",
	'00e7': "Hunter",
	'00ff': "Hunter 2",
	'0123': "Hunter's Fang",
	'0077': "Hyper Ability Plus",
	'017d': "Hyper Aerial Tension",
	'0170': "Hyper Fatal Tension",
	'019c': "Hyper Form Change",
	'018e': "Hyper Guard",
	'0169': "Hyper Heal",
	'018f': "Hyper Magic Guard",
	'0173': "Hyper Magic Tension",
	'0067': "Hyper Tension",
	'0024': "Immunity",
	'00f8': "In Step",
	'0138': "Inspector",
	'0135': "Item Amplifier",
	'0136': "Item Amplifier 2",
	'0039': "Item Pro",
	'0185': "Item Pro 2",
	'0131': "Item Thrower",
	'0113': "Jump Cancel",
	'0192': "Just Soul",
	'01ae': "Kids' Association",
	'011a': "Landing ",
	'015a': "Landing Step",
	'00d7': "Levitation",
	'004a': "Life Healer",
	'004f': "Life Up",
	'00ee': "Light Force",
	'00cb': "Light Magic",
	'0199': "Limit Fever",
	'00d9': "Liner Shot",
	'007f': "Link Slash",
	'014b': "Lion Heart",
	'0082': "Loner",
	'00fb': "Long Range",
	'00fd': "Long Step",
	'009d': "Lovely Dog",
	'0140': "Lucky Call",
	'003a': "Lucky End",
	'0137': "Lucky Item",
	'0124': "Lucky Limit",
	'00e0': "Lucky Magic",
	'013c': "Lucky Plus",
	'013d': "Lucky Plus 2",
	'0056': "Lucky Soul",
	'0122': "Lucky Spear",
	'0004': "Magic",
	'0005': "Magic 2",
	'0006': "Magic 3",
	'00c5': "Magic 4",
	'00da': "Magic Combo",
	'001f': "Magic Guard",
	'002b': "Magic Guard Plus",
	'0149': "Magic Shield",
	'0187': "Magic Smash",
	'00ed': "Magic T",
	'01af': "Marksmen's Society",
	'01b2': "Mascot Soul",
	'009f': "Medical Boost",
	'00bd': "Medical Smash",
	'00b9': "Member Taunt",
	'0050': "Mental Up",
	'00ab': "Mighty Charge",
	'0015': "Minimum Damage",
	'0126': "Mobile Armor",
	'00ba': "Motion Change",
	'0181': "Multi-Item",
	'018a': "Natural Recover",
	'0154': "No Artes Plus",
	'0037': "O.L. Boost",
	'0054': "OVL Bonus",
	'0055': "OVL Bonus 2",
	'014e': "OVL Boost Area",
	'0161': "OVL Concentrate",
	'0198': "OVL Gamble",
	'015f': "OVL Plus",
	'0182': "OVL Plus 2",
	'0189': "OVL Recover",
	'0151': "OVL Relax",
	'01a1': "OVL Roulette: HP",
	'01a3': "OVL Roulette: OVL",
	'01a2': "OVL Roulette: TP",
	'0046': "OVL Taunt",
	'0047': "OVL Taunt 2",
	'0163': "OVL Team",
	'0164': "OVL Team 2",
	'0165': "OVL Team 3",
	'006f': "One Man Show",
	'00c7': "Over Cast",
	'00c8': "Over Cast 2",
	'00c9': "Over Cast 3",
	'00d8': "Overheat",
	'00d0': "Perfect Magic",
	'0167': "Perfect Tension",
	'00b6': "Play Dead",
	'009b': "Pow Hammer Revenge",
	'00f1': "Power Shot",
	'0014': "Quarter Damage",
	'00f9': "Quick Arrow",
	'012b': "Quick Turn",
	'016b': "Rallying Cast",
	'00d5': "Randomize",
	'00aa': "Raynard",
	'0057': "Rebirth",
	'0058': "Rebirth 2",
	'00d4': "Recast",
	'0036': "Recover",
	'0162': "Recovering Guard",
	'0115': "Recovery Artes",
	'00e3': "Reducer",
	'000d': "Reflect",
	'01a4': "Reincarnation",
	'00ce': "Resilience",
	'001b': "Resist",
	'001c': "Resist 2",
	'001d': "Resist 3",
	'0088': "Resist 4",
	'0158': "Resist Conversion",
	'00f3': "Resist T",
	'0048': "Resurrect",
	'00ef': "Revenge Arrow",
	'00d6': "Revenge Spell",
	'00d3': "Rhythm",
	'005a': "Rise Attack",
	'0193': "Rival Surge",
	'0194': "Rival Surge 2",
	'0121': "Rod",
	'0112': "Rod Master",
	'0020': "Roll",
	'00b7': "Run",
	'0128': "Runners",
	'0129': "Runners 2",
	'014f': "S. Spell Area",
	'0195': "Safe Bet",
	'00c0': "Safety",
	'013f': "Scanning",
	'00a7': "Second Attack",
	'0148': "Shield",
	'0145': "Shine",
	'00a3': "Sleep 'n Heal",
	'0084': "Sleepy Thrust",
	'0111': "Spear Master",
	'015c': "Special",
	'00db': "Speed Cast",
	'00ac': "Speed Charge",
	'012f': "Speed Up",
	'0130': "Speed Up 2",
	'0132': "Speedy Item",
	'00dc': "Spell Charge",
	'00dd': "Spell Charge 2",
	'00de': "Spell Charge 3",
	'00df': "Spell End",
	'00e1': "Spirit Absorb",
	'004b': "Spirit Healer",
	'0041': "Spirits",
	'0042': "Spirits 2",
	'0043': "Spirits 3",
	'00e2': "Spirits 4",
	'01bc': "Stand Alone",
	'0049': "Stat Boost",
	'0029': "Status Guard",
	'0125': "Steal Plus",
	'00b1': "Steel Defense",
	'0027': "Step Away",
	'00fc': "Step Cancel",
	'01c1': "Step Cancel F",
	'0062': "Step Combo",
	'01ac': "Sticky Fingers",
	'0141': "Stinger Blow",
	'0001': "Strength",
	'0002': "Strength 2",
	'0003': "Strength 3",
	'0060': "Strength 4",
	'00ec': "Strength T",
	'0009': "Stun Magic",
	'0074': "Super Chain",
	'0079': "Super Chain 2",
	'007a': "Super Chain 3",
	'0078': "Super Chain 4",
	'007b': "Super Chain 5",
	'008c': "Super Guard",
	'008d': "Super Resist",
	'00c3': "Support Arte Charge",
	'0094': "Survive",
	'016d': "Sustained Critical",
	'0069': "Swords Up",
	'00e8': "TP Attack",
	'002c': "TP Condition",
	'002e': "TP Condition 2",
	'002d': "TP Condition 3",
	'002f': "TP Condition 4",
	'0052': "TP Recover",
	'0152': "TP Support",
	'0191': "TP Surge",
	'0044': "Taunt",
	'00b5': "Taunt & Evade",
	'0045': "Taunt 2",
	'00b8': "Taunt Gamble",
	'0146': "Team Work",
	'0103': "Technical Half",
	'011e': "Temptation",
	'011b': "Touch Down",
	'0139': "Treasure Fangs",
	'0068': "Ultimate Tension",
	'0159': "Vacance",
	'003e': "Vitality",
	'003f': "Vitality 2",
	'0040': "Vitality 3",
	'00bb': "Vitality 4",
	'0022': "Void Attack",
	'0023': "Void Magic",
};

db.items =
{
	'0091': "765kg Hammer",
	'013e': "Absolute",
	'0059': "Abyssion",
	'010d': "Aegis",
	'0197': "Aer Fragment",
	'0082': "Ahriman",
	'0212': "Alexandrite",
	'0164': "Amber Cloak",
	'020e': "Amethyst",
	'01d6': "Amulet",
	'076f': "Anchor Circlet",
	'01c9': "Ancient Ribbon",
	'00b8': "Anubis",
	'0561': "Anubis +1",
	'01ed': "Aqua Cape",
	'020c': "Aquamarine",
	'0046': "Ares",
	'06f1': "Aries",
	'0713': "Aries +1α",
	'0714': "Aries +1β",
	'019a': "Armet Helm",
	'0690': "Arredoval",
	'00ba': "Aspion",
	'00f1': "Asura",
	'05c4': "Asura +1α",
	'0790': "Asura +1β",
	'01dc': "Attack Ring",
	'00b0': "Avenger's Scroll",
	'0550': "Avenger's Scroll +1",
	'06b6': "Avenger's Scroll +2",
	'00a8': "BC Rod",
	'0070': "Bahamut's Tear",
	'04d4': "Bahamut's Tear +1",
	'022a': "Barbatos' Ring",
	'006e': "Bardiche",
	'04d1': "Bardiche +1",
	'0044': "Basilard",
	'04e2': "Basilard +1α",
	'078a': "Basilard +1β",
	'003d': "Bastard Sword",
	'035f': "Bastard Sword +1α",
	'0360': "Bastard Sword +1β",
	'0154': "Battle Guard",
	'011f': "Battle Knife",
	'013c': "Battle Suit",
	'0038': "Battle Sword",
	'04af': "Battle Sword +1",
	'012e': "Beast King",
	'007e': "Beast Slayer",
	'0189': "Belly Warmer",
	'06e1': "Berserker Heart",
	'0113': "Black Leather",
	'020f': "Black Onyx",
	'044b': "Blade of Sins: Susanoh",
	'0445': "Blazor Edge Abyssion",
	'00df': "Blood Trigger",
	'05a4': "Blood Trigger +1α",
	'05a5': "Blood Trigger +1β",
	'0181': "Bloody Coat",
	'021d': "Blue Dice",
	'0037': "Blue Dragon",
	'04ae': "Blue Dragon +1",
	'01c4': "Blue Ribbon",
	'021b': "Blue Sephira",
	'0306': "Blue Talisman",
	'0145': "Body Paint",
	'006f': "Bone Slasher",
	'04d2': "Bone Slasher +1",
	'0123': "Boots",
	'06e4': "Bouquet of Roses",
	'01a4': "Brave Helm",
	'005c': "Bravior",
	'00dc': "Breaker Bow",
	'0152': "Breast Guard",
	'013b': "Breastplate",
	'0087': "Brionac",
	'01a8': "Bronze Circlet",
	'0106': "Buckler",
	'00d0': "Burn Spreader",
	'0118': "Burning Blood",
	'009f': "Caduceus",
	'0543': "Caduceus +1",
	'004e': "Caladbolg",
	'0449': "Calamity Chain: Uroboros",
	'06f7': "Cancus",
	'071b': "Cancus +1α",
	'0795': "Cancus +1β",
	'01e8': "Cape",
	'06f9': "Capria",
	'071d': "Capria +1α",
	'071e': "Capria +1β",
	'01aa': "Cat Hair Band",
	'00aa': "Cat Teaser",
	'00d4': "Celestial Star",
	'058c': "Celestial Star +1",
	'006b': "Celtis",
	'04f4': "Celtis +1α",
	'07b0': "Celtis +1β",
	'00bb': "Chain",
	'03b3': "Chain +1",
	'0129': "Chain Collar",
	'014f': "Chain Guard",
	'0138': "Chain Mail",
	'00bd': "Chain Whip",
	'06b7': "Chain Whip +1",
	'0052': "Claiomh Solais",
	'0163': "Cloak",
	'0167': "Cocktail Dress",
	'0056': "Colossus",
	'0622': "Comet Light",
	'002b': "Compact Sword",
	'0671': "Compact Sword +1",
	'077f': "Corbis",
	'01bd': "Cowboy Hat",
	'0067': "Crescent Axe",
	'067b': "Crescent Axe +1",
	'0068': "Crimson Axe",
	'04f2': "Crimson Axe +1α",
	'04f3': "Crimson Axe +1β",
	'00ee': "Crimson Phoenix",
	'05b8': "Crimson Phoenix +1",
	'05b9': "Crimson Phoenix +2α",
	'05ba': "Crimson Phoenix +2β",
	'00e0': "Crusader 13",
	'0125': "Crystal Heels",
	'06ea': "Dagsian Claw",
	'0040': "Damascus Sword",
	'0051': "Dark Avenger",
	'04ee': "Dark Avenger +1",
	'02ff': "Dark Crystal",
	'01f6': "Dark Seal",
	'008d': "Deadly Horn",
	'00b6': "Death Contrast",
	'055d': "Death Contrast +1",
	'055e': "Death Contrast +2α",
	'06b3': "Death Contrast +2β",
	'007c': "Death Scythe",
	'00d5': "Death Slinger",
	'058f': "Death Slinger +1α",
	'0590': "Death Slinger +1β",
	'00a0': "Deck Brush",
	'0115': "Defender",
	'00da': "Defender Bow",
	'01dd': "Defense Ring",
	'02fa': "Dein Nomos",
	'01f7': "Demon's Seal",
	'06e5': "Demonic Sword Ogre Fang",
	'022b': "Dhaos' Cape",
	'0216': "Diamond",
	'015b': "Diamond Guard",
	'021c': "Dice",
	'00e1': "Divine Cannon",
	'0188': "Dragon Coat",
	'01a3': "Dragon Helm",
	'0148': "Dragon Mail",
	'0195': "Dragon Protector",
	'0126': "Dragon Skin",
	'009b': "Dragon Tooth",
	'0124': "Dragoon Boots",
	'01d1': "Drain Charm",
	'01d0': "Drain Ward",
	'0702': "Dried Squid",
	'005e': "Droite Sword",
	'019e': "Duel Helm",
	'0084': "Dunamis",
	'051b': "Dunamis +1α",
	'06ae': "Dunamis +1β",
	'01ef': "Earth Cape",
	'0770': "Eclipse Circlet",
	'01e2': "Effecti Ring",
	'0172': "Elder Cloak",
	'0174': "Elemental Cloak",
	'01b3': "Elemental Goggles",
	'015c': "Elemental Guard",
	'01c7': "Elemental Ribbon",
	'00de': "Elven Bow",
	'017d': "Elven Coat",
	'040e': "Emerald Ring",
	'0176': "Empress Dress",
	'00af': "Endless Heart",
	'03ac': "Endless Heart +1",
	'00a9': "Energy Wand",
	'077e': "Entelexeia Sword: Seven-Branched Blade",
	'0036': "Epee",
	'0359': "Epee +1",
	'0039': "Estoc",
	'04b1': "Estoc +1",
	'012d': "Eternal Ring",
	'00b3': "Ever Blue",
	'0556': "Ever Blue +1α",
	'0557': "Ever Blue +1β",
	'0079': "Executioner",
	'01d9': "Faerie Ring",
	'00cb': "Falcon Needle",
	'0578': "Falcon Needle+1",
	'0579': "Falcon Needle+2α",
	'057a': "Falcon Needle+2β",
	'005d': "False Dein Nomos",
	'0193': "Fancy Belly Warmer",
	'01c5': "Fancy Ribbon",
	'0166': "Feather Cloak",
	'0179': "Feather Coat",
	'06ca': "Final Symbol",
	'0202': "Fine Boots",
	'0053': "Flamberge",
	'01ec': "Flare Cape",
	'06f5': "Flay Mars",
	'0718': "Flay Mars +1α",
	'0792': "Flay Mars +1β",
	'01df': "Force Ring",
	'009d': "Forte Staff",
	'0541': "Forte Staff +1α",
	'0542': "Forte Staff +1β",
	'0780': "Fox Spirit Blade Corbis",
	'0065': "Francisca",
	'009a': "Full Metal Staff",
	'0140': "Full Plate",
	'0086': "Gae Bolg",
	'051e': "Gae Bolg +1α",
	'051f': "Gae Bolg +1β",
	'0071': "Gaia Cleaver",
	'00cf': "Gale Spreader",
	'0117': "Garm Fang",
	'020b': "Garnet",
	'005f': "Gauche Sword",
	'06fe': "Geminio",
	'0721': "Geminio +1α",
	'0722': "Geminio +1β",
	'076a': "General's Armor",
	'076e': "General's Helm",
	'012c': "Gladiator",
	'0035': "Gladius",
	'0356': "Gladius +1",
	'0075': "Glasya Labolas",
	'0161': "Glorious Guard",
	'01a5': "Glorious Helm",
	'00c2': "Glowing Ribbon",
	'056d': "Glowing Ribbon +1α",
	'056e': "Glowing Ribbon +1β",
	'0144': "Gold Armor",
	'01b0': "Gold Circlet",
	'0207': "Gold Leggings",
	'0094': "Golden Hammer",
	'01a2': "Golden Helm",
	'0182': "Gothic Cardigan",
	'0170': "Gothic Dress",
	'0159': "Gothic Guard",
	'0141': "Gothic Plate",
	'00a6': "Grand Scepter",
	'0547': "Grand Scepter +1α",
	'0548': "Grand Scepter +1β",
	'0063': "Great Axe",
	'0362': "Great Axe +1",
	'0771': "Great Pirate Symbol",
	'01bb': "Green Beret",
	'0080': "Green Dragon Crescent Blade",
	'00f5': "Grilled Chicken",
	'00c1': "Grim Cardian",
	'056b': "Grim Cardian +1α",
	'056c': "Grim Cardian +1β",
	'06f3': "Growing Earth",
	'0716': "Growing Earth +1",
	'008e': "Guardian Stamp",
	'078b': "Guardian Stamp +1α",
	'078c': "Guardian Stamp +1β",
	'0081': "Gungnir",
	'0516': "Gungnir +1",
	'007f': "Hades",
	'01a7': "Hair Band",
	'0077': "Halberd",
	'0151': "Half Guard",
	'0062': "Hand Axe",
	'009c': "Hanuman's Staff",
	'053f': "Hanuman's Staff +1",
	'0540': "Hanuman's Staff +2α",
	'06af': "Hanuman's Staff +2β",
	'017a': "Hard Leather Coat",
	'0135': "Hard Mail",
	'01ad': "Headdress",
	'01d4': "Heal Bracelet",
	'06e8': "Heart of Hearts",
	'0704': "Heater Shield",
	'008a': "Heavy Maul",
	'0373': "Heavy Maul +1",
	'0185': "Hero Coat",
	'0621': "Hero's Sword",
	'00be': "High Power Yo-yo",
	'0565': "High Power Yo-yo +1",
	'0041': "High Tsurugi",
	'004a': "Highlander",
	'004f': "Holy Avenger",
	'04c5': "Holy Avenger +1",
	'01ac': "Holy Circlet",
	'016b': "Holy Cloak",
	'0184': "Holy Coat",
	'00ea': "Holy Raven",
	'05b2': "Holy Raven +2β",
	'05b0': "Holy Raven+1",
	'05b1': "Holy Raven+2α",
	'01da': "Holy Ring",
	'01f2': "Holy Symbol",
	'007d': "Hotengeki",
	'0227': "Hunter's Monocle",
	'01bc': "Hunting Beret",
	'0119': "Hydronomos",
	'014c': "Hyper Armor",
	'01a6': "Hyper Helm",
	'010b': "Hyperion",
	'00c5': "Hypershock Yo-yo",
	'003a': "Ice Coffin",
	'0674': "Ice Coffin +1α",
	'0675': "Ice Coffin +1β",
	'0162': "Imperial Guard",
	'01fa': "Imperial Prestige",
	'0703': "Imperial Sword of Light Fielacius",
	'044a': "Infernal Angel: Nebilim",
	'0074': "Infinity",
	'06e9': "Infinity Sash",
	'01a9': "Iron Circlet",
	'014e': "Iron Guard",
	'008c': "Iron Hammer",
	'037c': "Iron Hammer +1",
	'0203': "Iron Leggings",
	'0049': "Iron Maiden",
	'04e6': "Iron Maiden +1α",
	'04e7': "Iron Maiden +1β",
	'0137': "Iron Mail",
	'010c': "Iron Plate",
	'018b': "Iron Protector",
	'0199': "Iron Sallet",
	'00c7': "Ivy Blade",
	'00e7': "Jiraiya",
	'05b6': "Jiraiya +1α",
	'05b7': "Jiraiya +1β",
	'0121': "Jitte",
	'06df': "Judex",
	'06fb': "Jupiter",
	'0793': "Jupiter +1α",
	'07b3': "Jupiter +1β",
	'006a': "Kalinga",
	'04cd': "Kalinga +1",
	'00e3': "Karakaze",
	'05ac': "Karakaze +1",
	'002c': "Karolian Hammer",
	'0380': "Karolian Hammer +1",
	'002d': "Karolian Sword",
	'04d8': "Karolian Sword +1",
	'010f': "Katz Guard",
	'06aa': "King Size Bag",
	'00ae': "King Sized Belt",
	'03a6': "King Sized Belt +1",
	'01f1': "King's Cape",
	'0108': "Kite Shield",
	'013d': "Knight Armor",
	'019c': "Knight Helm",
	'0109': "Knight Shield",
	'0768': "Knight Shield F",
	'0031': "Knight Sword",
	'06de': "Knight Sword Spir",
	'01b6': "Knit Cap",
	'0114': "Knuckle Duster",
	'00e2': "Kogarashi",
	'05aa': "Kogarashi +1",
	'00e9': "Kotaro",
	'05af': "Kotaro +1",
	'03eb': "Kotaro +2α",
	'03ec': "Kotaro +2β",
	'004d': "Kris Naga",
	'04e9': "Kris Naga +1α",
	'04ea': "Kris Naga +1β",
	'01b1': "Kritya Circlet",
	'0183': "Kritya Coat",
	'01f8': "Krona's Symbol",
	'00ec': "Kurama",
	'05b3': "Kurama +1α",
	'078f': "Kurama +1β",
	'00ef': "Kylin",
	'05be': "Kylin +1",
	'05bf': "Kylin +2α",
	'05c0': "Kylin +2β",
	'0150': "Lamellar Guard",
	'0139': "Lamellar Leather",
	'0219': "Lapis Lazuli",
	'06a9': "Large Size Bag",
	'0055': "Last Fencer",
	'01d7': "Laurel",
	'0201': "Leather Boots",
	'01e9': "Leather Cape",
	'0178': "Leather Coat",
	'014d': "Leather Guard",
	'0198': "Leather Helm",
	'018a': "Leather Jacket",
	'0134': "Leather Mail",
	'00bc': "Leather Whip",
	'03b6': "Leather Whip +1",
	'0700': "Leoluca",
	'06ed': "Libsia",
	'070c': "Libsia +1α",
	'07b2': "Libsia +1β",
	'06eb': "Lion's Soul",
	'017b': "Long Coat",
	'0030': "Long Sword",
	'0085': "Longinus",
	'011e': "Lovely Cat Dictionary",
	'0196': "Loyal Belly Warmer",
	'00a1': "Mace",
	'0211': "Magic Mist",
	'0168': "Magic Tunic",
	'0190': "Magical Collar",
	'01c8': "Magical Ribbon",
	'01b5': "Magical Tiara",
	'0120': "Main Gauche",
	'076b': "Marine Suit",
	'006c': "Masakari Cleaver",
	'04f7': "Masakari Cleaver +1α",
	'04f8': "Masakari Cleaver +1β",
	'0705': "Master Shield",
	'06cd': "Maximum Dog Symbol",
	'00b9': "Measuring Tape",
	'0128': "Medium Size Bag",
	'06f8': "Mercurias",
	'071c': "Mercurias +1",
	'0058': "Mercurius",
	'016e': "Mermaid Cloak",
	'012b': "Metal Collar",
	'018f': "Metal Jacket",
	'0057': "Meteorite Blade",
	'016d': "Midi Blouse",
	'0156': "Mighty Guard",
	'00b7': "Milky Way",
	'055f': "Milky Way +1",
	'0072': "Minotauros",
	'04fc': "Minotauros +1",
	'06c8': "Miracle Bangle",
	'0171': "Mirage Cloak",
	'01af': "Mirage Crest",
	'06ab': "Misericorde",
	'00e6': "Mizuchi",
	'05d3': "Mizuchi +1α",
	'05d4': "Mizuchi +1β",
	'0093': "Mjolnir",
	'052d': "Mjolnir +1α",
	'052e': "Mjolnir +1β",
	'0173': "Moon Cloak",
	'015d': "Moon Guard",
	'06e0': "Moonlight Aqua",
	'0210': "Moonstone",
	'00a3': "Morning Star",
	'0386': "Morning Star +1",
	'0149': "Mumbane",
	'014a': "Mumbane Aer",
	'00f6': "Murakumo",
	'01f4': "Mystic Mark",
	'01f5': "Mystic Symbol",
	'0206': "Mythril Boots",
	'01ae': "Mythril Circlet",
	'016c': "Mythril Cloak",
	'017c': "Mythril Coat",
	'0157': "Mythril Guard",
	'019f': "Mythril Helm",
	'0142': "Mythril Plate",
	'0194': "Mythril Protector",
	'003f': "Mythril Sword",
	'007b': "Naginata",
	'00d6': "Nebilim",
	'06fa': "Neptune",
	'01a1': "Nightmare Helm",
	'01bf': "Ninja Dog Mask",
	'0127': "Normal Size Bag",
	'00c0': "Nova",
	'0569': "Nova +1α",
	'056a': "Nova +1β",
	'0095': "Oar",
	'0066': "Ogre Axe",
	'04cc': "Ogre Axe +1",
	'003e': "Ogre Sword",
	'04b4': "Ogre Sword +1",
	'00e5': "Ohka",
	'05ad': "Ohka +1",
	'00c4': "One World",
	'0571': "One World +1",
	'020d': "Opal",
	'0110': "Order Shield",
	'01f9': "Order of the Imperial Honor",
	'00f2': "Orochi",
	'05c7': "Orochi +1",
	'05c8': "Orochi +2α",
	'05c9': "Orochi +2β",
	'01f0': "Paladin Cape",
	'01cd': "Paralysis Charm",
	'01cc': "Paralysis Ward",
	'06ff': "Perceus",
	'00b1': "Perfect Green",
	'0552': "Perfect Green +1α",
	'0553': "Perfect Green +1β",
	'020a': "Persian Boots",
	'0158': "Phoenix Guard",
	'0090': "Pile Driver",
	'0527': "Pile Driver +1α",
	'0528': "Pile Driver +1β",
	'01ba': "Pirate Hat",
	'070a': "Pirate's Gun: Black Thunder",
	'0708': "Pirate's Gun: Cerulean",
	'0706': "Pirate's Gun: Maiden Battle",
	'0707': "Pirate's Gun: Scarlet Splendor",
	'0709': "Pirate's Gun: White Wave",
	'06ec': "Pirate's Knife",
	'070b': "Pirate's Knife +1",
	'076c': "Pirate's Suit",
	'06ef': "Pisca",
	'070f': "Pisca +1α",
	'0710': "Pisca +1β",
	'01b2': "Platinum Circlet",
	'016f': "Platinum Cloak",
	'01b9': "Pointed Hat",
	'01cb': "Poison Charm",
	'01ca': "Poison Ward",
	'01c1': "Pretty Ribbon",
	'015a': "Princess Guard",
	'0160': "Prism Protector",
	'01de': "Protect Ring",
	'00b5': "Psychedelica",
	'055a': "Psychedelica +1α",
	'078e': "Psychedelica +1β",
	'01c2': "Purple Ribbon",
	'0111': "Queen of Hearts",
	'0186': "Queen's Coat",
	'00bf': "Queen's Whip",
	'0567': "Queen’s Whip +1α",
	'0568': "Queen’s Whip +1β",
	'00d1': "Quick Trigger",
	'0585': "Quick Trigger +1α",
	'0586': "Quick Trigger +1β",
	'01fe': "Rabbit's Foot",
	'06e2': "Radiant Star",
	'018d': "Rain Cape",
	'00d2': "Rapid Shot",
	'0033': "Rapier",
	'0209': "Rare Boots",
	'017f': "Rare Coat",
	'01a0': "Rare Helm",
	'0143': "Rare Plate",
	'015e': "Rare Protector",
	'0047': "Real Knight Sword",
	'021e': "Rebirth Doll",
	'01e3': "Rebirth Ring",
	'01e1': "Reflect Ring",
	'0146': "Reflex",
	'0092': "Rending Drill Hammer",
	'01e0': "Resist Ring",
	'01c0': "Ribbon",
	'0136': "Ring Mail",
	'0050': "Riot",
	'04ec': "Riot +1α",
	'04ed': "Riot +1β",
	'06e7': "Rising Flame",
	'06c9': "Risky Ring",
	'00b2': "Rivet Belt",
	'06f4': "Roasted Fish",
	'07b1': "Roasted Fish +1",
	'00ab': "Rod",
	'06b2': "Rod +1",
	'00c3': "Rose Whip",
	'0107': "Round Shield",
	'0153': "Royal Guard",
	'0213': "Ruby",
	'00a5': "Ruby Wand",
	'0545': "Ruby Wand +1α",
	'0546': "Ruby Wand +1β",
	'0043': "Rune Blade",
	'04b9': "Rune Blade +1",
	'0175': "Rune Cloak",
	'0187': "Rune Coat",
	'015f': "Rune Jacket",
	'0147': "Rune Mail",
	'002f': "Saber",
	'0769': "Sacred Armor",
	'00c8': "Sacred Chain",
	'076d': "Sacred Helm",
	'019b': "Safety Helm",
	'010e': "Sanctuary",
	'0447': "Sand Spear: Zarich",
	'02f5': "Sandals",
	'00ac': "Sash",
	'039a': "Sash +1",
	'06fd': "Saturn Claw",
	'0720': "Saturn Claw +1",
	'00ad': "Scarf",
	'03a0': "Scarf +1",
	'002e': "Scimitar",
	'06fc': "Scorpia",
	'071f': "Scorpia +1α",
	'0796': "Scorpia +1β",
	'0061': "Second Star",
	'003c': "Sentinel",
	'04b2': "Sentinel +1",
	'021a': "Sephira",
	'06e6': "Serpent Spear Dragunes",
	'0098': "Serpent Staff",
	'077d': "Seven-Branched Blade",
	'0048': "Shadow Fang",
	'04be': "Shadow Fang +1",
	'0099': "Shakujo",
	'01b7': "Shapka",
	'06f2': "Shark's Tail",
	'0715': "Shark's Tail +1α",
	'0791': "Shark's Tail +1β",
	'004c': "Shiden",
	'0623': "Shield of Valor",
	'005a': "Shinai",
	'0083': "Shiva",
	'022c': "Shizel's Necklace",
	'0165': "Silk Cloak",
	'01ab': "Silver Circlet",
	'0169': "Silver Cloak",
	'0180': "Silver Coat",
	'0073': "Silver Edge",
	'04fe': "Silver Edge +1α",
	'04ff': "Silver Edge +1β",
	'0155': "Silver Guard",
	'01be': "Silver Hat",
	'019d': "Silver Helm",
	'0205': "Silver Leggings",
	'013f': "Silver Mail",
	'0192': "Silver Protector",
	'0042': "Sinclair Saber",
	'0789': "Sinclair Saber +1",
	'00d7': "Slingshot",
	'00d8': "Smash Bow",
	'0593': "Smash Bow +1α",
	'06b5': "Smash Bow +1β",
	'0594': "Smash Bow +2",
	'00ca': "Snipe Xiphos",
	'03c6': "Snipe Xiphos +1α",
	'03c7': "Snipe Xiphos +1β",
	'011c': "Song of Gaia",
	'00eb': "Sonic Cleaver",
	'05ca': "Sonic Cleaver +1α",
	'05cb': "Sonic Cleaver +1β",
	'0444': "Soul Blade Mercurius",
	'00d9': "Spike Bow",
	'012a': "Spike Collar",
	'008b': "Spike Hammer",
	'0376': "Spike Hammer +1α",
	'0377': "Spike Hammer +1β",
	'010a': "Spike Shield",
	'004b': "Spine Ripper",
	'04c1': "Spine Ripper +1",
	'008f': "Spinning Drill Hammer",
	'0191': "Spiny Jacket",
	'01d5': "Spirit Bangle",
	'01db': "Spirit Ring",
	'01f3': "Spirit Symbol",
	'00dd': "Splash Bow",
	'017e': "Splash Dress",
	'013a': "Splint Mail",
	'0701': "Star Blade Tautus",
	'0624': "Star Light",
	'014b': "Star Mail",
	'00a7': "Star Rod",
	'0549': "Star Rod +1α",
	'078d': "Star Rod +1β",
	'018e': "Steel Protector",
	'0032': "Stiletto",
	'003b': "Stinger",
	'04db': "Stinger +1",
	'01cf': "Stone Charm",
	'00ed': "Stone Slasher",
	'05bb': "Stone Slasher +1",
	'05bc': "Stone Slasher +2α",
	'05bd': "Stone Slasher +2β",
	'01ce': "Stone Ward",
	'011a': "Storm Bringer",
	'00cd': "Storm Slayer",
	'057d': "Storm Slayer +1α",
	'057e': "Storm Slayer +1β",
	'01fb': "Strange Mark",
	'01b8': "Straw Hat",
	'00d3': "Strike Eagle",
	'0589': "Strike Eagle +1α",
	'058a': "Strike Eagle +1β",
	'00db': "Strike Horn Bow",
	'01c6': "Striped Ribbon",
	'01d2': "Stun Bracelet",
	'01d3': "Stun Talisman",
	'00f4': "Susanoh",
	'0122': "Sword Breaker",
	'00c6': "Sword Whip",
	'0575': "Sword Whip +1α",
	'0576': "Sword Whip +1β",
	'06e3': "Sword of Prayer Rag Querion",
	'006d': "Tabar",
	'06ad': "Tabar +1α",
	'0794': "Tabar +1β",
	'00e4': "Takemikazuchi",
	'05d1': "Takemikazuchi: Blast",
	'05d2': "Takemikazuchi: Blast +1α",
	'0683': "Takemikazuchi: Blast +1β",
	'05cf': "Takemikazuchi: Flare",
	'05d0': "Takemikazuchi: Flare +1α",
	'0682': "Takemikazuchi: Flare +1β",
	'0305': "Talisman",
	'00e8': "Tama-hagane",
	'05ae': "Tama-hagane +1",
	'06b8': "Tama-hagane +2α",
	'06b9': "Tama-hagane +2α",
	'01c3': "Tartan Ribbon",
	'01b4': "Terra Crest",
	'011d': "Thanatologos",
	'01ea': "Thief's Cape",
	'018c': "Thief's Jacket",
	'0200': "Thief's Tattoo",
	'00cc': "Transform Bow",
	'057b': "Transform Bow +1α",
	'057c': "Transform Bow +1β",
	'0177': "Trench Coat",
	'0097': "Tribal Guard",
	'0078': "Trident",
	'0034': "Tsurugi",
	'04ad': "Tsurugi +1",
	'0218': "Turquoise",
	'00b4': "Twinkle Star",
	'00ce': "Two Form Caestus",
	'0580': "Two Form Caestus +1α",
	'06b4': "Two Form Caestus +1β",
	'0116': "Tyrant Fist",
	'06cc': "Ultimate Blue Cape",
	'06cb': "Ultimate Red Cape",
	'009e': "Unicorn Horn",
	'06b0': "Unicorn Horn +1α",
	'06b1': "Unicorn Horn +1β",
	'06f0': "Uracano",
	'0711': "Uracano +1α",
	'0712': "Uracano +1β",
	'0448': "Uroboros",
	'00f0': "Vagabond",
	'05c1': "Vagabond +1",
	'05c2': "Vagabond +2α",
	'05c3': "Vagabond +2β",
	'00c9': "Variable Edge",
	'03c2': "Variable Edge +1α",
	'03c3': "Variable Edge +1β",
	'0786': "Vesperia No. 2",
	'06ee': "Visse",
	'070d': "Visse +1",
	'0054': "Vorpal Sword",
	'06ac': "Vorpal Sword +1",
	'00a2': "Wand",
	'0064': "War Axe",
	'0366': "War Axe +1",
	'007a': "War Harpoon",
	'0508': "War Harpoon +1α",
	'0509': "War Harpoon +1β",
	'0076': "War Pike",
	'0501': "War Pike +1",
	'0096': "War Staff",
	'01ff': "Warrior Symbol",
	'00f3': "Warrior's Principle",
	'05d5': "Warrior's Principle +1",
	'0670': "White Knight Shield",
	'0060': "White Knight Sword",
	'01ee': "Wind Cape",
	'06f6': "Winvy",
	'0719': "Winvy +1α",
	'071a': "Winvy +1β",
	'016a': "Witch Dress",
	'00a4': "Wizard Horn",
	'038a': "Wizard Horn +1α",
	'038c': "Wizard Horn +1β",
	'01fc': "Wonder Symbol",
	'0089': "Wood Maul",
	'0371': "Wood Maul +1",
	'01d8': "World Charm",
	'0446': "Wrath Bringer: Glasya Labolas",
	'011b': "Xaosologos",
	'0069': "Zaghnal",
	'036a': "Zaghnal +1α",
	'036b': "Zaghnal +1β",
	'0088': "Zarich",
	'0045': "Zephyrus",
	'04e4': "Zephyrus +1α",
	'04e5': "Zephyrus +1β",
};
