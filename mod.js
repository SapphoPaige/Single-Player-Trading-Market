const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);

const uniqueitemsFilename = 'global\\excel\\uniqueitems.txt';
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);
const setitemsFilename = 'global\\excel\\setitems.txt';
const setitems = D2RMM.readTsv(setitemsFilename);


uniqueitems.rows.forEach((row) => {
    if (config.allowRedrop) {
      row.nolimit = 1;
    }
  });
  D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);

const itemTypes = {
  'weap': { 'name': 'Weapon', 'min_sock': 1, 'max_sock': 6 },
  'shld': { 'name': 'Shield', 'min_sock': 1, 'max_sock': 4 },
  'tors': { 'name': 'Body Armor', 'min_sock': 1, 'max_sock': 4 },
  'helm': { 'name': 'Helm', 'min_sock': 1, 'max_sock': 3 },
};


if (config.servicesMarket) {
for (let i in itemTypes) {
  cubemain.rows.push({
    'description': `Lazruk Quest`,
    'enabled': 1,
    'version': 100,
    'numinputs': 5,
    'input 1': `${i},mag,nos`,
    'input 2': 'r23',
	'input 3': 'vps',
	'input 4': 'isc',
	'input 5': 'tsc',
    'output': 'useitem',
    'mod 1': 'sock',
    'mod 1 min': 2,
    'mod 1 max': 2,
    '*eol': 0,
  });
}
}


if (config.servicesMarket) {
for (let i in itemTypes) {
  cubemain.rows.push({
    'description': `Lazruk Quest`,
    'enabled': 1,
    'version': 100,
    'numinputs': 5,
    'input 1': `${i},rar,nos`,
    'input 2': 'r23',
	'input 3': 'vps',
	'input 4': 'isc',
	'input 5': 'tsc',
    'output': 'useitem',
    'mod 1': 'sock',
    'mod 1 min': 1,
    'mod 1 max': 1,
    '*eol': 0,
  });
}
}


if (config.servicesMarket) {
for (let i in itemTypes) {
  cubemain.rows.push({
    'description': `Lazruk Quest`,
    'enabled': 1,
    'version': 100,
    'numinputs': 5,
    'input 1': `${i},set,nos`,
    'input 2': 'r23',
	'input 3': 'vps',
	'input 4': 'isc',
	'input 5': 'tsc',
    'output': 'useitem',
    'mod 1': 'sock',
    'mod 1 min': 1,
    'mod 1 max': 1,
    '*eol': 0,
  });
}
}

if (config.servicesMarket) {
for (let i in itemTypes) {
  cubemain.rows.push({
    'description': `Lazruk Quest`,
    'enabled': 1,
    'version': 100,
    'numinputs': 5,
    'input 1': `${i},uni,nos`,
    'input 2': 'r23',
	'input 3': 'vps',
	'input 4': 'isc',
	'input 5': 'tsc',
    'output': 'useitem',
    'mod 1': 'sock',
    'mod 1 min': 1,
    'mod 1 max': 1,
    '*eol': 0,
  });
}
}


if (config.servicesMarket) {
for (let i in itemTypes) {
  cubemain.rows.push({
    'description': `Lazruk Quest`,
    'enabled': 1,
    'version': 100,
    'numinputs': 5,
    'input 1': `${i},nos`,
    'input 2': 'r23',
	'input 3': 'vps',
	'input 4': 'isc',
	'input 5': 'tsc',
    'output': 'useitem',
    'mod 1': 'sock',
    'mod 1 min': itemTypes[i]['max_sock'],
    'mod 1 max': itemTypes[i]['max_sock'],
    '*eol': 0,
  });
}
}


const gemData = [
  { name: 'Amethyst', flawless: 'gzv', perfect: 'gpv' },
  { name: 'Diamond', flawless: 'glw', perfect: 'gpw' },
  { name: 'Emerald', flawless: 'glg', perfect: 'gpg' },
  { name: 'Ruby', flawless: 'glr', perfect: 'gpr' },
  { name: 'Sapphire', flawless: 'glb', perfect: 'gpb' },
  { name: 'Skull', flawless: 'skl', perfect: 'skz' },
  { name: 'Topaz', flawless: 'gly', perfect: 'gpy' }
];

if (config.gemMarket) {
for (const gem of gemData) {
  cubemain.rows.push({
    'description': `Perfect ${gem.name} -->3 Flawless ${gem.name}`,
    'enabled': 1,
    'version': 100,
    'numinputs': 2,
    'input 1': gem.perfect,
    'input 2': 'yps',
    'output': gem.flawless,
    'output b': gem.flawless,
    'output c': gem.flawless,
    'lvl': 100,
    'ilvl': 100,
    '*eol': 0,
  });
}
}


if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "8 Fal 4 Lem -> Ist",
    enabled: 1,
    version: 100,
    numinputs: 12,
    "input 1": "r19,qty=8",
    "input 2": "r20,qty=4",
    "output": "r24",
    "*eol": 0,
  });
}


if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "8 Lem -> Ist",
    enabled: 1,
    version: 100,
    numinputs: 8,
    "input 1": "r20,qty=8",
    "output": "r24",
    "*eol": 0,
  });
}


if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "4 Pul -> Ist",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "r21,qty=4",
    "output": "r24",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "3 Mal 3 Um -> Vex",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r22,qty=3",
    "input 2": "r23,qty=3",
    "output": "r26",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "8 Um -> Vex",
    enabled: 1,
    version: 100,
    numinputs: 8,
    "input 1": "r22,qty=8",
    "output": "r26",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "12 Pul-> Vex",
    enabled: 1,
    version: 100,
    numinputs: 12,
    "input 1": "r21,qty=12",
    "output": "r26",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "8 Mal -> Ohm",
    enabled: 1,
    version: 100,
    numinputs: 8,
    "input 1": "r23,qty=8",
    "output": "r27",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "5 Ist -> Ohm",
    enabled: 1,
    version: 100,
    numinputs: 5,
    "input 1": "r24,qty=5",
    "output": "r27",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "9 Ist -> Lo",
    enabled: 1,
    version: 100,
    numinputs: 9,
    "input 1": "r24,qty=9",
    "output": "r28",
    "*eol": 0,
  });
}


if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "3 Vex -> Lo",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r26,qty=3",
    "output": "r28",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "5 Vex -> Sur",
    enabled: 1,
    version: 100,
    numinputs: 5,
    "input 1": "r26,qty=5",
    "output": "r29",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "9 Vex -> Ber",
    enabled: 1,
    version: 100,
    numinputs: 5,
    "input 1": "r26,qty=9",
    "output": "r30",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "12 Vex -> Jah",
    enabled: 1,
    version: 100,
    numinputs: 5,
    "input 1": "r26,qty=12",
    "output": "r31",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Fal to Lem",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r19,qty=2",
    "output": "r20",
    "*eol": 0,
  });
}


if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Lem to Fal",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r20",
    "output": "r19",
    "output b": "r19",
    "*eol": 0,
  });
}


if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Lem for Pul",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r20,qty=2",
    "output": "r21",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Pul for Lem",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r21",
    "output": "r20",
    "output b": "r20",
    "*eol": 0,
  });
}

if (config.gemMarket) {
  for (let i = 1; i <= 18; i++) {
    const runeCode = `r${String(i).padStart(2, "0")}`;
    cubemain.rows.push({
      description: `10 ${runeCode} -> Pul`,
      enabled: 1,
      version: 100,
      numinputs: 10,
      "input 1": `${runeCode},qty=10`,
      "output": "r21",
      "*eol": 0,
    });
  }
}

if (config.gemMarket) {
  for (let i = 1; i <= 18; i++) {
    const runeCode = `r${String(i).padStart(2, "0")}`;
    cubemain.rows.push({
      description: `${runeCode} + Fal = 3 ${runeCode}`,
      enabled: 1,
      version: 100,
      numinputs: 2,
      "input 1": `${runeCode}`,
      "input 2": "r19",
      "output": `${runeCode}`,
      "output b": `${runeCode}`,
      "output c": `${runeCode}`,
      "*eol": 0,
    });
  }
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Diamond -> Pul",
    enabled: 1,
    version: 100,
    numinputs: 10,
    "input 1": "gpw,qty=10",
    "output": "r21",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Emerald -> Pul",
    enabled: 1,
    version: 100,
    numinputs: 10,
    "input 1": "gpg,qty=10",
    "output": "r21",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Sapphire -> Pul",
    enabled: 1,
    version: 100,
    numinputs: 10,
    "input 1": "gpb,qty=10",
    "output": "r21",
    "*eol": 0,
  });
}


if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Topaz -> Pul",
    enabled: 1,
    version: 100,
    numinputs: 10,
    "input 1": "gpy,qty=10",
    "output": "r21",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Ruby -> Um",
    enabled: 1,
    version: 100,
    numinputs: 10,
    "input 1": "gpr,qty=10",
    "output": "r22",
    "*eol": 0,
  });
}


if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Skull -> Um",
    enabled: 1,
    version: 100,
    numinputs: 10,
    "input 1": "skz,qty=10",
    "output": "r22",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Amethyst -> Mal",
    enabled: 1,
    version: 100,
    numinputs: 10,
    "input 1": "gpv,qty=10",
    "output": "r23",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Jewels -> Pul",
    enabled: 1,
    version: 100,
    numinputs: 10,
    "input 1": "jew,qty=10",
    "output": "r21",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "Fal -> 2 Gems",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "jew",
    "input 2": "r19",
    "output": "jew,mag,pre=268,suf=350",
    "output b": "jew,mag,pre=268,suf=350",
    "output c": "jew,mag,pre=268,suf=350",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "Fal -> 2 P Topaz",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r19",
    "input 2": "gpy",
    "output": "gpy",
    "output b": "gpy",
    "output c": "gpy",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "Fal -> 2 P Emerald",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r19",
    "input 2": "gpg",
    "output": "gpg",
    "output b": "gpg",
    "output c": "gpg",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "Fal -> 2 P Diamond",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r19",
    "input 2": "gpw",
    "output": "gpw",
    "output b": "gpw",
    "output c": "gpw",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "Fal -> 2 P Sapphires",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r19",
    "input 2": "gpb",
    "output": "gpb",
    "output b": "gpb",
    "output c": "gpb",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "Lem -> 3 P Skulls",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r20",
    "input 2": "vps",
    "output": "skz",
    "output b": "skz",
    "output c": "skz",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "Lem -> 3 P Rubies",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r20",
    "input 2": "yps",
    "output": "gpr",
    "output b": "gpr",
    "output c": "gpr",
    "*eol": 0,
  });
}


if (config.gemMarket) {
cubemain.rows.push({
    description:
      "Lem -> 2 P Amethysts",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r20",
    "input 2": "gpv",
    "output": "gpv",
    "output b": "gpv",
    "output c": "gpv",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "5 Topaz -> 3 P Skulls",
    enabled: 1,
    version: 100,
    numinputs: 5,
    "input 1": "gem4,qty=5",
    "output": "skz",
    "output b": "skz",
    "output c": "skz",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "6 Topaz -> 3 P Amethysts",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "gem4,qty=6",
    "output": "gpv",
    "output b": "gpv",
    "output c": "gpv",
    "*eol": 0,
  });
}


if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Pul Lem -> Um",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r21",
    "input 2": "r20",
    "output": "r22",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Um -> Pul Lem",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r22",
    "output": "r21",
    "output b": "r20",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Pul Um -> Mal",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r22",
    "input 2": "r21",
    "output": "r23",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Mal -> Um Pul",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r23",
    "output": "r22",
    "output b": "r21",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Mal Um -> Ist",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r23",
    "input 2": "r22",
    "output": "r24",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Ist -> Mal Um",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r24",
    "output": "r23",
    "output b": "r22",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Ist Mal -> Gul",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r23",
    "input 2": "r24",
    "output": "r25",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Gul -> Ist Mal",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r25",
    "output": "r24",
    "output b": "r23",
    "*eol": 0,
  });
}



if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "3 Ist -> Vex",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r24,qty=3",
    "output": "r26",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Vex -> 3 Ist",
    enabled: 1,
    version: 100,
    numinputs: 1, 
    "input 1": "r26",
    "output": "r24",
    "output b": "r24",
    "output c": "r24",
    "*eol": 0,
  });
}


if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "1 Vex 2 Ist -> Ohm",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r26",
    "input 2": "r24,qty=2",
    "output": "r27",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Ohm -> 1 Vex 2 Ist",
    enabled: 1,
    version: 100,
    numinputs: 1, 
    "input 1": "r27",
    "output": "r26",
    "output b": "r24",
    "output c": "r24",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Ohm Vex Ist -> Lo",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r24",
    "input 2": "r26",
    "input 3": "r27",
    "output": "r28",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Lo -> Ohm Vex Ist",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r28",
    "output": "r27",
    "output b": "r26",
    "output c": "r24",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "3 Ohm -> Sur",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r27,qty=3",
    "output": "r29",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Sur -> 3 Ohm",
    enabled: 1,
    version: 100,
    numinputs: 1, 
    "input 1": "r29",
    "output": "r27",
    "output b": "r27",
    "output c": "r27",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Ber -> Sur Lo Vex",
    enabled: 1,
    version: 100,
    numinputs: 1, 
    "input 1": "r30",
    "output": "r29",
    "output b": "r28",
    "output c": "r26",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Sur Lo Vex -> Ber",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r26",
    "input 2": "r28",
    "input 3": "r29",
    "output": "r30",
    "*eol": 0,
  });
}



if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Jah -> Ber Lo",
    enabled: 1,
    version: 100,
    numinputs: 1, 
    "input 1": "r31",
    "output": "r30",
    "output b": "r28",
    "*eol": 0,
  });
}


if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Ber Lo -> Jah",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r28",
    "input 2": "r30",
    "output": "r31",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Cham -> Vex Gul Ist",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r32",
    "output": "r26",
    "output b": "r25",
    "output c": "r24", 
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Vex Gul Ist -> Cham",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r25,",
    "input 2": "r24",
    "input 3": "r26",
    "output": "r32",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Zod -> Ohm Vex Gul",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r33",
    "output": "r27",
    "output b": "r26",
    "output c": "r25", 
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Ohm Vex Gul -> Zod",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r25,",
    "input 2": "r26",
    "input 3": "r27",
    "output": "r33",
    "*eol": 0,
  });
}


if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Pul -> Ancient 1",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r21",
    "input 2": "r01",
    "input 3": "wms",
    "output": "ua1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Pul -> Ancient 2",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r21",
    "input 2": "r02",
    "input 3": "wms",
    "output": "ua2",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Pul -> Ancient 3",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r21",
    "input 2": "r03",
    "input 3": "wms",
    "output": "ua3",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Mal -> Ancient 4",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r23",
    "input 2": "r04",
    "input 3": "wms",
    "output": "ua4",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Mal -> Ancient 5",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r23",
    "input 2": "r05",
    "input 3": "wms",
    "output": "ua5",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Ancient 1 -> Lem",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "ua1",
    "input 2": "yps",
    "output": "r20",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Ancient 2 -> Lem",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "ua2",
    "input 2": "yps",
    "output": "r20",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Ancient 3 -> Lem",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "ua3",
    "input 2": "yps",
    "output": "r20",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Ancient 4 -> Um",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "ua4",
    "input 2": "yps",
    "output": "r22",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Ancient 5 -> Um",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "ua5",
    "input 2": "yps",
    "output": "r22",
    "*eol": 0,
  });
}


    if (config.torchMarket) {
      cubemain.rows.push({
        description: "Defender's Bile -> 2 r24 r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Defender's Bile",
        "output": "r24",
	"output b": "r24",
	"output c": "r21",
        "*eol": 0,
      });
    }

 
    if (config.torchMarket) {
      cubemain.rows.push({
        description: "Guardian's Thunder -> 2 r24 r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Guardian's Thunder",
        "output": "r24",
	"output b": "r24",
	"output c": "r21",
        "*eol": 0,
      });
    }

  
    if (config.torchMarket) {
      cubemain.rows.push({
        description: "Protector's Frost -> 2 r24 r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Protector's Frost",
        "output": "r24",
	"output b": "r24",
	"output c": "r21",
        "*eol": 0,
      });
    }

  
    if (config.torchMarket) {
      cubemain.rows.push({
        description: "Defender's Fire -> 2 r24 r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Defender's Fire",
        "output": "r24",
	"output b": "r24",
	"output c": "r21",
        "*eol": 0,
      });
    }

    
    if (config.torchMarket) {
      cubemain.rows.push({
        description: "Protector's Stone -> 2 r24 r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Protector's Stone",
        "output": "r24",
	"output b": "r24",
	"output c": "r21",
        "*eol": 0,
      });
    }

  
    if (config.torchMarket) {
      cubemain.rows.push({
        description: "Guardian's Light -> 2 r24 r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Guardian's Light",
        "output": "r24",
	"output b": "r24",
	"output c": "r21",
        "*eol": 0,
      });
    }


if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Torch -> Vex Um",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "Hellfire Torch",
    "input 2": "yps",
    "output": "r26",
    "output b": "r22",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Keys -> Ist",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "pk1",
    "input 2": "pk2",
    "input 3": "pk3",
    "input 4": "yps",
    "output": "r24",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Ist -> Keys",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r24",
    "input 2": "wms",
    "output": "pk1",
    "output b": "pk2",
    "output c": "pk3",
    "*eol": 0,
  });
}

if (config.uniqueMarket) {
cubemain.rows.push({
    description:
      "Ist -> Rainbow Facet",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r24",
    "input 2": "jew",
    "input 3": "vps",
    "output": "jew,uni",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}

if (config.uniqueMarket) {
cubemain.rows.push({
    description:
      "Rainbow Facet -> Mal",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "jew,uni",
    "input 2": "yps",
    "output": "r23",
    "*eol": 0,
  });
}


if (config.servicesMarket) {
cubemain.rows.push({
description:
"Removes and preserves socketed items",
enabled: 1,
version: 100,
numinputs: 3,
"input 1": "any,sock",
"input 2": "toa",
"input 3": "wms",
"output": "useitem,rem",
lvl: 100,
ilvl: 100,
"*eol": 0,
});
}



if (config.magicMarket) {
cubemain.rows.push({
description:
"Pul for Fine Small Charm",
enabled: 1,
version: 100,
numinputs: 4,
"input 1": "cm1",
"input 2": "r21",
"input 3": "glw",
"input 4": "vps",
"output": "cm1,mag,pre=256",
lvl: 100,
ilvl: 100,
"*eol": 0,
});
}


if (config.magicMarket) {
cubemain.rows.push({
description:
"Gul for Shimmering Small Charm",
enabled: 1,
version: 100,
numinputs: 4,
"input 1": "cm1",
"input 2": "r25",
"input 3": "glw",
"input 4": "vps",
"output": "cm1,mag,pre=322",
lvl: 100,
ilvl: 100,
"*eol": 0,
});
}


if (config.magicMarket) {
cubemain.rows.push({
description:
"Um for Small Charm of Good Luck",
enabled: 1,
version: 100,
numinputs: 4,
"input 1": "cm1",
"input 2": "r22",
"input 3": "glw",
"input 4": "vps",
"output": "cm1,mag,suf=291",
lvl: 100,
ilvl: 100,
"*eol": 0,
});
}

if (config.magicMarket) {
cubemain.rows.push({
description:
"Mal for Small Charm of Vita",
enabled: 1,
version: 100,
numinputs: 4,
"input 1": "cm1",
"input 2": "r23",
"input 3": "glw",
"input 4": "vps",
"output": "cm1,mag,suf=349",
lvl: 100,
ilvl: 100,
"*eol": 0,
});
}

if (config.magicMarket) {
cubemain.rows.push({
description:
"Lem for Small Charm of Inertia",
enabled: 1,
version: 100,
numinputs: 4,
"input 1": "cm1",
"input 2": "r20",
"input 3": "glw",
"input 4": "vps",
"output": "cm1,mag,suf=401",
lvl: 100,
ilvl: 100,
"*eol": 0,
});
}


const SKILL_GROUPS = [
  { name: "Bow", id: 430, rank: "r22" },
  { name: "Passives", id: 431, rank: "r20" },
  { name: "Javelin", id: 432, rank: "r24" },
  { name: "Fire", id: 442, rank: "r22" },
  { name: "Lightning", id: 443, rank: "r25" },
  { name: "Cold", id: 444, rank: "r23" },
  { name: "Curses", id: 454, rank: "r20" },
  { name: "Poison and Bone", id: 455, rank: "r23" },
  { name: "Summoning (Necro)", id: 456, rank: "r22" },
  { name: "Combat Arts (Pal)", id: 466, rank: "r25" },
  { name: "Offensive", id: 467, rank: "r23" },
  { name: "Defensive", id: 468, rank: "r20" },
  { name: "Combat Masteries", id: 478, rank: "r20" },
  { name: "Combat Skills (Barb)", id: 479, rank: "r21" },
  { name: "Shouts", id: 480, rank: "r22" },
  { name: "Summoning (Druid)", id: 490, rank: "r20" },
  { name: "Shapeshifting", id: 491, rank: "r22" },
  { name: "Elemental", id: 492, rank: "r23" },
  { name: "Traps", id: 502, rank: "r23" },
  { name: "Disciplines", id: 503, rank: "r21" },
  { name: "Martial Arts", id: 504, rank: "r22" },
  { name: "Chaos", id: 700, rank: "r25" },
  { name: "Eldritch", id: 701, rank: "r26" },
  { name: "Demons", id: 702, rank: "r24" }
];

if (config.magicMarket) {
  for (let i = 0; i < SKILL_GROUPS.length; i++) {
    let skill = SKILL_GROUPS[i];
    
    let groupNum = Math.floor(i / 3) + 1;
    let groupRank = `r${groupNum.toString().padStart(2, '0')}`;

    cubemain.rows.push({
      'description': `${skill.rank} --> ${skill.name}`,
      'enabled': 1,
      'version': 100,
      'numinputs': 4,
      'input 1': 'cm3',
      'input 2': groupRank, 
      'input 3': skill.rank,
      'input 4': 'vps',
      'output': `cm3,mag,pre=${skill.id}`,
      lvl: 100, 
      ilvl: 100,	
      '*eol': 0,
    });
  }
}

 if (config.torchMarket) {
      cubemain.rows.push({
        description: "Annihilus -> Vex Gul",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Annihilus",
        "output": "r26",
	"output b": "r25",
        "*eol": 0,
      });
    }

if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Civerb's Ward",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "lrg",
        "input 4": "tsc",
        "output": "Civerb's Ward",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Civerb's Ward -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Civerb's Ward",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Civerb's Icon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "amu",
        "input 4": "glv",
        "output": "Civerb's Icon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Civerb's Icon -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Civerb's Icon",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Civerb's Cudgel",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "gsc",
        "input 4": "tsc",
        "output": "Civerb's Cudgel",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Civerb's Cudgel -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Civerb's Cudgel",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Hsarus' Iron Heel",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "mbt",
        "input 4": "tsc",
        "output": "Hsarus' Iron Heel",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Hsarus' Iron Heel -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hsarus' Iron Heel",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Hsarus' Iron Fist",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "buc",
        "input 4": "tsc",
        "output": "Hsarus' Iron Fist",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hsarus' Iron Fist -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hsarus' Iron Fist",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Hsarus' Iron Stay",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "mbl",
        "input 4": "tsc",
        "output": "Hsarus' Iron Stay",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Hsarus' Iron Stay -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hsarus' Iron Stay",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Cleglaw's Tooth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "lsd",
        "input 4": "tsc",
        "output": "Cleglaw's Tooth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cleglaw's Tooth -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cleglaw's Tooth",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Cleglaw's Claw",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "sml",
        "input 4": "tsc",
        "output": "Cleglaw's Claw",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cleglaw's Claw -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cleglaw's Claw",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Cleglaw's Pincers",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "mgl",
        "input 4": "tsc",
        "output": "Cleglaw's Pincers",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Cleglaw's Pincers -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cleglaw's Pincers",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Iratha's Collar",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "amu",
        "input 4": "glr",
        "output": "Iratha's Collar",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Iratha's Collar -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Iratha's Collar",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Iratha's Cuff",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "tgl",
        "input 4": "glg",
        "output": "Iratha's Cuff",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Iratha's Cuff -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Iratha's Cuff",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Iratha's Coil",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "crn",
        "input 4": "glg",
        "output": "Iratha's Coil",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Iratha's Coil -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Iratha's Coil",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Iratha's Cord",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "tbl",
        "input 4": "glg",
        "output": "Iratha's Cord",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Iratha's Cord -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Iratha's Cord",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Isenhart's Lightbrand",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "bsd",
        "input 4": "tsc",
        "output": "Isenhart's Lightbrand",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Isenhart's Lightbrand -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Isenhart's Lightbrand",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Isenhart's Parry",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "gts",
        "input 4": "tsc",
        "output": "Isenhart's Parry",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Isenhart's Parry -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Isenhart's Parry",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Isenhart's Case",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "brs",
        "input 4": "tsc",
        "output": "Isenhart's Case",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Isenhart's Case -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Isenhart's Case",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Isenhart's Horns",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "fhl",
        "input 4": "tsc",
        "output": "Isenhart's Horns",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Isenhart's Horns -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Isenhart's Horns",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Vidala's Barb",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "lbb",
        "input 4": "glb",
        "output": "Vidala's Barb",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Vidala's Barb -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Vidala's Barb",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Vidala's Fetlock",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "tbt",
        "input 4": "tsc",
        "output": "Vidala's Fetlock",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Vidala's Fetlock -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Vidala's Fetlock",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Vidala's Ambush",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "lea",
        "input 4": "tsc",
        "output": "Vidala's Ambush",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Vidala's Ambush -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Vidala's Ambush",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Vidala's Snare",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "amu",
        "input 4": "glg",
        "output": "Vidala's Snare",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Vidala's Snare -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Vidala's Snare",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Milabrega's Orb",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "kit",
        "input 4": "tsc",
        "output": "Milabrega's Orb",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Milabrega's Orb -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Milabrega's Orb",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Milabrega's Rod",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "wsp",
        "input 4": "tsc",
        "output": "Milabrega's Rod",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Milabrega's Rod -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Milabrega's Rod",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Milabrega's Diadem",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "crn",
        "input 4": "tsc",
        "output": "Milabrega's Diadem",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Milabrega's Diadem -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Milabrega's Diadem",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Milabrega's Robe",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "aar",
        "input 4": "tsc",
        "output": "Milabrega's Robe",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Milabrega's Robe -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Milabrega's Robe",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Cathan's Rule",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "bst",
        "input 4": "gly",
        "output": "Cathan's Rule",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cathan's Rule -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cathan's Rule",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Cathan's Mesh",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "chn",
        "input 4": "tsc",
        "output": "Cathan's Mesh",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cathan's Mesh -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cathan's Mesh",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Cathan's Visage",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "msk",
        "input 4": "tsc",
        "output": "Cathan's Visage",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cathan's Visage -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cathan's Visage",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Cathan's Sigil",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "amu",
        "input 4": "gly",
        "output": "Cathan's Sigil",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cathan's Sigil -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cathan's Sigil",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Cathan's Seal",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "rin",
        "input 4": "tsc",
        "output": "Cathan's Seal",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cathan's Seal -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cathan's Seal",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Tancred's Crowbill",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "mpi",
        "input 4": "tsc",
        "output": "Tancred's Crowbill",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Tancred's Crowbill -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tancred's Crowbill",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Tancred's Spine",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "ful",
        "input 4": "tsc",
        "output": "Tancred's Spine",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Tancred's Spine -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tancred's Spine",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Tancred's Hobnails",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "lbt",
        "input 4": "tsc",
        "output": "Tancred's Hobnails",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Tancred's Hobnails -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tancred's Hobnails",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Tancred's Weird",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "amu",
        "input 4": "glw",
        "output": "Tancred's Weird",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Tancred's Weird -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tancred's Weird",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Tancred's Skull",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "bhm",
        "input 4": "tsc",
        "output": "Tancred's Skull",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Tancred's Skull -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tancred's Skull",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Sigon's Gage",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hgl",
        "input 4": "tsc",
        "output": "Sigon's Gage",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Sigon's Gage -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sigon's Gage",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Sigon's Visor",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ghm",
        "input 4": "tsc",
        "output": "Sigon's Visor",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Sigon's Visor -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sigon's Visor",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Sigon's Shelter",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "gth",
        "input 4": "tsc",
        "output": "Sigon's Shelter",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Sigon's Shelter -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sigon's Shelter",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Sigon's Sabot",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hbt",
        "input 4": "tsc",
        "output": "Sigon's Sabot",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Sigon's Sabot -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sigon's Sabot",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Sigon's Wrap",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "hbl",
        "input 4": "glg",
        "output": "Sigon's Wrap",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Sigon's Wrap -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sigon's Wrap",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Sigon's Guard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "tow",
        "input 4": "tsc",
        "output": "Sigon's Guard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Sigon's Guard -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sigon's Guard",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Infernal Cranium",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "cap",
        "input 4": "tsc",
        "output": "Infernal Cranium",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Infernal Cranium -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Infernal Cranium",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Infernal Torch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "gwn",
        "input 4": "tsc",
        "output": "Infernal Torch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Infernal Torch -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Infernal Torch",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Infernal Sign",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "tbl",
        "input 4": "tsc",
        "output": "Infernal Sign",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Infernal Sign -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Infernal Sign",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Berserker's Headgear",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "hlm",
        "input 4": "tsc",
        "output": "Berserker's Headgear",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Berserker's Headgear -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Berserker's Headgear",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Berserker's Hauberk",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "spl",
        "input 4": "tsc",
        "output": "Berserker's Hauberk",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Berserker's Hauberk -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Berserker's Hauberk",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Berserker's Hatchet",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "2ax",
        "input 4": "tsc",
        "output": "Berserker's Hatchet",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Berserker's Hatchet -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Berserker's Hatchet",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Death's Hand",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lgl",
        "input 4": "tsc",
        "output": "Death's Hand",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Death's Hand -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Death's Hand",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Death's Guard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lbl",
        "input 4": "tsc",
        "output": "Death's Guard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Death's Guard -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Death's Guard",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Death's Touch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "wsd",
        "input 4": "tsc",
        "output": "Death's Touch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Death's Touch -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Death's Touch",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Angelic Sickle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "sbr",
        "input 4": "tsc",
        "output": "Angelic Sickle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Angelic Sickle -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Angelic Sickle",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Angelic Mantle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "rng",
        "input 4": "tsc",
        "output": "Angelic Mantle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Angelic Mantle -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Angelic Mantle",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Angelic Halo",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "rin",
        "input 4": "tsc",
        "output": "Angelic Halo",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Angelic Halo -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Angelic Halo",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Angelic Wings",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "amu",
        "input 4": "gpw",
        "output": "Angelic Wings",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Angelic Wings -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Angelic Wings",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Arctic Horn",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "swb",
        "input 4": "tsc",
        "output": "Arctic Horn",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arctic Horn -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arctic Horn",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Arctic Furs",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "qui",
        "input 4": "tsc",
        "output": "Arctic Furs",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arctic Furs -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arctic Furs",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Arctic Binding",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "vbl",
        "input 4": "tsc",
        "output": "Arctic Binding",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arctic Binding -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arctic Binding",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Arctic Mitts",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "tgl",
        "input 4": "tsc",
        "output": "Arctic Mitts",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arctic Mitts -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arctic Mitts",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Arcanna's Sign",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "amu",
        "input 4": "tsc",
        "output": "Arcanna's Sign",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arcanna's Sign -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arcanna's Sign",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Arcanna's Deathwand",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "wst",
        "input 4": "tsc",
        "output": "Arcanna's Deathwand",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arcanna's Deathwand -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arcanna's Deathwand",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Arcanna's Head",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "skp",
        "input 4": "tsc",
        "output": "Arcanna's Head",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arcanna's Head -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arcanna's Head",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Arcanna's Flesh",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "ltp",
        "input 4": "tsc",
        "output": "Arcanna's Flesh",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arcanna's Flesh -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arcanna's Flesh",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Natalya's Totem",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "xh9",
        "input 4": "tsc",
        "output": "Natalya's Totem",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Natalya's Totem -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Natalya's Totem",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Natalya's Mark",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "7qr",
        "input 4": "tsc",
        "output": "Natalya's Mark",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Natalya's Mark -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Natalya's Mark",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Natalya's Shadow",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ucl",
        "input 4": "tsc",
        "output": "Natalya's Shadow",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Natalya's Shadow -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Natalya's Shadow",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Natalya's Soul",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xmb",
        "input 4": "tsc",
        "output": "Natalya's Soul",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Natalya's Soul -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Natalya's Soul",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Aldur's Stony Gaze",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "dr8",
        "input 4": "tsc",
        "output": "Aldur's Stony Gaze",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Aldur's Stony Gaze -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Aldur's Stony Gaze",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Aldur's Deception",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "uul",
        "input 4": "tsc",
        "output": "Aldur's Deception",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Aldur's Deception -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Aldur's Deception",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Aldur's Gauntlet",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "9mt",
        "input 4": "tsc",
        "output": "Aldur's Gauntlet",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Aldur's Gauntlet -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Aldur's Gauntlet",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Aldur's Advance",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "xtb",
        "input 4": "tsc",
        "output": "Aldur's Advance",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Aldur's Advance -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Aldur's Advance",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Immortal King's Will",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "ba5",
        "input 4": "tsc",
        "output": "Immortal King's Will",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Immortal King's Will -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Immortal King's Will",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Immortal King's Soul Cage",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "uar",
        "input 4": "tsc",
        "output": "Immortal King's Soul Cage",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Immortal King's Soul Cage -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Immortal King's Soul Cage",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Immortal King's Detail",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "zhb",
        "input 4": "tsc",
        "output": "Immortal King's Detail",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Immortal King's Detail -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Immortal King's Detail",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Immortal King's Forge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xhg",
        "input 4": "tsc",
        "output": "Immortal King's Forge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Immortal King's Forge -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Immortal King's Forge",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Immortal King's Pillar",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xhb",
        "input 4": "tsc",
        "output": "Immortal King's Pillar",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Immortal King's Pillar -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Immortal King's Pillar",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Immortal King's Stone Crusher",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7m7",
        "input 4": "tsc",
        "output": "Immortal King's Stone Crusher",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Immortal King's Stone Crusher -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Immortal King's Stone Crusher",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Tal Rasha's Fire-Spun Cloth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "zmb",
        "input 4": "tsc",
        "output": "Tal Rasha's Fire-Spun Cloth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tal Rasha's Fire-Spun Cloth -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tal Rasha's Fire-Spun Cloth",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Tal Rasha's Adjudication",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "amu",
        "input 4": "tsc",
        "output": "Tal Rasha's Adjudication",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tal Rasha's Adjudication -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tal Rasha's Adjudication",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Tal Rasha's Lidless Eye",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "oba",
        "input 4": "tsc",
        "output": "Tal Rasha's Lidless Eye",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tal Rasha's Lidless Eye -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tal Rasha's Lidless Eye",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Tal Rasha's Howling Wind",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "uth",
        "input 4": "tsc",
        "output": "Tal Rasha's Howling Wind",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tal Rasha's Howling Wind -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tal Rasha's Howling Wind",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Tal Rasha's Horadric Crest",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xsk",
        "input 4": "tsc",
        "output": "Tal Rasha's Horadric Crest",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tal Rasha's Horadric Crest -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tal Rasha's Horadric Crest",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Griswold's Valor",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "urn",
        "input 4": "tsc",
        "output": "Griswold's Valor",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Griswold's Valor -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Griswold's Valor",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Griswold's Heart",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xar",
        "input 4": "tsc",
        "output": "Griswold's Heart",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Griswold's Heart -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Griswold's Heart",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Griswolds's Redemption",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7ws",
        "input 4": "r23",
        "output": "Griswolds's Redemption",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Griswolds's Redemption -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Griswolds's Redemption",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Griswold's Honor",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "paf",
        "input 4": "tsc",
        "output": "Griswold's Honor",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Griswold's Honor -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Griswold's Honor",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Trang-Oul's Guise",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "uh9",
        "input 4": "tsc",
        "output": "Trang-Oul's Guise",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Trang-Oul's Guise -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Trang-Oul's Guise",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Trang-Oul's Scales",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xul",
        "input 4": "tsc",
        "output": "Trang-Oul's Scales",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Trang-Oul's Scales -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Trang-Oul's Scales",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Trang-Oul's Wing",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "ne9",
        "input 4": "tsc",
        "output": "Trang-Oul's Wing",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Trang-Oul's Wing -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Trang-Oul's Wing",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Trang-Oul's Claws",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xmg",
        "input 4": "tsc",
        "output": "Trang-Oul's Claws",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Trang-Oul's Claws -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Trang-Oul's Claws",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Trang-Oul's Girth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "utc",
        "input 4": "tsc",
        "output": "Trang-Oul's Girth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Trang-Oul's Girth -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Trang-Oul's Girth",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> M'avina's True Sight",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "ci3",
        "input 4": "tsc",
        "output": "M'avina's True Sight",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "M'avina's True Sight -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "M'avina's True Sight",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> M'avina's Embrace",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "uld",
        "input 4": "tsc",
        "output": "M'avina's Embrace",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "M'avina's Embrace -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "M'avina's Embrace",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> M'avina's Icy Clutch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xtg",
        "input 4": "tsc",
        "output": "M'avina's Icy Clutch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "M'avina's Icy Clutch -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "M'avina's Icy Clutch",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> M'avina's Tenet",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "zvb",
        "input 4": "tsc",
        "output": "M'avina's Tenet",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "M'avina's Tenet -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "M'avina's Tenet",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> M'avina's Caster",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amc",
        "input 4": "tsc",
        "output": "M'avina's Caster",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "M'avina's Caster -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "M'avina's Caster",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Telling of Beads",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amu",
        "input 4": "tsc",
        "output": "Telling of Beads",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Telling of Beads -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Telling of Beads",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Laying of Hands",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ulg",
        "input 4": "tsc",
        "output": "Laying of Hands",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Laying of Hands -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Laying of Hands",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Rite of Passage",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xlb",
        "input 4": "tsc",
        "output": "Rite of Passage",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Rite of Passage -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rite of Passage",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Spiritual Custodian",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "uui",
        "input 4": "tsc",
        "output": "Spiritual Custodian",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spiritual Custodian -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spiritual Custodian",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Credendum",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "umc",
        "input 4": "tsc",
        "output": "Credendum",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Credendum -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Credendum",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Dangoon's Teaching",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "7ma",
        "input 4": "tsc",
        "output": "Dangoon's Teaching",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Dangoon's Teaching -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Dangoon's Teaching",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Heaven's Taebaek",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "uts",
        "input 4": "tsc",
        "output": "Heaven's Taebaek",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Heaven's Taebaek -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Heaven's Taebaek",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Haemosu's Adament",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xrs",
        "input 4": "tsc",
        "output": "Haemosu's Adament",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Haemosu's Adament -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Haemosu's Adament",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Ondal's Almighty",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "uhm",
        "input 4": "tsc",
        "output": "Ondal's Almighty",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ondal's Almighty -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ondal's Almighty",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Guillaume's Face",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xhm",
        "input 4": "tsc",
        "output": "Guillaume's Face",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Guillaume's Face -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Guillaume's Face",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Wilhelm's Pride",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "ztb",
        "input 4": "tsc",
        "output": "Wilhelm's Pride",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Wilhelm's Pride -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wilhelm's Pride",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Magnus' Skin",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xvg",
        "input 4": "tsc",
        "output": "Magnus' Skin",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Magnus' Skin -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Magnus' Skin",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Wihtstan's Guard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xml",
        "input 4": "tsc",
        "output": "Wihtstan's Guard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Wihtstan's Guard -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wihtstan's Guard",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Hwanin's Splendor",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xrn",
        "input 4": "tsc",
        "output": "Hwanin's Splendor",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hwanin's Splendor -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hwanin's Splendor",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Hwanin's Refuge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xcl",
        "input 4": "tsc",
        "output": "Hwanin's Refuge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hwanin's Refuge -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hwanin's Refuge",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Hwanin's Seal",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "mbl",
        "input 4": "tsc",
        "output": "Hwanin's Seal",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hwanin's Seal -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hwanin's Seal",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Hwanin's Justice",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9vo",
        "input 4": "tsc",
        "output": "Hwanin's Justice",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hwanin's Justice -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hwanin's Justice",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Sazabi's Cobalt Redeemer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7ls",
        "input 4": "tsc",
        "output": "Sazabi's Cobalt Redeemer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Sazabi's Cobalt Redeemer -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sazabi's Cobalt Redeemer",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Sazabi's Ghost Liberator",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "upl",
        "input 4": "tsc",
        "output": "Sazabi's Ghost Liberator",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Sazabi's Ghost Liberator -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sazabi's Ghost Liberator",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Sazabi's Mental Sheath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xhl",
        "input 4": "tsc",
        "output": "Sazabi's Mental Sheath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Sazabi's Mental Sheath -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sazabi's Mental Sheath",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Bul-Kathos' Sacred Charge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7gd",
        "input 4": "tsc",
        "output": "Bul-Kathos' Sacred Charge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bul-Kathos' Sacred Charge -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bul-Kathos' Sacred Charge",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Bul-Kathos' Tribal Guardian",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7wd",
        "input 4": "tsc",
        "output": "Bul-Kathos' Tribal Guardian",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bul-Kathos' Tribal Guardian -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bul-Kathos' Tribal Guardian",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Cow King's Horns",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xap",
        "input 4": "tsc",
        "output": "Cow King's Horns",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Cow King's Horns -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cow King's Horns",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Cow King's Hide",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "stu",
        "input 4": "tsc",
        "output": "Cow King's Hide",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Cow King's Hide -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cow King's Hide",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Cow King's Hoofs",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "vbt",
        "input 4": "tsc",
        "output": "Cow King's Hoofs",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Cow King's Hoofs -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cow King's Hoofs",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Naj's Puzzler",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "6cs",
        "input 4": "tsc",
        "output": "Naj's Puzzler",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Naj's Puzzler -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Naj's Puzzler",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Naj's Light Plate",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ult",
        "input 4": "tsc",
        "output": "Naj's Light Plate",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Naj's Light Plate -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Naj's Light Plate",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Naj's Circlet",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "ci0",
        "input 4": "tsc",
        "output": "Naj's Circlet",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Naj's Circlet -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Naj's Circlet",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> McAuley's Paragon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "cap",
        "input 4": "tsc",
        "output": "McAuley's Paragon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "McAuley's Paragon -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "McAuley's Paragon",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> McAuley's Riprap",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "vbt",
        "input 4": "tsc",
        "output": "McAuley's Riprap",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "McAuley's Riprap -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "McAuley's Riprap",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> McAuley's Taboo",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "vgl",
        "input 4": "tsc",
        "output": "McAuley's Taboo",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "McAuley's Taboo -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "McAuley's Taboo",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> McAuley's Superstition",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "bwn",
        "input 4": "tsc",
        "output": "McAuley's Superstition",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "McAuley's Superstition -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "McAuley's Superstition",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Warlord's Lust",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "ghm",
        "input 4": "tsc",
        "output": "Warlord's Lust",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Warlord's Lust -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Warlord's Lust",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Warlord's Mantle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "ful",
        "input 4": "tsc",
        "output": "Warlord's Mantle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Warlord's Mantle -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Warlord's Mantle",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Warlord's Crushers",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "hbt",
        "input 4": "tsc",
        "output": "Warlord's Crushers",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Warlord's Crushers -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Warlord's Crushers",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Warlord's Authority",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "hbl",
        "input 4": "tsc",
        "output": "Warlord's Authority",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Warlord's Authority -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Warlord's Authority",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r22 -> Bane's Oathmaker",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "kri",
        "input 4": "tsc",
        "output": "Bane's Oathmaker",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bane's Oathmaker -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bane's Oathmaker",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r22 -> Bane's Wraithskin",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "hla",
        "input 4": "tsc",
        "output": "Bane's Wraithskin",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bane's Wraithskin -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bane's Wraithskin",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r22 -> Bane's Authority",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "vbl",
        "input 4": "tsc",
        "output": "Bane's Authority",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bane's Authority -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bane's Authority",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Horazon's Countenance",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "usk",
        "input 4": "tsc",
        "output": "Horazon's Countenance",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Horazon's Countenance -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Horazon's Countenance",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Horazon's Dominion",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "xpl",
        "input 4": "tsc",
        "output": "Horazon's Dominion",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Horazon's Dominion -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Horazon's Dominion",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Horazon's Hold",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "xlg",
        "input 4": "tsc",
        "output": "Horazon's Hold",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Horazon's Hold -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Horazon's Hold",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Horazon's Legacy",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "utb",
        "input 4": "tsc",
        "output": "Horazon's Legacy",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Horazon's Legacy -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Horazon's Legacy",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Horazon's Secrets",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "wad",
        "input 4": "tsc",
        "output": "Horazon's Secrets",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Horazon's Secrets -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Horazon's Secrets",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> The Gnasher",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "hax",
        "input 4": "isc",
        "output": "The Gnasher",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Gnasher -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Gnasher",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Deathspade",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "axe",
        "input 4": "isc",
        "output": "Deathspade",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Deathspade -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Deathspade",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Bladebone",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "2ax",
        "input 4": "isc",
        "output": "Bladebone",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bladebone -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bladebone",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Mindrend",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "mpi",
        "input 4": "isc",
        "output": "Mindrend",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Mindrend -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Mindrend",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Rakescar",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "wax",
        "input 4": "isc",
        "output": "Rakescar",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Rakescar -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rakescar",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Fechmars Axe",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "lax",
        "input 4": "isc",
        "output": "Fechmars Axe",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Fechmars Axe -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Fechmars Axe",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Goreshovel",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "bax",
        "input 4": "isc",
        "output": "Goreshovel",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Goreshovel -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Goreshovel",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Chieftan",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "btx",
        "input 4": "isc",
        "output": "The Chieftan",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Chieftan -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Chieftan",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Brainhew",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "gax",
        "input 4": "isc",
        "output": "Brainhew",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Brainhew -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Brainhew",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Humongous",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "gix",
        "input 4": "isc",
        "output": "The Humongous",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Humongous -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Humongous",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Iros Torch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "wnd",
        "input 4": "isc",
        "output": "Iros Torch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Iros Torch -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Iros Torch",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Maelstromwrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "ywn",
        "input 4": "isc",
        "output": "Maelstromwrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Maelstromwrath -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Maelstromwrath",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Gravenspine",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "bwn",
        "input 4": "isc",
        "output": "Gravenspine",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Gravenspine -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gravenspine",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Umes Lament",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "gwn",
        "input 4": "isc",
        "output": "Umes Lament",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Umes Lament -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Umes Lament",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Felloak",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "clb",
        "input 4": "isc",
        "output": "Felloak",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Felloak -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Felloak",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Knell Striker",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "scp",
        "input 4": "isc",
        "output": "Knell Striker",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Knell Striker -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Knell Striker",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Rusthandle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "gsc",
        "input 4": "isc",
        "output": "Rusthandle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Rusthandle -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rusthandle",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Stormeye",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "wsp",
        "input 4": "isc",
        "output": "Stormeye",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stormeye -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormeye",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Stoutnail",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "spc",
        "input 4": "isc",
        "output": "Stoutnail",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stoutnail -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stoutnail",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Crushflange",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "mac",
        "input 4": "isc",
        "output": "Crushflange",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Crushflange -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crushflange",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Bloodrise",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "mst",
        "input 4": "isc",
        "output": "Bloodrise",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bloodrise -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodrise",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Generals Tan Do Li Ga",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "fla",
        "input 4": "isc",
        "output": "The Generals Tan Do Li Ga",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Generals Tan Do Li Ga -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Generals Tan Do Li Ga",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Ironstone",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "whm",
        "input 4": "isc",
        "output": "Ironstone",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ironstone -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ironstone",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Bonesob",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "mau",
        "input 4": "isc",
        "output": "Bonesob",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bonesob -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bonesob",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Steeldriver",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "gma",
        "input 4": "isc",
        "output": "Steeldriver",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Steeldriver -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Steeldriver",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Rixots Keen",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "ssd",
        "input 4": "isc",
        "output": "Rixots Keen",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Rixots Keen -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rixots Keen",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Blood Crescent",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "scm",
        "input 4": "isc",
        "output": "Blood Crescent",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blood Crescent -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blood Crescent",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Krintizs Skewer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "sbr",
        "input 4": "isc",
        "output": "Krintizs Skewer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Krintizs Skewer -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Krintizs Skewer",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Gleamscythe",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "flc",
        "input 4": "isc",
        "output": "Gleamscythe",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Gleamscythe -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gleamscythe",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Azurewrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "crs",
        "input 4": "isc",
        "output": "Azurewrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Azurewrath -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Azurewrath",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Griswolds Edge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "bsd",
        "input 4": "isc",
        "output": "Griswolds Edge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Griswolds Edge -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Griswolds Edge",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Hellplague",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "lsd",
        "input 4": "isc",
        "output": "Hellplague",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hellplague -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hellplague",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Culwens Point",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "wsd",
        "input 4": "isc",
        "output": "Culwens Point",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Culwens Point -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Culwens Point",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Shadowfang",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "2hs",
        "input 4": "isc",
        "output": "Shadowfang",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Shadowfang -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Shadowfang",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Soulflay",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "clm",
        "input 4": "isc",
        "output": "Soulflay",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Soulflay -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Soulflay",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Kinemils Awl",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "gis",
        "input 4": "isc",
        "output": "Kinemils Awl",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Kinemils Awl -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Kinemils Awl",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Blacktongue",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "bsw",
        "input 4": "isc",
        "output": "Blacktongue",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blacktongue -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blacktongue",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Ripsaw",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "flb",
        "input 4": "isc",
        "output": "Ripsaw",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ripsaw -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ripsaw",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Patriarch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "gsd",
        "input 4": "isc",
        "output": "The Patriarch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Patriarch -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Patriarch",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Gull",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "dgr",
        "input 4": "isc",
        "output": "Gull",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Gull -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gull",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Diggler",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "dir",
        "input 4": "isc",
        "output": "The Diggler",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Diggler -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Diggler",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Jade Tan Do",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "kri",
        "input 4": "isc",
        "output": "The Jade Tan Do",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Jade Tan Do -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Jade Tan Do",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Irices Shard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "bld",
        "input 4": "isc",
        "output": "Irices Shard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Irices Shard -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Irices Shard",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Dragon Chang",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "spr",
        "input 4": "isc",
        "output": "The Dragon Chang",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Dragon Chang -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Dragon Chang",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Razortine",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "tri",
        "input 4": "isc",
        "output": "Razortine",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Razortine -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Razortine",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Bloodthief",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "brn",
        "input 4": "isc",
        "output": "Bloodthief",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bloodthief -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodthief",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Lance of Yaggai",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "spt",
        "input 4": "isc",
        "output": "Lance of Yaggai",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Lance of Yaggai -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lance of Yaggai",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Tannr Gorerod",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "pik",
        "input 4": "isc",
        "output": "The Tannr Gorerod",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Tannr Gorerod -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Tannr Gorerod",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Dimoaks Hew",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "bar",
        "input 4": "isc",
        "output": "Dimoaks Hew",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Dimoaks Hew -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Dimoaks Hew",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Steelgoad",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "vou",
        "input 4": "isc",
        "output": "Steelgoad",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Steelgoad -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Steelgoad",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Soul Harvest",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "scy",
        "input 4": "isc",
        "output": "Soul Harvest",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Soul Harvest -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Soul Harvest",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Battlebranch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "pax",
        "input 4": "isc",
        "output": "The Battlebranch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Battlebranch -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Battlebranch",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Woestave",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "hal",
        "input 4": "isc",
        "output": "Woestave",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Woestave -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Woestave",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Grim Reaper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "wsc",
        "input 4": "isc",
        "output": "The Grim Reaper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Grim Reaper -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Grim Reaper",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Bane Ash",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "sst",
        "input 4": "isc",
        "output": "Bane Ash",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bane Ash -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bane Ash",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Serpent Lord",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "lst",
        "input 4": "isc",
        "output": "Serpent Lord",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Serpent Lord -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Serpent Lord",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Lazarus Spire",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "gst",
        "input 4": "isc",
        "output": "Lazarus Spire",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Lazarus Spire -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lazarus Spire",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Salamander",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "bst",
        "input 4": "isc",
        "output": "The Salamander",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Salamander -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Salamander",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Iron Jang Bong",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "wst",
        "input 4": "isc",
        "output": "The Iron Jang Bong",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Iron Jang Bong -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Iron Jang Bong",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Pluckeye",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "sbw",
        "input 4": "isc",
        "output": "Pluckeye",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Pluckeye -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Pluckeye",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Witherstring",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "hbw",
        "input 4": "isc",
        "output": "Witherstring",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Witherstring -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Witherstring",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Rimeraven",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "lbw",
        "input 4": "isc",
        "output": "Rimeraven",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Rimeraven -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rimeraven",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Piercerib",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "cbw",
        "input 4": "isc",
        "output": "Piercerib",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Piercerib -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Piercerib",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Pullspite",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "sbb",
        "input 4": "isc",
        "output": "Pullspite",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Pullspite -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Pullspite",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Wizendraw",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "lbb",
        "input 4": "isc",
        "output": "Wizendraw",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Wizendraw -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wizendraw",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Hellclap",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "swb",
        "input 4": "isc",
        "output": "Hellclap",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hellclap -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hellclap",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Blastbark",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "lwb",
        "input 4": "isc",
        "output": "Blastbark",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blastbark -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blastbark",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Leadcrow",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "lxb",
        "input 4": "isc",
        "output": "Leadcrow",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Leadcrow -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Leadcrow",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Ichorsting",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "mxb",
        "input 4": "isc",
        "output": "Ichorsting",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ichorsting -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ichorsting",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Hellcast",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "hxb",
        "input 4": "isc",
        "output": "Hellcast",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hellcast -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hellcast",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Doomspittle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "rxb",
        "input 4": "isc",
        "output": "Doomspittle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Doomspittle -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Doomspittle",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> War Bonnet",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "cap",
        "input 4": "isc",
        "output": "War Bonnet",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "War Bonnet -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "War Bonnet",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Tarnhelm",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "skp",
        "input 4": "isc",
        "output": "Tarnhelm",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tarnhelm -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tarnhelm",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Coif of Glory",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "hlm",
        "input 4": "isc",
        "output": "Coif of Glory",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Coif of Glory -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Coif of Glory",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Duskdeep",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "fhl",
        "input 4": "isc",
        "output": "Duskdeep",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Duskdeep -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Duskdeep",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Wormskull",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "bhm",
        "input 4": "isc",
        "output": "Wormskull",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Wormskull -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wormskull",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Howltusk",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "ghm",
        "input 4": "isc",
        "output": "Howltusk",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Howltusk -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Howltusk",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Undead Crown",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "crn",
        "input 4": "isc",
        "output": "Undead Crown",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Undead Crown -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Undead Crown",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Face of Horror",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "msk",
        "input 4": "isc",
        "output": "The Face of Horror",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Face of Horror -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Face of Horror",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Greyform",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "qui",
        "input 4": "isc",
        "output": "Greyform",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Greyform -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Greyform",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Blinkbats Form",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "lea",
        "input 4": "isc",
        "output": "Blinkbats Form",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Blinkbats Form -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blinkbats Form",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Centurion",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "hla",
        "input 4": "isc",
        "output": "The Centurion",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Centurion -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Centurion",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Twitchthroe",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "stu",
        "input 4": "isc",
        "output": "Twitchthroe",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Twitchthroe -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Twitchthroe",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Darkglow",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "rng",
        "input 4": "isc",
        "output": "Darkglow",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Darkglow -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Darkglow",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Hawkmail",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "scl",
        "input 4": "isc",
        "output": "Hawkmail",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hawkmail -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hawkmail",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Sparking Mail",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "chn",
        "input 4": "isc",
        "output": "Sparking Mail",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Sparking Mail -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sparking Mail",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Venomsward",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "brs",
        "input 4": "isc",
        "output": "Venomsward",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Venomsward -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Venomsward",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Iceblink",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "spl",
        "input 4": "isc",
        "output": "Iceblink",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Iceblink -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Iceblink",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Boneflesh",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "plt",
        "input 4": "isc",
        "output": "Boneflesh",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Boneflesh -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Boneflesh",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Rockfleece",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "fld",
        "input 4": "isc",
        "output": "Rockfleece",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Rockfleece -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rockfleece",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Rattlecage",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "gth",
        "input 4": "isc",
        "output": "Rattlecage",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Rattlecage -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rattlecage",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Goldskin",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "ful",
        "input 4": "isc",
        "output": "Goldskin",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Goldskin -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Goldskin",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Victors Silk",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "aar",
        "input 4": "isc",
        "output": "Victors Silk",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Victors Silk -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Victors Silk",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Heavenly Garb",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "ltp",
        "input 4": "isc",
        "output": "Heavenly Garb",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Heavenly Garb -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Heavenly Garb",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Pelta Lunata",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "buc",
        "input 4": "isc",
        "output": "Pelta Lunata",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Pelta Lunata -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Pelta Lunata",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Umbral Disk",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "sml",
        "input 4": "isc",
        "output": "Umbral Disk",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Umbral Disk -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Umbral Disk",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Stormguild",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lrg",
        "input 4": "isc",
        "output": "Stormguild",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stormguild -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormguild",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Wall of the Eyeless",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "bsh",
        "input 4": "isc",
        "output": "Wall of the Eyeless",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Wall of the Eyeless -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wall of the Eyeless",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Swordback Hold",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "spk",
        "input 4": "isc",
        "output": "Swordback Hold",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Swordback Hold -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Swordback Hold",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Steelclash",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "kit",
        "input 4": "isc",
        "output": "Steelclash",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Steelclash -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Steelclash",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Bverrit Keep",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "tow",
        "input 4": "isc",
        "output": "Bverrit Keep",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bverrit Keep -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bverrit Keep",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> The Ward",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "gts",
        "input 4": "isc",
        "output": "The Ward",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Ward -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Ward",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> The Hand of Broc",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lgl",
        "input 4": "isc",
        "output": "The Hand of Broc",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Hand of Broc -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Hand of Broc",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Bloodfist",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "vgl",
        "input 4": "isc",
        "output": "Bloodfist",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bloodfist -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodfist",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Chance Guards",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "mgl",
        "input 4": "isc",
        "output": "Chance Guards",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Chance Guards -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Chance Guards",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Magefist",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "tgl",
        "input 4": "isc",
        "output": "Magefist",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Magefist -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Magefist",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Frostburn",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "hgl",
        "input 4": "isc",
        "output": "Frostburn",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Frostburn -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Frostburn",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Hotspur",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "lbt",
        "input 4": "isc",
        "output": "Hotspur",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Hotspur -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hotspur",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Gorefoot",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "vbt",
        "input 4": "isc",
        "output": "Gorefoot",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Gorefoot -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gorefoot",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Treads of Cthon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "mbt",
        "input 4": "isc",
        "output": "Treads of Cthon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Treads of Cthon -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Treads of Cthon",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Goblin Toe",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "tbt",
        "input 4": "isc",
        "output": "Goblin Toe",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Goblin Toe -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Goblin Toe",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Tearhaunch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "hbt",
        "input 4": "isc",
        "output": "Tearhaunch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tearhaunch -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tearhaunch",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Lenyms Cord",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lbl",
        "input 4": "isc",
        "output": "Lenyms Cord",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Lenyms Cord -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lenyms Cord",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Snakecord",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "vbl",
        "input 4": "isc",
        "output": "Snakecord",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Snakecord -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Snakecord",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Nightsmoke",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "mbl",
        "input 4": "isc",
        "output": "Nightsmoke",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Nightsmoke -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Nightsmoke",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Goldwrap",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "tbl",
        "input 4": "isc",
        "output": "Goldwrap",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Goldwrap -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Goldwrap",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Bladebuckle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "hbl",
        "input 4": "isc",
        "output": "Bladebuckle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bladebuckle -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bladebuckle",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Nokozan Relic",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "amu",
        "input 4": "isc",
        "output": "Nokozan Relic",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Nokozan Relic -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Nokozan Relic",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> The Eye of Etlich",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "amu",
        "input 4": "isc",
        "output": "The Eye of Etlich",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Eye of Etlich -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Eye of Etlich",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> The Mahim-Oak Curio",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "amu",
        "input 4": "gly",
        "output": "The Mahim-Oak Curio",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Mahim-Oak Curio -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Mahim-Oak Curio",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Nagelring",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "rin",
        "input 4": "isc",
        "output": "Nagelring",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Nagelring -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Nagelring",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Manald Heal",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "rin",
        "input 4": "glb",
        "output": "Manald Heal",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Manald Heal -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Manald Heal",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> The Stone of Jordan",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "rin",
        "input 4": "isc",
        "output": "The Stone of Jordan",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Stone of Jordan -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Stone of Jordan",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Coldkill",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9ha",
        "input 4": "isc",
        "output": "Coldkill",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Coldkill -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Coldkill",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Butcher's Pupil",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9ax",
        "input 4": "isc",
        "output": "Butcher's Pupil",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Butcher's Pupil -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Butcher's Pupil",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Islestrike",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "92a",
        "input 4": "isc",
        "output": "Islestrike",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Islestrike -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Islestrike",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Pompe's Wrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9mp",
        "input 4": "isc",
        "output": "Pompe's Wrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Pompe's Wrath -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Pompe's Wrath",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Guardian Naga",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9wa",
        "input 4": "isc",
        "output": "Guardian Naga",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Guardian Naga -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Guardian Naga",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Warlord's Trust",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9la",
        "input 4": "isc",
        "output": "Warlord's Trust",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Warlord's Trust -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Warlord's Trust",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Spellsteel",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9ba",
        "input 4": "isc",
        "output": "Spellsteel",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spellsteel -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spellsteel",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Stormrider",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9bt",
        "input 4": "isc",
        "output": "Stormrider",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stormrider -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormrider",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Boneslayer Blade",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9ga",
        "input 4": "isc",
        "output": "Boneslayer Blade",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Boneslayer Blade -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Boneslayer Blade",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Minataur",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9gi",
        "input 4": "isc",
        "output": "The Minataur",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Minataur -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Minataur",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Suicide Branch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9wn",
        "input 4": "isc",
        "output": "Suicide Branch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Suicide Branch -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Suicide Branch",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Carin Shard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9yw",
        "input 4": "isc",
        "output": "Carin Shard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Carin Shard -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Carin Shard",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Arm of King Leoric",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9bw",
        "input 4": "isc",
        "output": "Arm of King Leoric",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Arm of King Leoric -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arm of King Leoric",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Blackhand Key",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9gw",
        "input 4": "isc",
        "output": "Blackhand Key",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blackhand Key -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blackhand Key",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Dark Clan Crusher",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9cl",
        "input 4": "isc",
        "output": "Dark Clan Crusher",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Dark Clan Crusher -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Dark Clan Crusher",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Zakarum's Hand",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "9sc",
        "input 4": "isc",
        "output": "Zakarum's Hand",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Zakarum's Hand -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Zakarum's Hand",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Fetid Sprinkler",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9qs",
        "input 4": "isc",
        "output": "The Fetid Sprinkler",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Fetid Sprinkler -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Fetid Sprinkler",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Hand of Blessed Light",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "9ws",
        "input 4": "isc",
        "output": "Hand of Blessed Light",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Hand of Blessed Light -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hand of Blessed Light",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Fleshrender",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9sp",
        "input 4": "isc",
        "output": "Fleshrender",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Fleshrender -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Fleshrender",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Sureshrill Frost",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9ma",
        "input 4": "isc",
        "output": "Sureshrill Frost",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Sureshrill Frost -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sureshrill Frost",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Moonfall",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9mt",
        "input 4": "isc",
        "output": "Moonfall",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Moonfall -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Moonfall",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Baezil's Vortex",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9fl",
        "input 4": "isc",
        "output": "Baezil's Vortex",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Baezil's Vortex -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Baezil's Vortex",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Earthshaker",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9wh",
        "input 4": "isc",
        "output": "Earthshaker",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Earthshaker -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Earthshaker",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Bloodtree Stump",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9m9",
        "input 4": "isc",
        "output": "Bloodtree Stump",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bloodtree Stump -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodtree Stump",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Gavel of Pain",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9gm",
        "input 4": "isc",
        "output": "The Gavel of Pain",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Gavel of Pain -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Gavel of Pain",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Bloodletter",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9ss",
        "input 4": "isc",
        "output": "Bloodletter",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bloodletter -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodletter",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Coldsteel Eye",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "9sm",
        "input 4": "isc",
        "output": "Coldsteel Eye",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Coldsteel Eye -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Coldsteel Eye",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Hexfire",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9sb",
        "input 4": "isc",
        "output": "Hexfire",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hexfire -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hexfire",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Blade of Ali Baba",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "9fc",
        "input 4": "isc",
        "output": "Blade of Ali Baba",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Blade of Ali Baba -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blade of Ali Baba",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Ginther's Rift",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "9cr",
        "input 4": "isc",
        "output": "Ginther's Rift",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ginther's Rift -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ginther's Rift",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Headstriker",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "9bs",
        "input 4": "isc",
        "output": "Headstriker",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Headstriker -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Headstriker",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Plague Bearer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9ls",
        "input 4": "isc",
        "output": "Plague Bearer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Plague Bearer -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Plague Bearer",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Atlantian",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9wd",
        "input 4": "isc",
        "output": "The Atlantian",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Atlantian -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Atlantian",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Crainte Vomir",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "92h",
        "input 4": "isc",
        "output": "Crainte Vomir",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crainte Vomir -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crainte Vomir",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Bing Sz Wang",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "9cm",
        "input 4": "isc",
        "output": "Bing Sz Wang",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bing Sz Wang -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bing Sz Wang",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Vile Husk",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9gs",
        "input 4": "isc",
        "output": "The Vile Husk",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Vile Husk -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Vile Husk",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cloudcrack",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9b9",
        "input 4": "isc",
        "output": "Cloudcrack",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cloudcrack -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cloudcrack",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Todesfaelle Flamme",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9fb",
        "input 4": "isc",
        "output": "Todesfaelle Flamme",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Todesfaelle Flamme -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Todesfaelle Flamme",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Swordguard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9gd",
        "input 4": "isc",
        "output": "Swordguard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Swordguard -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Swordguard",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Spineripper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9dg",
        "input 4": "isc",
        "output": "Spineripper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spineripper -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spineripper",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Heart Carver",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9di",
        "input 4": "isc",
        "output": "Heart Carver",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Heart Carver -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Heart Carver",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Blackbog's Sharp",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9kr",
        "input 4": "isc",
        "output": "Blackbog's Sharp",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blackbog's Sharp -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blackbog's Sharp",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Stormspike",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9bl",
        "input 4": "isc",
        "output": "Stormspike",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stormspike -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormspike",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Impaler",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9sr",
        "input 4": "isc",
        "output": "The Impaler",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Impaler -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Impaler",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Kelpie Snare",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9tr",
        "input 4": "isc",
        "output": "Kelpie Snare",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Kelpie Snare -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Kelpie Snare",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Soulfeast Tine",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9br",
        "input 4": "isc",
        "output": "Soulfeast Tine",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Soulfeast Tine -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Soulfeast Tine",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Hone Sundan,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "9st",
        "input 4": "isc",
        "output": "Hone Sundan,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Hone Sundan,eth -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hone Sundan,eth",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Hone Sundan",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9st",
        "input 4": "isc",
        "output": "Hone Sundan",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Hone Sundan -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hone Sundan",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Spire of Honor",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9p9",
        "input 4": "isc",
        "output": "Spire of Honor",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spire of Honor -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spire of Honor",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Meat Scraper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9b7",
        "input 4": "isc",
        "output": "The Meat Scraper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Meat Scraper -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Meat Scraper",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Blackleach Blade",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9vo",
        "input 4": "isc",
        "output": "Blackleach Blade",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blackleach Blade -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blackleach Blade",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Athena's Wrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9s8",
        "input 4": "isc",
        "output": "Athena's Wrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Athena's Wrath -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Athena's Wrath",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Pierre Tombale Couant",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9pa",
        "input 4": "isc",
        "output": "Pierre Tombale Couant",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Pierre Tombale Couant -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Pierre Tombale Couant",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Husoldal Evo",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9h9",
        "input 4": "isc",
        "output": "Husoldal Evo",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Husoldal Evo -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Husoldal Evo",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Grim's Burning Dead",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "9wc",
        "input 4": "isc",
        "output": "Grim's Burning Dead",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Grim's Burning Dead -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Grim's Burning Dead",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Razorswitch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "8ss",
        "input 4": "isc",
        "output": "Razorswitch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Razorswitch -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Razorswitch",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Ribcracker,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "8ls",
        "input 4": "isc",
        "output": "Ribcracker,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ribcracker,eth -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ribcracker,eth",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Ribcracker",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "8ls",
        "input 4": "isc",
        "output": "Ribcracker",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ribcracker -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ribcracker",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Chromatic Ire",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "8cs",
        "input 4": "isc",
        "output": "Chromatic Ire",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Chromatic Ire -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Chromatic Ire",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Warpspear",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8bs",
        "input 4": "isc",
        "output": "Warpspear",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Warpspear -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Warpspear",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Skullcollector",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "8ws",
        "input 4": "isc",
        "output": "Skullcollector",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Skullcollector -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Skullcollector",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Skystrike",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8sb",
        "input 4": "isc",
        "output": "Skystrike",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Skystrike -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Skystrike",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Riphook",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8hb",
        "input 4": "isc",
        "output": "Riphook",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Riphook -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Riphook",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Kuko Shakaku",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8lb",
        "input 4": "isc",
        "output": "Kuko Shakaku",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Kuko Shakaku -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Kuko Shakaku",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Endlesshail",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "8cb",
        "input 4": "isc",
        "output": "Endlesshail",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Endlesshail -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Endlesshail",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Whichwild String",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "8s8",
        "input 4": "isc",
        "output": "Whichwild String",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Whichwild String -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Whichwild String",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cliffkiller",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8l8",
        "input 4": "isc",
        "output": "Cliffkiller",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cliffkiller -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cliffkiller",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Magewrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8sw",
        "input 4": "isc",
        "output": "Magewrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Magewrath -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Magewrath",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Godstrike Arch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8lw",
        "input 4": "isc",
        "output": "Godstrike Arch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Godstrike Arch -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Godstrike Arch",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Langer Briser",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "8lx",
        "input 4": "isc",
        "output": "Langer Briser",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Langer Briser -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Langer Briser",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Pus Spiter",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "8mx",
        "input 4": "isc",
        "output": "Pus Spiter",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Pus Spiter -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Pus Spiter",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Buriza-Do Kyanon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "8hx",
        "input 4": "isc",
        "output": "Buriza-Do Kyanon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Buriza-Do Kyanon -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Buriza-Do Kyanon",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Demon Machine",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "8rx",
        "input 4": "isc",
        "output": "Demon Machine",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Demon Machine -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Demon Machine",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Peasent Crown",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xap",
        "input 4": "isc",
        "output": "Peasent Crown",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Peasent Crown -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Peasent Crown",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Rockstopper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xkp",
        "input 4": "isc",
        "output": "Rockstopper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Rockstopper -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rockstopper",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Stealskull",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xlm",
        "input 4": "isc",
        "output": "Stealskull",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Stealskull -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stealskull",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Darksight Helm",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xhl",
        "input 4": "isc",
        "output": "Darksight Helm",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Darksight Helm -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Darksight Helm",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Valkiry Wing",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xhm",
        "input 4": "isc",
        "output": "Valkiry Wing",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Valkiry Wing -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Valkiry Wing",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Crown of Thieves",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "xrn",
        "input 4": "isc",
        "output": "Crown of Thieves",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crown of Thieves -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crown of Thieves",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Blackhorn's Face",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xsk",
        "input 4": "isc",
        "output": "Blackhorn's Face",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blackhorn's Face -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blackhorn's Face",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r30 -> Vampiregaze,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r30",
        "input 3": "xh9",
        "input 4": "isc",
        "output": "Vampiregaze,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Vampiregaze,eth -> r29",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Vampiregaze,eth",
        "output": "r29",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Vampiregaze",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "xh9",
        "input 4": "isc",
        "output": "Vampiregaze",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Vampiregaze -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Vampiregaze",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> The Spirit Shroud",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xui",
        "input 4": "isc",
        "output": "The Spirit Shroud",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Spirit Shroud -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Spirit Shroud",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Skin of the Vipermagi",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "xea",
        "input 4": "isc",
        "output": "Skin of the Vipermagi",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Skin of the Vipermagi -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Skin of the Vipermagi",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Skin of the Flayerd One",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xla",
        "input 4": "isc",
        "output": "Skin of the Flayerd One",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Skin of the Flayerd One -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Skin of the Flayerd One",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Ironpelt",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xtu",
        "input 4": "isc",
        "output": "Ironpelt",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ironpelt -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ironpelt",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Spiritforge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xng",
        "input 4": "isc",
        "output": "Spiritforge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spiritforge -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spiritforge",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Crow Caw",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xcl",
        "input 4": "isc",
        "output": "Crow Caw",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Crow Caw -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crow Caw",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Shaftstop",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xhn",
        "input 4": "isc",
        "output": "Shaftstop",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Shaftstop -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Shaftstop",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Duriel's Shell",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "xrs",
        "input 4": "isc",
        "output": "Duriel's Shell",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Duriel's Shell -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Duriel's Shell",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Skullder's Ire",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xpl",
        "input 4": "isc",
        "output": "Skullder's Ire",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Skullder's Ire -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Skullder's Ire",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Guardian Angel",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xlt",
        "input 4": "isc",
        "output": "Guardian Angel",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Guardian Angel -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Guardian Angel",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Toothrow",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xld",
        "input 4": "isc",
        "output": "Toothrow",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Toothrow -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Toothrow",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Atma's Wail",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xth",
        "input 4": "isc",
        "output": "Atma's Wail",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Atma's Wail -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Atma's Wail",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Black Hades",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xul",
        "input 4": "isc",
        "output": "Black Hades",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Black Hades -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Black Hades",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Corpsemourn",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xar",
        "input 4": "isc",
        "output": "Corpsemourn",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Corpsemourn -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Corpsemourn",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Que-Hegan's Wisdon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xtp",
        "input 4": "isc",
        "output": "Que-Hegan's Wisdon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Que-Hegan's Wisdon -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Que-Hegan's Wisdon",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Visceratuant",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xuc",
        "input 4": "isc",
        "output": "Visceratuant",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Visceratuant -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Visceratuant",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Mosers Blessed Circle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "xml",
        "input 4": "isc",
        "output": "Mosers Blessed Circle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Mosers Blessed Circle -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Mosers Blessed Circle",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Stormchaser",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xrg",
        "input 4": "isc",
        "output": "Stormchaser",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stormchaser -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormchaser",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Tiamat's Rebuke",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xit",
        "input 4": "isc",
        "output": "Tiamat's Rebuke",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Tiamat's Rebuke -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tiamat's Rebuke",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Kerke's Sanctuary",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xow",
        "input 4": "isc",
        "output": "Kerke's Sanctuary",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Kerke's Sanctuary -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Kerke's Sanctuary",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Radimant's Sphere",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xts",
        "input 4": "isc",
        "output": "Radimant's Sphere",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Radimant's Sphere -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Radimant's Sphere",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Lidless Wall",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xsh",
        "input 4": "isc",
        "output": "Lidless Wall",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Lidless Wall -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lidless Wall",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Lance Guard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xpk",
        "input 4": "isc",
        "output": "Lance Guard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Lance Guard -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lance Guard",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Venom Grip",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xlg",
        "input 4": "isc",
        "output": "Venom Grip",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Venom Grip -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Venom Grip",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Gravepalm",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xvg",
        "input 4": "isc",
        "output": "Gravepalm",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Gravepalm -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gravepalm",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Ghoulhide",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xmg",
        "input 4": "isc",
        "output": "Ghoulhide",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ghoulhide -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ghoulhide",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Lavagout",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xtg",
        "input 4": "isc",
        "output": "Lavagout",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Lavagout -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lavagout",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Hellmouth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "xhg",
        "input 4": "isc",
        "output": "Hellmouth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hellmouth -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hellmouth",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Infernostride",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xlb",
        "input 4": "isc",
        "output": "Infernostride",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Infernostride -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Infernostride",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Waterwalk",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "xvb",
        "input 4": "isc",
        "output": "Waterwalk",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Waterwalk -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Waterwalk",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Silkweave",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "xmb",
        "input 4": "isc",
        "output": "Silkweave",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Silkweave -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Silkweave",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Wartraveler",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "xtb",
        "input 4": "isc",
        "output": "Wartraveler",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Wartraveler -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wartraveler",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Gorerider",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "xhb",
        "input 4": "isc",
        "output": "Gorerider",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Gorerider -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gorerider",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> String of Ears",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "zlb",
        "input 4": "isc",
        "output": "String of Ears",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "String of Ears -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "String of Ears",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Razortail",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "zvb",
        "input 4": "isc",
        "output": "Razortail",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Razortail -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Razortail",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Gloomstrap",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "zmb",
        "input 4": "isc",
        "output": "Gloomstrap",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Gloomstrap -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gloomstrap",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Snowclash",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "ztb",
        "input 4": "isc",
        "output": "Snowclash",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Snowclash -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Snowclash",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Thudergod's Vigor",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "zhb",
        "input 4": "isc",
        "output": "Thudergod's Vigor",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Thudergod's Vigor -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Thudergod's Vigor",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Harlequin Crest",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "uap",
        "input 4": "isc",
        "output": "Harlequin Crest",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Harlequin Crest -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Harlequin Crest",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Veil of Steel",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "uhm",
        "input 4": "isc",
        "output": "Veil of Steel",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Veil of Steel -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Veil of Steel",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> The Gladiator's Bane",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "utu",
        "input 4": "isc",
        "output": "The Gladiator's Bane",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Gladiator's Bane -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Gladiator's Bane",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Arkaine's Valor",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "upl",
        "input 4": "isc",
        "output": "Arkaine's Valor",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Arkaine's Valor -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arkaine's Valor",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Blackoak Shield",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "uml",
        "input 4": "isc",
        "output": "Blackoak Shield",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blackoak Shield -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blackoak Shield",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Stormshield",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "uit",
        "input 4": "isc",
        "output": "Stormshield",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Stormshield -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormshield",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Hellslayer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7bt",
        "input 4": "isc",
        "output": "Hellslayer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hellslayer -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hellslayer",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Messerschmidt's Reaver",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7ga",
        "input 4": "isc",
        "output": "Messerschmidt's Reaver",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Messerschmidt's Reaver -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Messerschmidt's Reaver",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Baranar's Star",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7mt",
        "input 4": "isc",
        "output": "Baranar's Star",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Baranar's Star -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Baranar's Star",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Schaefer's Hammer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7wh",
        "input 4": "r23",
        "output": "Schaefer's Hammer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Schaefer's Hammer -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Schaefer's Hammer",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> The Cranium Basher",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7gm",
        "input 4": "isc",
        "output": "The Cranium Basher",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Cranium Basher -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Cranium Basher",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Lightsabre",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "7cr",
        "input 4": "isc",
        "output": "Lightsabre",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Lightsabre -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lightsabre",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Doombringer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7b7",
        "input 4": "isc",
        "output": "Doombringer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Doombringer -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Doombringer",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> The Grandfather",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7gd",
        "input 4": "r23",
        "output": "The Grandfather",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Grandfather -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Grandfather",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Wizardspike",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "7dg",
        "input 4": "isc",
        "output": "Wizardspike",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Wizardspike -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wizardspike",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Stormspire",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7wc",
        "input 4": "isc",
        "output": "Stormspire",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Stormspire -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormspire",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Eaglehorn",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "6l7",
        "input 4": "isc",
        "output": "Eaglehorn",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Eaglehorn -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Eaglehorn",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Windforce",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "6lw",
        "input 4": "isc",
        "output": "Windforce",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Windforce -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Windforce",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Bul Katho's Wedding Band",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "rin",
        "input 4": "isc",
        "output": "Bul Katho's Wedding Band",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bul Katho's Wedding Band -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bul Katho's Wedding Band",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> The Cat's Eye",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amu",
        "input 4": "isc",
        "output": "The Cat's Eye",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Cat's Eye -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Cat's Eye",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> The Rising Sun",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "amu",
        "input 4": "glr",
        "output": "The Rising Sun",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Rising Sun -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Rising Sun",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Crescent Moon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "amu",
        "input 4": "r18",
        "output": "Crescent Moon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crescent Moon -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crescent Moon",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Mara's Kaleidoscope",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "amu",
        "input 4": "isc",
        "output": "Mara's Kaleidoscope",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Mara's Kaleidoscope -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Mara's Kaleidoscope",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Atma's Scarab",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "amu",
        "input 4": "r19",
        "output": "Atma's Scarab",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Atma's Scarab -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Atma's Scarab",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Dwarf Star",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "rin",
        "input 4": "gpv",
        "output": "Dwarf Star",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Dwarf Star -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Dwarf Star",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Raven Frost",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "rin",
        "input 4": "gpb",
        "output": "Raven Frost",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Raven Frost -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Raven Frost",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Highlord's Wrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "amu",
        "input 4": "isc",
        "output": "Highlord's Wrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Highlord's Wrath -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Highlord's Wrath",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Saracen's Chance",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "amu",
        "input 4": "r16",
        "output": "Saracen's Chance",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Saracen's Chance -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Saracen's Chance",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Arreat's Face",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "baa",
        "input 4": "isc",
        "output": "Arreat's Face",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Arreat's Face -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arreat's Face",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Homunculus",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "nea",
        "input 4": "isc",
        "output": "Homunculus",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Homunculus -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Homunculus",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r31 -> Titan's Revenge,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r31",
        "input 3": "yps",
        "input 4": "isc",
        "output": "Titan's Revenge,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Titan's Revenge,eth -> r30",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Titan's Revenge,eth",
        "output": "r30",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Titan's Revenge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "yps",
        "input 4": "isc",
        "output": "Titan's Revenge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Titan's Revenge -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Titan's Revenge",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Lycander's Aim",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "am7",
        "input 4": "isc",
        "output": "Lycander's Aim",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Lycander's Aim -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lycander's Aim",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Lycander's Flank",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "am9",
        "input 4": "isc",
        "output": "Lycander's Flank",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Lycander's Flank -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lycander's Flank",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> The Oculus",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "oba",
        "input 4": "isc",
        "output": "The Oculus",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Oculus -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Oculus",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Herald of Zakarum",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "pa9",
        "input 4": "r23",
        "output": "Herald of Zakarum",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Herald of Zakarum -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Herald of Zakarum",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Cutthroat1",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "9lw",
        "input 4": "isc",
        "output": "Cutthroat1",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Cutthroat1 -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cutthroat1",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Jalal's Mane",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "dra",
        "input 4": "isc",
        "output": "Jalal's Mane",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Jalal's Mane -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Jalal's Mane",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> The Scalper,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "9ta",
        "input 4": "isc",
        "output": "The Scalper,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Scalper,eth -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Scalper,eth",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> The Scalper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9ta",
        "input 4": "isc",
        "output": "The Scalper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Scalper -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Scalper",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Bloodmoon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "7sb",
        "input 4": "isc",
        "output": "Bloodmoon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bloodmoon -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodmoon",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Djinnslayer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7sm",
        "input 4": "isc",
        "output": "Djinnslayer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Djinnslayer -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Djinnslayer",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Deathbit",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "9tk",
        "input 4": "isc",
        "output": "Deathbit",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Deathbit -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Deathbit",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Warshrike",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "7bk",
        "input 4": "isc",
        "output": "Warshrike",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Warshrike -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Warshrike",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Gutsiphon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "6rx",
        "input 4": "isc",
        "output": "Gutsiphon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Gutsiphon -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gutsiphon",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Razoredge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7ha",
        "input 4": "isc",
        "output": "Razoredge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Razoredge -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Razoredge",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Demonlimb",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "7sp",
        "input 4": "isc",
        "output": "Demonlimb",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Demonlimb -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Demonlimb",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Steelshade",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "ulm",
        "input 4": "isc",
        "output": "Steelshade",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Steelshade -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Steelshade",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r28 -> Tomb Reaver,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r28",
        "input 3": "7pa",
        "input 4": "isc",
        "output": "Tomb Reaver,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tomb Reaver,eth -> r27",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tomb Reaver,eth",
        "output": "r27",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Tomb Reaver",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "7pa",
        "input 4": "isc",
        "output": "Tomb Reaver",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tomb Reaver -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tomb Reaver",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r28 -> Deaths's Web",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r28",
        "input 3": "7gw",
        "input 4": "isc",
        "output": "Deaths's Web",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Deaths's Web -> r27",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Deaths's Web",
        "output": "r27",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Nature's Peace",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "rin",
        "input 4": "gpr",
        "output": "Nature's Peace",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Nature's Peace -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Nature's Peace",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Azurewrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7cr",
        "input 4": "r23",
        "output": "Azurewrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Azurewrath -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Azurewrath",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Seraph's Hymn",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "amu",
        "input 4": "gpw",
        "output": "Seraph's Hymn",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Seraph's Hymn -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Seraph's Hymn",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Fleshripper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "7kr",
        "input 4": "isc",
        "output": "Fleshripper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Fleshripper -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Fleshripper",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Horizon's Tornado",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7fl",
        "input 4": "isc",
        "output": "Horizon's Tornado",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Horizon's Tornado -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Horizon's Tornado",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Stone Crusher",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7wh",
        "input 4": "isc",
        "output": "Stone Crusher",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stone Crusher -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stone Crusher",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Jadetalon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "7wb",
        "input 4": "isc",
        "output": "Jadetalon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Jadetalon -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Jadetalon",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Shadowdancer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "uhb",
        "input 4": "isc",
        "output": "Shadowdancer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Shadowdancer -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Shadowdancer",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Cerebus",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "drb",
        "input 4": "isc",
        "output": "Cerebus",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Cerebus -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cerebus",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Tyrael's Might",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "uar",
        "input 4": "isc",
        "output": "Tyrael's Might",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tyrael's Might -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tyrael's Might",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Souldrain",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "umg",
        "input 4": "isc",
        "output": "Souldrain",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Souldrain -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Souldrain",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Runemaster,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "72a",
        "input 4": "isc",
        "output": "Runemaster,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Runemaster,eth -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Runemaster,eth",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Runemaster",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "72a",
        "input 4": "isc",
        "output": "Runemaster",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Runemaster -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Runemaster",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Deathcleaver",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7wa",
        "input 4": "isc",
        "output": "Deathcleaver",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Deathcleaver -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Deathcleaver",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Executioner's Justice",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7gi",
        "input 4": "isc",
        "output": "Executioner's Justice",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Executioner's Justice -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Executioner's Justice",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Stoneraven",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "amd",
        "input 4": "isc",
        "output": "Stoneraven",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Stoneraven -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stoneraven",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Leviathan",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "uld",
        "input 4": "isc",
        "output": "Leviathan",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Leviathan -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Leviathan",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Wisp",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "rin",
        "input 4": "r19",
        "output": "Wisp",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Wisp -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wisp",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Gargoyle's Bite",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7ts",
        "input 4": "isc",
        "output": "Gargoyle's Bite",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Gargoyle's Bite -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gargoyle's Bite",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Lacerator,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "7b8",
        "input 4": "isc",
        "output": "Lacerator,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Lacerator,eth -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lacerator,eth",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Lacerator",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7b8",
        "input 4": "isc",
        "output": "Lacerator",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Lacerator -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lacerator",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Mang Song's Lesson",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "6ws",
        "input 4": "isc",
        "output": "Mang Song's Lesson",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Mang Song's Lesson -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Mang Song's Lesson",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Viperfork",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7br",
        "input 4": "isc",
        "output": "Viperfork",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Viperfork -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Viperfork",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Ethereal Edge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7ba",
        "input 4": "isc",
        "output": "Ethereal Edge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ethereal Edge -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ethereal Edge",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Demonhorn's Edge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "bad",
        "input 4": "isc",
        "output": "Demonhorn's Edge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Demonhorn's Edge -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Demonhorn's Edge",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r28 -> The Reaper's Toll,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r28",
        "input 3": "7s8",
        "input 4": "isc",
        "output": "The Reaper's Toll,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Reaper's Toll,eth -> r27",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Reaper's Toll,eth",
        "output": "r27",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> The Reaper's Toll",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "7s8",
        "input 4": "isc",
        "output": "The Reaper's Toll",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Reaper's Toll -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Reaper's Toll",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Spiritkeeper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "drd",
        "input 4": "isc",
        "output": "Spiritkeeper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spiritkeeper -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spiritkeeper",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Hellrack",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "6hx",
        "input 4": "isc",
        "output": "Hellrack",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Hellrack -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hellrack",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Alma Negra",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "pac",
        "input 4": "isc",
        "output": "Alma Negra",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Alma Negra -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Alma Negra",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Darkforge Spawn",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "nef",
        "input 4": "isc",
        "output": "Darkforge Spawn",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Darkforge Spawn -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Darkforge Spawn",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Widowmaker",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "6sw",
        "input 4": "isc",
        "output": "Widowmaker",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Widowmaker -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Widowmaker",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Bloodraven's Charge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amb",
        "input 4": "isc",
        "output": "Bloodraven's Charge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bloodraven's Charge -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodraven's Charge",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Ghostflame",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7bl",
        "input 4": "isc",
        "output": "Ghostflame",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ghostflame -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ghostflame",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Shadowkiller",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7cs",
        "input 4": "isc",
        "output": "Shadowkiller",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Shadowkiller -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Shadowkiller",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Gimmershred",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7ta",
        "input 4": "isc",
        "output": "Gimmershred",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Gimmershred -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gimmershred",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r30 -> Griffon's Eye",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r30",
        "input 3": "ci3",
        "input 4": "isc",
        "output": "Griffon's Eye",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Griffon's Eye -> r29",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Griffon's Eye",
        "output": "r29",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Windhammer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "7m7",
        "input 4": "isc",
        "output": "Windhammer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Windhammer -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Windhammer",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Thunderstroke",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "amf",
        "input 4": "isc",
        "output": "Thunderstroke",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Thunderstroke -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Thunderstroke",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Demon's Arch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7s7",
        "input 4": "isc",
        "output": "Demon's Arch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Demon's Arch -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Demon's Arch",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Boneflame",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "nee",
        "input 4": "isc",
        "output": "Boneflame",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Boneflame -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Boneflame",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Steelpillar",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7p7",
        "input 4": "isc",
        "output": "Steelpillar",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Steelpillar -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Steelpillar",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Nightwing's Veil",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "uhm",
        "input 4": "r24",
        "output": "Nightwing's Veil",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Nightwing's Veil -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Nightwing's Veil",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Crown of Ages",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "urn",
        "input 4": "isc",
        "output": "Crown of Ages",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crown of Ages -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crown of Ages",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r31 -> Andariel's Visage,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r31",
        "input 3": "usk",
        "input 4": "r30",
        "output": "Andariel's Visage,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Andariel's Visage,eth -> r31",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Andariel's Visage,eth",
        "output": "r31",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r25 -> Andariel's Visage",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "usk",
        "input 4": "isc",
        "output": "Andariel's Visage",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Andariel's Visage -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Andariel's Visage",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Darkfear",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ulm",
        "input 4": "isc",
        "output": "Darkfear",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Darkfear -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Darkfear",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Dragonscale",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "pae",
        "input 4": "r23",
        "output": "Dragonscale",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Dragonscale -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Dragonscale",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Steel Carapice",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "uul",
        "input 4": "isc",
        "output": "Steel Carapice",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Steel Carapice -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Steel Carapice",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Medusa's Gaze",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "uow",
        "input 4": "isc",
        "output": "Medusa's Gaze",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Medusa's Gaze -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Medusa's Gaze",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Ravenlore",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "dre",
        "input 4": "isc",
        "output": "Ravenlore",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ravenlore -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ravenlore",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Boneshade",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "7bw",
        "input 4": "isc",
        "output": "Boneshade",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Boneshade -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Boneshade",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Flamebellow",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7gs",
        "input 4": "isc",
        "output": "Flamebellow",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Flamebellow -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Flamebellow",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Fathom",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "obf",
        "input 4": "isc",
        "output": "Fathom",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Fathom -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Fathom",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Wolfhowl",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "bac",
        "input 4": "isc",
        "output": "Wolfhowl",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Wolfhowl -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wolfhowl",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Spirit Ward",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "uts",
        "input 4": "isc",
        "output": "Spirit Ward",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spirit Ward -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spirit Ward",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Kira's Guardian",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "ci2",
        "input 4": "isc",
        "output": "Kira's Guardian",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Kira's Guardian -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Kira's Guardian",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Ormus' Robes",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "uui",
        "input 4": "isc",
        "output": "Ormus' Robes",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ormus' Robes -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ormus' Robes",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Gheed's Fortune",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "cm3",
        "input 4": "isc",
        "output": "Gheed's Fortune",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Gheed's Fortune -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gheed's Fortune",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Stormlash",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7fl",
        "input 4": "r23",
        "output": "Stormlash",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Stormlash -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormlash",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Halaberd's Reign",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "bae",
        "input 4": "isc",
        "output": "Halaberd's Reign",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Halaberd's Reign -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Halaberd's Reign",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Spike Thorn",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "upk",
        "input 4": "isc",
        "output": "Spike Thorn",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Spike Thorn -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spike Thorn",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Dracul's Grasp",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "uvg",
        "input 4": "isc",
        "output": "Dracul's Grasp",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Dracul's Grasp -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Dracul's Grasp",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Frostwind",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7ls",
        "input 4": "isc",
        "output": "Frostwind",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Frostwind -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Frostwind",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Templar's Might",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "uar",
        "input 4": "r23",
        "output": "Templar's Might",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Templar's Might -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Templar's Might",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Eschuta's temper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "obc",
        "input 4": "r23",
        "output": "Eschuta's temper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Eschuta's temper -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Eschuta's temper",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Firelizard's Talons",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7lw",
        "input 4": "isc",
        "output": "Firelizard's Talons",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Firelizard's Talons -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Firelizard's Talons",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Sandstorm Trek",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "uvb",
        "input 4": "isc",
        "output": "Sandstorm Trek",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Sandstorm Trek -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sandstorm Trek",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Marrowwalk",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "umb",
        "input 4": "isc",
        "output": "Marrowwalk",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Marrowwalk -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Marrowwalk",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Heaven's Light",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7sc",
        "input 4": "r21",
        "output": "Heaven's Light",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Heaven's Light -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Heaven's Light",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r25 -> Arachnid Mesh",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "ulc",
        "input 4": "isc",
        "output": "Arachnid Mesh",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Arachnid Mesh -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arachnid Mesh",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Nosferatu's Coil",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "uvc",
        "input 4": "isc",
        "output": "Nosferatu's Coil",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Nosferatu's Coil -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Nosferatu's Coil",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Metalgrid",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "amu",
        "input 4": "isc",
        "output": "Metalgrid",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Metalgrid -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Metalgrid",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Verdugo's Hearty Cord",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "umc",
        "input 4": "isc",
        "output": "Verdugo's Hearty Cord",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Verdugo's Hearty Cord -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Verdugo's Hearty Cord",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Carrion Wind",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "rin",
        "input 4": "r19",
        "output": "Carrion Wind",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Carrion Wind -> r18",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Carrion Wind",
        "output": "r18",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r25 -> Giantskull",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "uh9",
        "input 4": "isc",
        "output": "Giantskull",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Giantskull -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Giantskull",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Ironward",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7ws",
        "input 4": "isc",
        "output": "Ironward",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ironward -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ironward",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Arioc's Needle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "7sr",
        "input 4": "isc",
        "output": "Arioc's Needle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Arioc's Needle -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arioc's Needle",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Cranebeak",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7mp",
        "input 4": "isc",
        "output": "Cranebeak",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cranebeak -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cranebeak",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Nord's Tenderizer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "7cl",
        "input 4": "isc",
        "output": "Nord's Tenderizer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Nord's Tenderizer -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Nord's Tenderizer",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Earthshifter",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7gm",
        "input 4": "isc",
        "output": "Earthshifter",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Earthshifter -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Earthshifter",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Wraithflight",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "7gl",
        "input 4": "isc",
        "output": "Wraithflight",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Wraithflight -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wraithflight",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Bonehew",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "7o7",
        "input 4": "isc",
        "output": "Bonehew",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bonehew -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bonehew",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Ondal's Wisdom",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "6cs",
        "input 4": "isc",
        "output": "Ondal's Wisdom",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ondal's Wisdom -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ondal's Wisdom",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> The Reedeemer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7sc",
        "input 4": "isc",
        "output": "The Reedeemer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Reedeemer -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Reedeemer",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Headhunter's Glory",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "ush",
        "input 4": "isc",
        "output": "Headhunter's Glory",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Headhunter's Glory -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Headhunter's Glory",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Steelrend",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "uhg",
        "input 4": "isc",
        "output": "Steelrend",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Steelrend -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Steelrend",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Ars Al'Diablolos",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "waf",
        "input 4": "isc",
        "output": "Ars Al'Diablolos",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ars Al'Diablolos -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ars Al'Diablolos",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Ars Tor'Baalos",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "wae",
        "input 4": "isc",
        "output": "Ars Tor'Baalos",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ars Tor'Baalos -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ars Tor'Baalos",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Ars Dul'Mephistos",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "wac",
        "input 4": "isc",
        "output": "Ars Dul'Mephistos",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ars Dul'Mephistos -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ars Dul'Mephistos",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Measured Wrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "wa6",
        "input 4": "r23",
        "output": "Measured Wrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Measured Wrath -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Measured Wrath",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Dreadfang",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "72h",
        "input 4": "isc",
        "output": "Dreadfang",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Dreadfang -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Dreadfang",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Wraithstep",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "utb",
        "input 4": "isc",
        "output": "Wraithstep",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Wraithstep -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wraithstep",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Bloodpact Shard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "7di",
        "input 4": "isc",
        "output": "Bloodpact Shard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bloodpact Shard -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodpact Shard",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r28 -> Sling",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r28",
        "input 3": "rin",
        "input 4": "isc",
        "output": "Sling",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Sling -> r27",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sling",
        "output": "r27",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Opalvein",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "rin",
        "input 4": "r19",
        "output": "Opalvein",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Opalvein -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Opalvein",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r30 -> Entropy Locket",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r30",
        "input 3": "amu",
        "input 4": "isc",
        "output": "Entropy Locket",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Entropy Locket -> r29",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Entropy Locket",
        "output": "r29",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Gheed's Wager",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "utc",
        "input 4": "r23",
        "output": "Gheed's Wager",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Gheed's Wager -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gheed's Wager",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r30 -> Unique Warlock Helm",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r30",
        "input 3": "xsk",
        "input 4": "isc",
        "output": "Unique Warlock Helm",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Unique Warlock Helm -> r29",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Unique Warlock Helm",
        "output": "r29",
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "r22 -> Cold Rupture",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "cm3",
        "input 4": "glb",
        "output": "Cold Rupture",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "Cold Rupture -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cold Rupture",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "r22 -> Flame Rift",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "cm3",
        "input 4": "glr",
        "output": "Flame Rift",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "Flame Rift -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Flame Rift",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "r22 -> Crack of the Heavens",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "cm3",
        "input 4": "glw",
        "output": "Crack of the Heavens",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "Crack of the Heavens -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crack of the Heavens",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "r22 -> Rotting Fissure",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "cm3",
        "input 4": "glg",
        "output": "Rotting Fissure",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "Rotting Fissure -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rotting Fissure",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "r22 -> Bone Break",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "cm3",
        "input 4": "skl",
        "output": "Bone Break",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "Bone Break -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bone Break",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "r22 -> Black Cleft",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "cm3",
        "input 4": "gzv",
        "output": "Black Cleft",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "Black Cleft -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Black Cleft",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Crafted Cold Rupture",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "cm3",
        "input 4": "gpb",
        "output": "Crafted Cold Rupture",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crafted Cold Rupture -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crafted Cold Rupture",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Crafted Flame Rift",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "cm3",
        "input 4": "gpr",
        "output": "Crafted Flame Rift",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crafted Flame Rift -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crafted Flame Rift",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Crafted Crack of the Heavens",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "cm3",
        "input 4": "gpw",
        "output": "Crafted Crack of the Heavens",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crafted Crack of the Heavens -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crafted Crack of the Heavens",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Crafted Rotting Fissure",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "cm3",
        "input 4": "gpg",
        "output": "Crafted Rotting Fissure",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crafted Rotting Fissure -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crafted Rotting Fissure",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Crafted Bone Break",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "cm3",
        "input 4": "skz",
        "output": "Crafted Bone Break",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crafted Bone Break -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crafted Bone Break",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Crafted Black Cleft",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "cm3",
        "input 4": "gpv",
        "output": "Crafted Black Cleft",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crafted Black Cleft -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crafted Black Cleft",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> toa",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "wms",
        "input 4": "isc",
        "output": "toa",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "toa -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "toa",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r26 -> 7wa,nor,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "r01",
        "input 4": "glw",
        "output": "7wa,nor,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> 7wa,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r02",
        "input 4": "glw",
        "output": "7wa,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r28 -> 7wa,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r28",
        "input 3": "r03",
        "input 4": "glw",
        "output": "7wa,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r26 -> 7wa,nor,eth,sock=6",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "r04",
        "input 4": "glw",
        "output": "7wa,nor,eth,sock=6",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r26 -> 7wa,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "r05",
        "input 4": "glw",
        "output": "7wa,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> 72a,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r06",
        "input 4": "glw",
        "output": "72a,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 72a,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r07",
        "input 4": "glw",
        "output": "72a,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> 72a,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r08",
        "input 4": "glw",
        "output": "72a,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7fl,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r09",
        "input 4": "glw",
        "output": "7fl,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> 7ax,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r10",
        "input 4": "glw",
        "output": "7ax,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> crs,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r01",
        "input 4": "glg",
        "output": "crs,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> 7cr,nor,sock=3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r02",
        "input 4": "glg",
        "output": "7cr,nor,sock=3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> 7cr,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r03",
        "input 4": "glg",
        "output": "7cr,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> 7cr,nor,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r04",
        "input 4": "glg",
        "output": "7cr,nor,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r26 -> 7gm,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "r05",
        "input 4": "glg",
        "output": "7gm,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r26 -> 7gm,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "r06",
        "input 4": "glg",
        "output": "7gm,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r25 -> 7gm,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "r07",
        "input 4": "glg",
        "output": "7gm,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r23 -> 7gm,nor,eth,sock=6",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "r08",
        "input 4": "glg",
        "output": "7gm,nor,eth,sock=6",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7st,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r09",
        "input 4": "glg",
        "output": "7st,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r25 -> 7p7,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "r10",
        "input 4": "glg",
        "output": "7p7,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> 7gs,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r01",
        "input 4": "gly",
        "output": "7gs,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7gs,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r02",
        "input 4": "gly",
        "output": "7gs,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> 7cm,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r03",
        "input 4": "gly",
        "output": "7cm,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r23 -> 7gd,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "r04",
        "input 4": "gly",
        "output": "7gd,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7gd,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r05",
        "input 4": "gly",
        "output": "7gd,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7gd,nor,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r06",
        "input 4": "gly",
        "output": "7gd,nor,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> 7gd,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r07",
        "input 4": "gly",
        "output": "7gd,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> 7gd,nor,eth,sock=6",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r08",
        "input 4": "gly",
        "output": "7gd,nor,eth,sock=6",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7s8,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r09",
        "input 4": "gly",
        "output": "7s8,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7s8,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r10",
        "input 4": "gly",
        "output": "7s8,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r27 -> 7s8,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "r01",
        "input 4": "glb",
        "output": "7s8,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7s8,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r02",
        "input 4": "glb",
        "output": "7s8,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r25 -> 7vo,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "r03",
        "input 4": "glb",
        "output": "7vo,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r27 -> 7wc,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "r04",
        "input 4": "glb",
        "output": "7wc,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r26 -> 7pa,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "r05",
        "input 4": "glb",
        "output": "7pa,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r25 -> 7h7,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "r06",
        "input 4": "glb",
        "output": "7h7,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r25 -> 7h7,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "r07",
        "input 4": "glb",
        "output": "7h7,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> fla,nor,sock=3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r08",
        "input 4": "glb",
        "output": "fla,nor,sock=3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> fla,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r09",
        "input 4": "glb",
        "output": "fla,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> fla,nor,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r10",
        "input 4": "glb",
        "output": "fla,nor,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> fla,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r01",
        "input 4": "glr",
        "output": "fla,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> fla,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r02",
        "input 4": "glr",
        "output": "fla,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> crs,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r03",
        "input 4": "glr",
        "output": "crs,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> crs,nor,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r04",
        "input 4": "glr",
        "output": "crs,nor,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> crs,nor,sock=6",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r05",
        "input 4": "glr",
        "output": "crs,nor,sock=6",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> crs,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r06",
        "input 4": "glr",
        "output": "crs,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> crs,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r07",
        "input 4": "glr",
        "output": "crs,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> uh9,nor,sock=3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r08",
        "input 4": "glr",
        "output": "uh9,nor,sock=3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> xtp,nor,sock=3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r09",
        "input 4": "glr",
        "output": "xtp,nor,sock=3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> xtp,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r10",
        "input 4": "glr",
        "output": "xtp,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> utp,nor,sock=3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r01",
        "input 4": "gzv",
        "output": "utp,nor,sock=3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> utp,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r02",
        "input 4": "gzv",
        "output": "utp,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> uui,nor,sock=3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r03",
        "input 4": "gzv",
        "output": "uui,nor,sock=3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> uui,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r04",
        "input 4": "gzv",
        "output": "uui,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> uar,nor,eth,sock=3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r05",
        "input 4": "gzv",
        "output": "uar,nor,eth,sock=3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> uar,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r06",
        "input 4": "gzv",
        "output": "uar,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> uit,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r07",
        "input 4": "gzv",
        "output": "uit,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> uit,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r08",
        "input 4": "gzv",
        "output": "uit,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r27 -> 7br,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "r09",
        "input 4": "gzv",
        "output": "7br,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

if (config.baseMarket) {
      cubemain.rows.push({
        description: "r25 -> 7br,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "r10",
        "input 4": "gzv",
        "output": "7br,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> 7br,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r11",
        "input 4": "gzv",
        "output": "7br,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }



    if (config.torchMarket) {
      cubemain.rows.push({
        description: "r21 -> xa1",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r11",
        "input 4": "wms",
        "output": "xa1",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "xa1 -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "xa1",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "r21 -> xa2",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r12",
        "input 4": "wms",
        "output": "xa2",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "xa2 -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "xa2",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "r21 -> xa3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r13",
        "input 4": "wms",
        "output": "xa3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "xa3 -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "xa3",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "r21 -> xa4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r14",
        "input 4": "wms",
        "output": "xa4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "xa4 -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "xa4",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "r21 -> xa5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r15",
        "input 4": "wms",
        "output": "xa5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "xa5 -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "xa5",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "r22 -> pk1",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r01",
        "input 4": "wms",
        "output": "pk1",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "pk1 -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "pk1",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "r22 -> pk2",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r02",
        "input 4": "wms",
        "output": "pk2",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "pk2 -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "pk2",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "r22 -> pk3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r03",
        "input 4": "wms",
        "output": "pk3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "pk3 -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "pk3",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "r20 -> tes",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r01",
        "input 4": "wms",
        "output": "tes",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "tes -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "tes",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "r20 -> ceh",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r03",
        "input 4": "wms",
        "output": "ceh",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "ceh -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "ceh",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "r22 -> bet",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r04",
        "input 4": "wms",
        "output": "bet",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "bet -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "bet",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "r22 -> fed",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r05",
        "input 4": "wms",
        "output": "fed",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.torchMarket) {
      cubemain.rows.push({
        description: "fed -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "fed",
        "output": "r22",
        "*eol": 0,
      });
    }


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r05,r06,r14,r15 -> 2ax",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r05",
    "input 3": "r06",
    "input 4": "r14",
    "input 5": "r15",
    "input 6": "vps",
    "output": "2ax,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r03,r05,r12 -> 2hs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r03",
    "input 4": "r05",
    "input 5": "r12",
    "input 6": "vps",
    "output": "2hs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r08,r10,r13 -> 6bs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r08",
    "input 4": "r10",
    "input 5": "r13",
    "input 6": "vps",
    "output": "6bs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r10,r11,r13 -> 6cb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r13",
    "input 6": "vps",
    "output": "6cb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r12,r13,r16,r17 -> 6cs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r12",
    "input 3": "r13",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "6cs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r06,r10,r13 -> 6hb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r06",
    "input 4": "r10",
    "input 5": "r13",
    "input 6": "vps",
    "output": "6hb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r08,r09,r10 -> 6hx",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r08",
    "input 4": "r09",
    "input 5": "r10",
    "input 6": "vps",
    "output": "6hx,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r11,r12,r17 -> 6l7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r17",
    "input 6": "vps",
    "output": "6l7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r08,r09,r14,r17 -> 6lb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r14",
    "input 5": "r17",
    "input 6": "vps",
    "output": "6lb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r05,r08,r09 -> 6ls",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r05",
    "input 4": "r08",
    "input 5": "r09",
    "input 6": "vps",
    "output": "6ls,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r04,r09,r10 -> 6lw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r04",
    "input 4": "r09",
    "input 5": "r10",
    "input 6": "vps",
    "output": "6lw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r09,r10,r11,r15 -> 6lx",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r09",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r15",
    "input 6": "vps",
    "output": "6lx,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r06,r15,r17,r18 -> 6mx",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r06",
    "input 3": "r15",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "6mx,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r04,r07,r15 -> 6rx",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r04",
    "input 4": "r07",
    "input 5": "r15",
    "input 6": "vps",
    "output": "6rx,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r13,r14,r17,r18 -> 6s7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r13",
    "input 3": "r14",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "6s7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r08,r13,r14,r17 -> 6sb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r08",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r17",
    "input 6": "vps",
    "output": "6sb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r11,r12,r17 -> 6ss",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r17",
    "input 6": "vps",
    "output": "6ss,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r10,r13,r17,r18 -> 6sw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r10",
    "input 3": "r13",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "6sw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r09,r13,r14,r17,r18 -> 6ws",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r09",
    "input 2": "r13",
    "input 3": "r14",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "6ws,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r06,r08,r11,r14 -> 72a",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r06",
    "input 3": "r08",
    "input 4": "r11",
    "input 5": "r14",
    "input 6": "vps",
    "output": "72a,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r06,r09,r10,r18 -> 72h",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r06",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r18",
    "input 6": "vps",
    "output": "72h,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r11,r12,r13,r15 -> 7ar",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r11",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "7ar,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r04,r08,r17 -> 7ax",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r04",
    "input 4": "r08",
    "input 5": "r17",
    "input 6": "vps",
    "output": "7ax,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r05,r07,r18 -> 7b7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r05",
    "input 4": "r07",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7b7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r07,r13,r16 -> 7b8",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r07",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "7b8,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r10,r12,r17 -> 7ba",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r17",
    "input 6": "vps",
    "output": "7ba,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r05,r07,r09,r14 -> 7bk",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r09",
    "input 5": "r14",
    "input 6": "vps",
    "output": "7bk,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r08,r11,r16 -> 7bl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r08",
    "input 4": "r11",
    "input 5": "r16",
    "input 6": "vps",
    "output": "7bl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r10,r12,r15,r18 -> 7br",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r10",
    "input 3": "r12",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7br,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r08,r11,r17 -> 7bs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r08",
    "input 4": "r11",
    "input 5": "r17",
    "input 6": "vps",
    "output": "7bs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r07,r13,r16,r17 -> 7bt",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r07",
    "input 3": "r13",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "7bt,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r11,r17,r18 -> 7bw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r11",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7bw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r08,r09,r10,r12 -> 7cl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r12",
    "input 6": "vps",
    "output": "7cl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r14,r15,r16,r17 -> 7cm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r14",
    "input 3": "r15",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "7cm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r09,r10,r16 -> 7cr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r16",
    "input 6": "vps",
    "output": "7cr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r07,r11,r17,r18 -> 7cs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r07",
    "input 3": "r11",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7cs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r09,r12,r13,r16 -> 7dg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r09",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "7dg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r11,r12,r18 -> 7di",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7di,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r06,r07,r10 -> 7fb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r06",
    "input 4": "r07",
    "input 5": "r10",
    "input 6": "vps",
    "output": "7fb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r06,r13,r14,r16 -> 7fc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r06",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "7fc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r10,r13,r16 -> 7fl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "7fl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r06,r16,r18 -> 7ga",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r06",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7ga,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r09,r16,r17 -> 7gd",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r09",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "7gd,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r05,r07,r08,r14 -> 7gi",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r08",
    "input 5": "r14",
    "input 6": "vps",
    "output": "7gi,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r06,r09,r12,r14 -> 7gl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r06",
    "input 3": "r09",
    "input 4": "r12",
    "input 5": "r14",
    "input 6": "vps",
    "output": "7gl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r11,r12,r13 -> 7gm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r13",
    "input 6": "vps",
    "output": "7gm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r07,r10,r13,r15 -> 7gs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "7gs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r10,r12,r13,r15 -> 7gw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r10",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "7gw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r06,r07,r14 -> 7h7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r06",
    "input 4": "r07",
    "input 5": "r14",
    "input 6": "vps",
    "output": "7h7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r08,r10,r16 -> 7ha",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r08",
    "input 4": "r10",
    "input 5": "r16",
    "input 6": "vps",
    "output": "7ha,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r04,r07,r11 -> 7hw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r04",
    "input 4": "r07",
    "input 5": "r11",
    "input 6": "vps",
    "output": "7hw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r10,r12,r16 -> 7ja",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r16",
    "input 6": "vps",
    "output": "7ja,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r14,r15,r16,r18 -> 7kr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r14",
    "input 3": "r15",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7kr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r09,r15,r16 -> 7la",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r09",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "7la,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r10,r13,r14 -> 7ls",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r14",
    "input 6": "vps",
    "output": "7ls,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r06,r07,r13 -> 7lw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r06",
    "input 4": "r07",
    "input 5": "r13",
    "input 6": "vps",
    "output": "7lw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r13,r14,r16,r17 -> 7m7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r13",
    "input 3": "r14",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "7m7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r04,r09,r14 -> 7ma",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r04",
    "input 4": "r09",
    "input 5": "r14",
    "input 6": "vps",
    "output": "7ma,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r09,r10,r13,r15 -> 7mf",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r09",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "7mf,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r05,r07,r10,r17 -> 7mp",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r10",
    "input 5": "r17",
    "input 6": "vps",
    "output": "7mp,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r05,r07,r14,r17 -> 7o7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r14",
    "input 5": "r17",
    "input 6": "vps",
    "output": "7o7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r08,r09,r10,r12 -> 7p7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r12",
    "input 6": "vps",
    "output": "7p7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r10,r11,r12,r17 -> 7pa",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r10",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r17",
    "input 6": "vps",
    "output": "7pa,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r07,r12,r16,r18 -> 7pi",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r07",
    "input 3": "r12",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7pi,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r13,r16,r18 -> 7qr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r13",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7qr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r09,r11,r17,r18 -> 7qs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7qs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r07,r08,r10,r14 -> 7s7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r07",
    "input 3": "r08",
    "input 4": "r10",
    "input 5": "r14",
    "input 6": "vps",
    "output": "7s7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r13,r14,r18 -> 7s8",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7s8,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r07,r16,r17 -> 7sb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "7sb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r12,r14,r18 -> 7sc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r12",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7sc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r07,r14,r16 -> 7sm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "7sm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r05,r08,r13 -> 7sp",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r05",
    "input 4": "r08",
    "input 5": "r13",
    "input 6": "vps",
    "output": "7sp,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r06,r07,r10,r18 -> 7sr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r06",
    "input 3": "r07",
    "input 4": "r10",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7sr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r06,r10,r12,r16 -> 7ss",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r06",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r16",
    "input 6": "vps",
    "output": "7ss,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r08,r09,r16,r18 -> 7st",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7st,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r11,r13,r17 -> 7ta",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r17",
    "input 6": "vps",
    "output": "7ta,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r11,r13,r15,r16 -> 7tk",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r11",
    "input 3": "r13",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "7tk,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r08,r09,r10,r12 -> 7tr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r12",
    "input 6": "vps",
    "output": "7tr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r10,r12,r18 -> 7ts",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7ts,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r11,r13,r14 -> 7vo",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r14",
    "input 6": "vps",
    "output": "7vo,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r10,r14,r18 -> 7wa",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7wa,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r07,r09,r12 -> 7wb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r09",
    "input 5": "r12",
    "input 6": "vps",
    "output": "7wb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r07,r09,r13 -> 7wc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r07",
    "input 4": "r09",
    "input 5": "r13",
    "input 6": "vps",
    "output": "7wc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r09,r14,r16,r17 -> 7wd",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r09",
    "input 3": "r14",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "7wd,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r12,r13,r15,r16 -> 7wh",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r12",
    "input 3": "r13",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "7wh,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r12,r13,r16,r18 -> 7wn",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r12",
    "input 3": "r13",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7wn,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r07,r08,r09,r12 -> 7ws",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r07",
    "input 3": "r08",
    "input 4": "r09",
    "input 5": "r12",
    "input 6": "vps",
    "output": "7ws,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r09,r14,r17 -> 7xf",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r09",
    "input 4": "r14",
    "input 5": "r17",
    "input 6": "vps",
    "output": "7xf,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r06,r12,r16,r18 -> 7yw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r06",
    "input 3": "r12",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "7yw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r07,r08,r10,r16 -> 8bs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r07",
    "input 3": "r08",
    "input 4": "r10",
    "input 5": "r16",
    "input 6": "vps",
    "output": "8bs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r15,r16,r17 -> 8cb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r15",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "8cb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r09,r12,r16,r18 -> 8cs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r09",
    "input 3": "r12",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "8cs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r09,r12,r15,r16 -> 8hb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r09",
    "input 3": "r12",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "8hb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r10,r11,r12,r18 -> 8hx",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r10",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r18",
    "input 6": "vps",
    "output": "8hx,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r07,r12,r13,r14 -> 8l8",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r07",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r14",
    "input 6": "vps",
    "output": "8l8,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r07,r11,r13,r16 -> 8lb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r07",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "8lb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r11,r16,r17,r18 -> 8ls",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r11",
    "input 3": "r16",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "8ls,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r10,r11,r13,r14,r15 -> 8lw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r10",
    "input 2": "r11",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r15",
    "input 6": "vps",
    "output": "8lw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r08,r12,r15 -> 8lx",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r08",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "8lx,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r07,r08,r09,r15 -> 8mx",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r07",
    "input 3": "r08",
    "input 4": "r09",
    "input 5": "r15",
    "input 6": "vps",
    "output": "8mx,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r08,r12,r15,r18 -> 8rx",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r08",
    "input 3": "r12",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "8rx,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r07,r10,r15,r17 -> 8s8",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "8s8,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r07,r08,r16,r18 -> 8sb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r07",
    "input 3": "r08",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "8sb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r08,r11,r13,r17 -> 8ss",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r08",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r17",
    "input 6": "vps",
    "output": "8ss,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r14,r15,r16,r18 -> 8sw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r14",
    "input 3": "r15",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "8sw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r10,r12,r13 -> 8ws",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r13",
    "input 6": "vps",
    "output": "8ws,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r06,r10,r11,r18 -> 92a",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r06",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r18",
    "input 6": "vps",
    "output": "92a,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r07,r12,r15,r18 -> 92h",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r07",
    "input 3": "r12",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "92h,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r06,r07,r17 -> 9ar",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r06",
    "input 4": "r07",
    "input 5": "r17",
    "input 6": "vps",
    "output": "9ar,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r06,r14,r16 -> 9ax",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r06",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9ax,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r08,r10,r14 -> 9b7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r08",
    "input 4": "r10",
    "input 5": "r14",
    "input 6": "vps",
    "output": "9b7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r05,r10,r12 -> 9b8",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r05",
    "input 4": "r10",
    "input 5": "r12",
    "input 6": "vps",
    "output": "9b8,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r09,r10,r11 -> 9b9",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r11",
    "input 6": "vps",
    "output": "9b9,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r05,r10,r17 -> 9ba",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r05",
    "input 4": "r10",
    "input 5": "r17",
    "input 6": "vps",
    "output": "9ba,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r06,r08,r10,r11 -> 9bk",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r06",
    "input 3": "r08",
    "input 4": "r10",
    "input 5": "r11",
    "input 6": "vps",
    "output": "9bk,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r09,r10,r18 -> 9bl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9bl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r12,r15,r16 -> 9br",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r12",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9br,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r06,r11,r14,r16 -> 9bs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r06",
    "input 3": "r11",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9bs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r11,r12,r14,r16 -> 9bt",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r11",
    "input 3": "r12",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9bt,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r06,r10,r15 -> 9bw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r06",
    "input 4": "r10",
    "input 5": "r15",
    "input 6": "vps",
    "output": "9bw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r10,r13,r14,r18 -> 9cl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r10",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9cl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r07,r09,r10,r18 -> 9cm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r07",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9cm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r06,r09,r11,r14 -> 9cr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r06",
    "input 3": "r09",
    "input 4": "r11",
    "input 5": "r14",
    "input 6": "vps",
    "output": "9cr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r10,r13,r15,r18 -> 9cs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r10",
    "input 3": "r13",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9cs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r12,r13,r15 -> 9dg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "9dg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r08,r09,r13,r17 -> 9di",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r13",
    "input 5": "r17",
    "input 6": "vps",
    "output": "9di,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r08,r14,r15,r17 -> 9fb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r08",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "9fb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r10,r15,r16,r17 -> 9fc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r10",
    "input 3": "r15",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "9fc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r09,r12,r16 -> 9fl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r09",
    "input 4": "r12",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9fl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r09,r10,r15 -> 9ga",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r15",
    "input 6": "vps",
    "output": "9ga,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r08,r09,r13,r16 -> 9gd",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9gd,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r03,r11,r16 -> 9gi",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r03",
    "input 4": "r11",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9gi,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r11,r13,r15,r18 -> 9gl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r11",
    "input 3": "r13",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9gl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r06,r12,r14 -> 9gm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r06",
    "input 4": "r12",
    "input 5": "r14",
    "input 6": "vps",
    "output": "9gm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r07,r09,r13,r18 -> 9gs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r07",
    "input 3": "r09",
    "input 4": "r13",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9gs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r07,r10,r12,r14 -> 9gw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r14",
    "input 6": "vps",
    "output": "9gw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r09,r11,r12,r13 -> 9h9",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r13",
    "input 6": "vps",
    "output": "9h9,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r08,r11,r12,r15 -> 9ha",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r08",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "9ha,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r06,r07,r13,r14 -> 9hw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r06",
    "input 3": "r07",
    "input 4": "r13",
    "input 5": "r14",
    "input 6": "vps",
    "output": "9hw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r12,r14,r16 -> 9ja",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r12",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9ja,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r10,r12,r17 -> 9kr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r17",
    "input 6": "vps",
    "output": "9kr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r12,r13,r16,r18 -> 9la",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r12",
    "input 3": "r13",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9la,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r07,r12,r13,r18 -> 9ls",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r07",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9ls,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r10,r12,r15,r16 -> 9lw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r10",
    "input 3": "r12",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9lw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r06,r08,r10,r12 -> 9m9",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r06",
    "input 3": "r08",
    "input 4": "r10",
    "input 5": "r12",
    "input 6": "vps",
    "output": "9m9,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r08,r12,r13 -> 9ma",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r08",
    "input 4": "r12",
    "input 5": "r13",
    "input 6": "vps",
    "output": "9ma,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r08,r11,r13,r16 -> 9mp",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r08",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9mp,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r10,r12,r13,r17 -> 9mt",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r10",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r17",
    "input 6": "vps",
    "output": "9mt,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r09,r13,r17,r18 -> 9p9",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r09",
    "input 3": "r13",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9p9,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r13,r14,r18 -> 9pa",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9pa,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r09,r12,r18 -> 9pi",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r09",
    "input 4": "r12",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9pi,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r14,r15,r16,r17,r18 -> 9qr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r14",
    "input 2": "r15",
    "input 3": "r16",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9qr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r10,r11,r14,r15 -> 9qs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r10",
    "input 3": "r11",
    "input 4": "r14",
    "input 5": "r15",
    "input 6": "vps",
    "output": "9qs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r06,r09,r13,r16 -> 9s8",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r06",
    "input 3": "r09",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9s8,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r03,r07,r18 -> 9s9",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r03",
    "input 4": "r07",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9s9,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r06,r07,r11,r12 -> 9sb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r06",
    "input 3": "r07",
    "input 4": "r11",
    "input 5": "r12",
    "input 6": "vps",
    "output": "9sb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r11,r12,r15,r16 -> 9sc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r11",
    "input 3": "r12",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9sc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r09,r10,r11,r13,r17 -> 9sm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r09",
    "input 2": "r10",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r17",
    "input 6": "vps",
    "output": "9sm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r10,r14,r17 -> 9sp",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r10",
    "input 4": "r14",
    "input 5": "r17",
    "input 6": "vps",
    "output": "9sp,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r09,r11,r12,r16 -> 9sr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9sr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r09,r13,r15,r18 -> 9ss",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r09",
    "input 3": "r13",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9ss,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r08,r14,r17 -> 9st",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r08",
    "input 4": "r14",
    "input 5": "r17",
    "input 6": "vps",
    "output": "9st,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r05,r12,r16,r17 -> 9ta",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r05",
    "input 3": "r12",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "9ta,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r08,r10,r16,r18 -> 9tk",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r08",
    "input 3": "r10",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9tk,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r06,r07,r10,r16 -> 9tr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r06",
    "input 3": "r07",
    "input 4": "r10",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9tr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r06,r08,r11,r13 -> 9ts",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r06",
    "input 3": "r08",
    "input 4": "r11",
    "input 5": "r13",
    "input 6": "vps",
    "output": "9ts,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r11,r12,r13,r16 -> 9vo",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r11",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9vo,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r07,r08,r11,r12 -> 9wa",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r07",
    "input 3": "r08",
    "input 4": "r11",
    "input 5": "r12",
    "input 6": "vps",
    "output": "9wa,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r10,r13,r17 -> 9wb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r17",
    "input 6": "vps",
    "output": "9wb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r09,r12,r16 -> 9wc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r09",
    "input 4": "r12",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9wc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r10,r12,r13,r17,r18 -> 9wd",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r10",
    "input 2": "r12",
    "input 3": "r13",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9wd,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r08,r15,r16 -> 9wh",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r08",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9wh,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r11,r12,r13,r18 -> 9wn",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r11",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r18",
    "input 6": "vps",
    "output": "9wn,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r08,r09,r10,r12 -> 9ws",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r12",
    "input 6": "vps",
    "output": "9ws,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r05,r08,r16 -> 9xf",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r05",
    "input 4": "r08",
    "input 5": "r16",
    "input 6": "vps",
    "output": "9xf,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r07,r09,r12,r13 -> 9yw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r07",
    "input 3": "r09",
    "input 4": "r12",
    "input 5": "r13",
    "input 6": "vps",
    "output": "9yw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r07,r15,r17 -> aar",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "aar,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r09,r10,r12,r18 -> am1",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r09",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r18",
    "input 6": "vps",
    "output": "am1,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r09,r12,r15,r16 -> am2",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r09",
    "input 3": "r12",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "am2,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r07,r09,r13 -> am3",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r07",
    "input 4": "r09",
    "input 5": "r13",
    "input 6": "vps",
    "output": "am3,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r09,r11,r12,r13 -> am4",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r13",
    "input 6": "vps",
    "output": "am4,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r09,r12,r13,r16 -> am5",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r09",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "am5,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r09,r10,r11,r17 -> am6",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r09",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r17",
    "input 6": "vps",
    "output": "am6,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r05,r08,r16,r17 -> am7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r05",
    "input 3": "r08",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "am7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r04,r14,r16 -> am8",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r04",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "am8,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r07,r15,r16,r17 -> am9",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r07",
    "input 3": "r15",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "am9,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r07,r13,r16,r18 -> ama",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r07",
    "input 3": "r13",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "ama,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r07,r10,r13 -> amb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r10",
    "input 5": "r13",
    "input 6": "vps",
    "output": "amb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r07,r10,r13,r17 -> amc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r17",
    "input 6": "vps",
    "output": "amc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r07,r11,r12,r15 -> amd",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r07",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "amd,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r07,r08,r18 -> ame",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r08",
    "input 5": "r18",
    "input 6": "vps",
    "output": "ame,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r08,r11,r16,r18 -> amf",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r08",
    "input 3": "r11",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "amf,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r04,r07,r11 -> amu",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r04",
    "input 4": "r07",
    "input 5": "r11",
    "input 6": "vps",
    "output": "amu,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r06,r07,r09 -> axe",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r06",
    "input 4": "r07",
    "input 5": "r09",
    "input 6": "vps",
    "output": "axe,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r14,r15,r16,r18 -> axf",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r14",
    "input 3": "r15",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "axf,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r08,r09,r11 -> ba1",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r08",
    "input 4": "r09",
    "input 5": "r11",
    "input 6": "vps",
    "output": "ba1,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r11,r12,r17 -> ba2",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r17",
    "input 6": "vps",
    "output": "ba2,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r06,r14,r15,r18 -> ba3",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r06",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "ba3,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r09,r11,r17 -> ba4",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r09",
    "input 4": "r11",
    "input 5": "r17",
    "input 6": "vps",
    "output": "ba4,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r11,r14,r15,r18 -> ba5",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r11",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "ba5,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r10,r12,r17 -> ba6",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r17",
    "input 6": "vps",
    "output": "ba6,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r05,r08,r17 -> ba7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r05",
    "input 4": "r08",
    "input 5": "r17",
    "input 6": "vps",
    "output": "ba7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r08,r09,r10,r15 -> ba8",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r15",
    "input 6": "vps",
    "output": "ba8,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r08,r09,r10 -> ba9",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r08",
    "input 4": "r09",
    "input 5": "r10",
    "input 6": "vps",
    "output": "ba9,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r10,r11,r13,r14 -> baa",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r10",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r14",
    "input 6": "vps",
    "output": "baa,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r12,r15,r18 -> bab",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r12",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "bab,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r07,r14,r18 -> bac",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r07",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "bac,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r06,r08,r09,r12 -> bad",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r06",
    "input 3": "r08",
    "input 4": "r09",
    "input 5": "r12",
    "input 6": "vps",
    "output": "bad,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r08,r12,r13,r16 -> bae",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r08",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "bae,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r11,r15,r17 -> baf",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r11",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "baf,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r06,r10,r15,r18 -> bal",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r06",
    "input 3": "r10",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "bal,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r11,r14,r15,r17 -> bar",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r11",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "bar,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r10,r13,r16 -> bax",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "bax,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r10,r15,r16,r17 -> bhm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r10",
    "input 3": "r15",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "bhm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r06,r09,r11,r17 -> bkf",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r06",
    "input 3": "r09",
    "input 4": "r11",
    "input 5": "r17",
    "input 6": "vps",
    "output": "bkf,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r08,r12,r13,r15 -> bld",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r08",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "bld,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r05,r15,r18 -> brn",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r05",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "brn,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r05,r12,r14 -> brs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r05",
    "input 4": "r12",
    "input 5": "r14",
    "input 6": "vps",
    "output": "brs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r06,r11,r14,r16 -> bsd",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r06",
    "input 3": "r11",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "bsd,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r06,r11,r12,r15 -> bsh",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r06",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "bsh,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r06,r08,r17 -> bst",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r06",
    "input 4": "r08",
    "input 5": "r17",
    "input 6": "vps",
    "output": "bst,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r12,r13,r15 -> bsw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "bsw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r07,r09,r11,r18 -> btl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r07",
    "input 3": "r09",
    "input 4": "r11",
    "input 5": "r18",
    "input 6": "vps",
    "output": "btl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r09,r14,r15,r17 -> btx",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r09",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "btx,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r06,r12,r14,r15 -> buc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r06",
    "input 3": "r12",
    "input 4": "r14",
    "input 5": "r15",
    "input 6": "vps",
    "output": "buc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r07,r11,r18 -> bwn",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r11",
    "input 5": "r18",
    "input 6": "vps",
    "output": "bwn,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r08,r14,r17 -> cap",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r08",
    "input 4": "r14",
    "input 5": "r17",
    "input 6": "vps",
    "output": "cap,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r11,r13,r15,r17 -> cbw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r11",
    "input 3": "r13",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "cbw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r06,r10,r12,r18 -> ces",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r06",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r18",
    "input 6": "vps",
    "output": "ces,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r11,r13,r14 -> chn",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r14",
    "input 6": "vps",
    "output": "chn,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r10,r13,r14 -> ci0",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r14",
    "input 6": "vps",
    "output": "ci0,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r11,r13,r14,r15 -> ci1",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r11",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r15",
    "input 6": "vps",
    "output": "ci1,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r05,r10,r16,r18 -> ci2",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r05",
    "input 3": "r10",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "ci2,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r13,r16,r17 -> ci3",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r13",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "ci3,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r07,r13,r18 -> clb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r07",
    "input 4": "r13",
    "input 5": "r18",
    "input 6": "vps",
    "output": "clb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r07,r12,r15 -> clm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r07",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "clm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r11,r12,r17 -> clw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r17",
    "input 6": "vps",
    "output": "clw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r08,r09,r14,r18 -> crn",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "crn,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r11,r13,r14,r16 -> crs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r11",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "crs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r10,r11,r18 -> dgr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r18",
    "input 6": "vps",
    "output": "dgr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r11,r17,r18 -> dir",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r11",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "dir,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r08,r09,r11,r18 -> dr1",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r11",
    "input 5": "r18",
    "input 6": "vps",
    "output": "dr1,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r09,r11,r13,r18 -> dr2",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r18",
    "input 6": "vps",
    "output": "dr2,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r06,r07,r08,r14 -> dr3",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r06",
    "input 3": "r07",
    "input 4": "r08",
    "input 5": "r14",
    "input 6": "vps",
    "output": "dr3,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r06,r12,r15,r18 -> dr4",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r06",
    "input 3": "r12",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "dr4,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r06,r08,r15 -> dr5",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r06",
    "input 4": "r08",
    "input 5": "r15",
    "input 6": "vps",
    "output": "dr5,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r09,r10,r14,r17 -> dr6",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r09",
    "input 3": "r10",
    "input 4": "r14",
    "input 5": "r17",
    "input 6": "vps",
    "output": "dr6,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r15,r16,r17,r18 -> dr7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r15",
    "input 3": "r16",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "dr7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r13,r15,r17 -> dr8",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r13",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "dr8,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r14,r17,r18 -> dr9",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r14",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "dr9,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r05,r06,r15 -> dra",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r05",
    "input 4": "r06",
    "input 5": "r15",
    "input 6": "vps",
    "output": "dra,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r09,r12,r13,r17 -> drb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r09",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r17",
    "input 6": "vps",
    "output": "drb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r07,r10,r14,r18 -> drc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "drc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r05,r12,r14,r17 -> drd",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r05",
    "input 3": "r12",
    "input 4": "r14",
    "input 5": "r17",
    "input 6": "vps",
    "output": "drd,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r05,r10,r12,r16 -> dre",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r05",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r16",
    "input 6": "vps",
    "output": "dre,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r07,r12,r13,r15 -> drf",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r07",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "drf,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r09,r10,r12,r13 -> fhl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r09",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r13",
    "input 6": "vps",
    "output": "fhl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r07,r09,r15,r17 -> fla",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r07",
    "input 3": "r09",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "fla,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r09,r11,r16,r17 -> flb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "flb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r05,r07,r12 -> flc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r05",
    "input 4": "r07",
    "input 5": "r12",
    "input 6": "vps",
    "output": "flc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r05,r07,r11 -> fld",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r05",
    "input 4": "r07",
    "input 5": "r11",
    "input 6": "vps",
    "output": "fld,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r10,r12,r18 -> ful",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r18",
    "input 6": "vps",
    "output": "ful,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r11,r14,r15,r16 -> gax",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r11",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "gax,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r07,r11,r14,r18 -> ghm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r07",
    "input 3": "r11",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "ghm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r11,r12,r16,r18 -> gis",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r11",
    "input 3": "r12",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "gis,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r10,r12,r13,r16 -> gix",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r10",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "gix,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r10,r11,r12,r15 -> glv",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r10",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "glv,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r09,r11,r17,r18 -> gma",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "gma,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r16,r17,r18 -> gsc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r16",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "gsc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r04,r05,r15 -> gsd",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r04",
    "input 4": "r05",
    "input 5": "r15",
    "input 6": "vps",
    "output": "gsd,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r09,r11,r13,r17 -> gst",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r17",
    "input 6": "vps",
    "output": "gst,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r06,r10,r17,r18 -> gth",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r06",
    "input 3": "r10",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "gth,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r09,r10,r16,r17 -> gts",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r09",
    "input 3": "r10",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "gts,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r09,r12,r13,r16,r17 -> gwn",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r09",
    "input 2": "r12",
    "input 3": "r13",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "gwn,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r07,r10,r14,r15 -> hal",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r14",
    "input 5": "r15",
    "input 6": "vps",
    "output": "hal,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r04,r08,r11 -> hax",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r04",
    "input 4": "r08",
    "input 5": "r11",
    "input 6": "vps",
    "output": "hax,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r10,r14,r17,r18 -> hbl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r10",
    "input 3": "r14",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "hbl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r07,r09,r10,r12 -> hbt",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r07",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r12",
    "input 6": "vps",
    "output": "hbt,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r12,r16,r18 -> hbw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r12",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "hbw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r05,r06,r12,r15 -> hgl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r05",
    "input 3": "r06",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "hgl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r07,r13,r17,r18 -> hla",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r07",
    "input 3": "r13",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "hla,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r10,r11,r13 -> hlm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r13",
    "input 6": "vps",
    "output": "hlm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r06,r09,r18 -> hxb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r06",
    "input 4": "r09",
    "input 5": "r18",
    "input 6": "vps",
    "output": "hxb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r13,r14,r15,r18 -> jav",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r13",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "jav,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r06,r14,r15,r16 -> kit",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r06",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "kit,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r09,r11,r17 -> kri",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r09",
    "input 4": "r11",
    "input 5": "r17",
    "input 6": "vps",
    "output": "kri,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r11,r12,r14,r18 -> ktr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r11",
    "input 3": "r12",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "ktr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r06,r07,r15,r16 -> lax",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r06",
    "input 3": "r07",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "lax,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r12,r16,r17,r18 -> lbb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r12",
    "input 3": "r16",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "lbb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r10,r11,r12 -> lbl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r12",
    "input 6": "vps",
    "output": "lbl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r05,r07,r12,r16 -> lbt",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r12",
    "input 5": "r16",
    "input 6": "vps",
    "output": "lbt,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r12,r13,r15 -> lbw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "lbw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r09,r11,r15,r17 -> lea",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "lea,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r06,r07,r10,r12 -> lgl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r06",
    "input 3": "r07",
    "input 4": "r10",
    "input 5": "r12",
    "input 6": "vps",
    "output": "lgl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r08,r14,r16,r17 -> lrg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r08",
    "input 3": "r14",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "lrg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r05,r12,r17,r18 -> lsd",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r05",
    "input 3": "r12",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "lsd,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r12,r14,r15,r17,r18 -> lst",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r12",
    "input 2": "r14",
    "input 3": "r15",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "lst,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r10,r13,r14,r18 -> ltp",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r10",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "ltp,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r06,r08,r12 -> lwb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r06",
    "input 4": "r08",
    "input 5": "r12",
    "input 6": "vps",
    "output": "lwb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r09,r10,r11,r18 -> lxb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r09",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r18",
    "input 6": "vps",
    "output": "lxb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r06,r08,r13 -> mac",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r06",
    "input 4": "r08",
    "input 5": "r13",
    "input 6": "vps",
    "output": "mac,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r07,r10,r13,r14 -> mau",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r14",
    "input 6": "vps",
    "output": "mau,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r06,r07,r08 -> mbl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r06",
    "input 4": "r07",
    "input 5": "r08",
    "input 6": "vps",
    "output": "mbl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r08,r10,r12,r16 -> mbt",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r08",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r16",
    "input 6": "vps",
    "output": "mbt,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r06,r08,r09,r14 -> mgl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r06",
    "input 3": "r08",
    "input 4": "r09",
    "input 5": "r14",
    "input 6": "vps",
    "output": "mgl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r07,r12,r17,r18 -> mpi",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r07",
    "input 3": "r12",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "mpi,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r05,r06,r12,r16 -> msk",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r05",
    "input 3": "r06",
    "input 4": "r12",
    "input 5": "r16",
    "input 6": "vps",
    "output": "msk,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r07,r09,r12,r13 -> mst",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r07",
    "input 3": "r09",
    "input 4": "r12",
    "input 5": "r13",
    "input 6": "vps",
    "output": "mst,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r08,r11,r13,r15 -> mxb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r08",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "mxb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r06,r08,r10,r15 -> ne1",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r06",
    "input 3": "r08",
    "input 4": "r10",
    "input 5": "r15",
    "input 6": "vps",
    "output": "ne1,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r08,r09,r14,r15 -> ne2",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r14",
    "input 5": "r15",
    "input 6": "vps",
    "output": "ne2,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r06,r07,r12,r14 -> ne3",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r06",
    "input 3": "r07",
    "input 4": "r12",
    "input 5": "r14",
    "input 6": "vps",
    "output": "ne3,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r06,r09,r12,r15 -> ne4",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r06",
    "input 3": "r09",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "ne4,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r05,r10,r18 -> ne5",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r05",
    "input 4": "r10",
    "input 5": "r18",
    "input 6": "vps",
    "output": "ne5,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r07,r10,r13,r16 -> ne6",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "ne6,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r11,r16,r18 -> ne7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r11",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "ne7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r08,r09,r13 -> ne8",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r08",
    "input 4": "r09",
    "input 5": "r13",
    "input 6": "vps",
    "output": "ne8,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r06,r08,r13,r14 -> ne9",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r06",
    "input 3": "r08",
    "input 4": "r13",
    "input 5": "r14",
    "input 6": "vps",
    "output": "ne9,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r09,r11,r12,r13 -> nea",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r13",
    "input 6": "vps",
    "output": "nea,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r07,r10,r13,r15 -> neb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "neb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r07,r14,r15,r16 -> nec",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r07",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "nec,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r08,r09,r12,r15 -> ned",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "ned,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r05,r08,r12,r13 -> nee",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r05",
    "input 3": "r08",
    "input 4": "r12",
    "input 5": "r13",
    "input 6": "vps",
    "output": "nee,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r03,r14,r16 -> nef",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r03",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "nef,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r10,r13,r16,r17 -> ob1",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r10",
    "input 3": "r13",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "ob1,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r11,r13,r16 -> ob2",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "ob2,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r09,r12,r15,r16 -> ob3",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r09",
    "input 3": "r12",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "ob3,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r08,r14,r16 -> ob4",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r08",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "ob4,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r08,r14,r15,r16 -> ob5",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r08",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "ob5,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r08,r11,r17 -> ob6",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r08",
    "input 4": "r11",
    "input 5": "r17",
    "input 6": "vps",
    "output": "ob6,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r10,r12,r16 -> ob7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r16",
    "input 6": "vps",
    "output": "ob7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r09,r13,r16,r17 -> ob8",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r09",
    "input 3": "r13",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "ob8,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r11,r12,r14,r16 -> ob9",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r11",
    "input 3": "r12",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "ob9,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r04,r06,r14 -> oba",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r04",
    "input 4": "r06",
    "input 5": "r14",
    "input 6": "vps",
    "output": "oba,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r10,r14,r15,r17 -> obb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r10",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "obb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r06,r08,r14 -> obc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r06",
    "input 4": "r08",
    "input 5": "r14",
    "input 6": "vps",
    "output": "obc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r05,r06,r11 -> obd",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r05",
    "input 4": "r06",
    "input 5": "r11",
    "input 6": "vps",
    "output": "obd,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r04,r11,r17 -> obe",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r04",
    "input 4": "r11",
    "input 5": "r17",
    "input 6": "vps",
    "output": "obe,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r11,r16,r17 -> obf",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r11",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "obf,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r08,r11,r12,r13 -> pa1",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r08",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r13",
    "input 6": "vps",
    "output": "pa1,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r13,r14,r15,r16 -> pa2",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r13",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "pa2,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r10,r12,r13,r15 -> pa3",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r10",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "pa3,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r10,r11,r12 -> pa4",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r12",
    "input 6": "vps",
    "output": "pa4,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r10,r14,r15 -> pa5",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r10",
    "input 4": "r14",
    "input 5": "r15",
    "input 6": "vps",
    "output": "pa5,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r08,r10,r13,r14 -> pa6",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r08",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r14",
    "input 6": "vps",
    "output": "pa6,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r05,r07,r10 -> pa7",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r05",
    "input 4": "r07",
    "input 5": "r10",
    "input 6": "vps",
    "output": "pa7,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r10,r11,r15,r16 -> pa8",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r10",
    "input 3": "r11",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "pa8,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r04,r08,r16 -> pa9",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r04",
    "input 4": "r08",
    "input 5": "r16",
    "input 6": "vps",
    "output": "pa9,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r08,r09,r17 -> paa",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r08",
    "input 4": "r09",
    "input 5": "r17",
    "input 6": "vps",
    "output": "paa,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r12,r14,r15,r17 -> pab",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r12",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "pab,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r09,r11,r13,r15 -> pac",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "pac,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r12,r14,r16 -> pad",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r12",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "pad,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r07,r11,r12 -> pae",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r07",
    "input 4": "r11",
    "input 5": "r12",
    "input 6": "vps",
    "output": "pae,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r06,r10,r17,r18 -> paf",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r06",
    "input 3": "r10",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "paf,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r11,r13,r17,r18 -> pax",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r11",
    "input 3": "r13",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "pax,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r09,r10,r12,r18 -> pik",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r09",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r18",
    "input 6": "vps",
    "output": "pik,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r09,r14,r17,r18 -> pil",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r09",
    "input 3": "r14",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "pil,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r07,r08,r11 -> plt",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r08",
    "input 5": "r11",
    "input 6": "vps",
    "output": "plt,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r15,r16,r17,r18 -> qui",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r15",
    "input 3": "r16",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "qui,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r06,r09,r12,r14 -> rin",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r06",
    "input 3": "r09",
    "input 4": "r12",
    "input 5": "r14",
    "input 6": "vps",
    "output": "rin,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r05,r06,r17,r18 -> rng",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r05",
    "input 3": "r06",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "rng,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r10,r13,r15,r16 -> rxb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r10",
    "input 3": "r13",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "rxb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r07,r09,r11 -> sbb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r07",
    "input 4": "r09",
    "input 5": "r11",
    "input 6": "vps",
    "output": "sbb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r05,r07,r15,r18 -> sbr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "sbr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r08,r10,r15,r17 -> sbw",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r08",
    "input 3": "r10",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "sbw,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r03,r06,r15 -> scl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r03",
    "input 4": "r06",
    "input 5": "r15",
    "input 6": "vps",
    "output": "scl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r13,r15,r17 -> scm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r13",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "scm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r10,r15,r18 -> scp",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r10",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "scp,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r10,r11,r14,r18 -> scy",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r10",
    "input 3": "r11",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "scy,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r05,r06,r12,r15 -> skp",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r05",
    "input 3": "r06",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "skp,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r04,r07,r13 -> skr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r04",
    "input 4": "r07",
    "input 5": "r13",
    "input 6": "vps",
    "output": "skr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r09,r11,r15,r16 -> sml",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "sml,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r10,r11,r13,r17 -> spc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r10",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r17",
    "input 6": "vps",
    "output": "spc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r07,r12,r15 -> spk",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r07",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "spk,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r08,r13,r14,r17 -> spl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r08",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r17",
    "input 6": "vps",
    "output": "spl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r09,r12,r15 -> spr",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r09",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "spr,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r05,r08,r10,r16 -> spt",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r05",
    "input 3": "r08",
    "input 4": "r10",
    "input 5": "r16",
    "input 6": "vps",
    "output": "spt,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r08,r10,r14,r17 -> ssd",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r08",
    "input 3": "r10",
    "input 4": "r14",
    "input 5": "r17",
    "input 6": "vps",
    "output": "ssd,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r08,r13,r18 -> ssp",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r08",
    "input 4": "r13",
    "input 5": "r18",
    "input 6": "vps",
    "output": "ssp,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r08,r12,r15 -> sst",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r08",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "sst,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r07,r09,r13,r18 -> stu",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r07",
    "input 3": "r09",
    "input 4": "r13",
    "input 5": "r18",
    "input 6": "vps",
    "output": "stu,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r06,r11,r12,r13 -> swb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r06",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r13",
    "input 6": "vps",
    "output": "swb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r08,r09,r14,r15 -> tax",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r14",
    "input 5": "r15",
    "input 6": "vps",
    "output": "tax,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r08,r10,r11 -> tbl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r08",
    "input 4": "r10",
    "input 5": "r11",
    "input 6": "vps",
    "output": "tbl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r08,r12,r16 -> tbt",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r08",
    "input 4": "r12",
    "input 5": "r16",
    "input 6": "vps",
    "output": "tbt,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r11,r13,r17 -> tgl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r17",
    "input 6": "vps",
    "output": "tgl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r06,r10,r12,r15 -> tkf",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r06",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "tkf,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r04,r07,r18 -> tow",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r04",
    "input 4": "r07",
    "input 5": "r18",
    "input 6": "vps",
    "output": "tow,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r07,r12,r13,r17 -> tri",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r07",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r17",
    "input 6": "vps",
    "output": "tri,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r07,r08,r09,r11 -> tsp",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r07",
    "input 3": "r08",
    "input 4": "r09",
    "input 5": "r11",
    "input 6": "vps",
    "output": "tsp,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r06,r10,r12,r14 -> uap",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r06",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r14",
    "input 6": "vps",
    "output": "uap,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r07,r10,r11,r12 -> uar",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r12",
    "input 6": "vps",
    "output": "uar,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r05,r06,r11,r13 -> ucl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r05",
    "input 3": "r06",
    "input 4": "r11",
    "input 5": "r13",
    "input 6": "vps",
    "output": "ucl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r11,r14,r16,r17 -> uea",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r11",
    "input 3": "r14",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "uea,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r06,r07,r16,r18 -> uh9",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r06",
    "input 3": "r07",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "uh9,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r06,r10,r13 -> uhb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r06",
    "input 4": "r10",
    "input 5": "r13",
    "input 6": "vps",
    "output": "uhb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r07,r17,r18 -> uhc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "uhc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r09,r15,r16,r17 -> uhg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r09",
    "input 3": "r15",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "uhg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r07,r08,r15,r16 -> uhl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r07",
    "input 3": "r08",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "uhl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r10,r12,r14,r16 -> uhm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r10",
    "input 3": "r12",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "uhm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r12,r14,r16,r18 -> uhn",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r12",
    "input 3": "r14",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "uhn,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r07,r13,r14,r18 -> uit",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r07",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "uit,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r10,r12,r17 -> ukp",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r17",
    "input 6": "vps",
    "output": "ukp,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r09,r14,r15 -> ula",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r09",
    "input 4": "r14",
    "input 5": "r15",
    "input 6": "vps",
    "output": "ula,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r09,r10,r18 -> ulb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r18",
    "input 6": "vps",
    "output": "ulb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r06,r10,r13,r16 -> ulc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r06",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "ulc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r06,r10,r13,r18 -> uld",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r06",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r18",
    "input 6": "vps",
    "output": "uld,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r06,r13,r14 -> ulg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r06",
    "input 4": "r13",
    "input 5": "r14",
    "input 6": "vps",
    "output": "ulg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r07,r14,r15,r17 -> ulm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r07",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "ulm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r05,r12,r13,r14 -> ult",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r05",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r14",
    "input 6": "vps",
    "output": "ult,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r08,r14,r15,r18 -> umb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r08",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "umb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r09,r11,r16,r17 -> umc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "umc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r06,r14,r15 -> umg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r06",
    "input 4": "r14",
    "input 5": "r15",
    "input 6": "vps",
    "output": "umg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r10,r11,r16 -> uml",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r16",
    "input 6": "vps",
    "output": "uml,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r09,r10,r11,r13 -> ung",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r09",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r13",
    "input 6": "vps",
    "output": "ung,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r05,r10,r15,r18 -> uow",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r05",
    "input 3": "r10",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "uow,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r08,r09,r12,r14 -> upk",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r12",
    "input 5": "r14",
    "input 6": "vps",
    "output": "upk,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r05,r09,r13 -> upl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r05",
    "input 4": "r09",
    "input 5": "r13",
    "input 6": "vps",
    "output": "upl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r07,r10,r13 -> urg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r07",
    "input 4": "r10",
    "input 5": "r13",
    "input 6": "vps",
    "output": "urg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r06,r15,r18 -> urn",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r06",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "urn,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r06,r08,r09,r15 -> urs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r06",
    "input 3": "r08",
    "input 4": "r09",
    "input 5": "r15",
    "input 6": "vps",
    "output": "urs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r07,r08,r15 -> ush",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r07",
    "input 4": "r08",
    "input 5": "r15",
    "input 6": "vps",
    "output": "ush,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r11,r12,r15 -> usk",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "usk,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r10,r13,r15 -> utb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r10",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "utb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r07,r15,r16,r18 -> utc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r07",
    "input 3": "r15",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "utc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r10,r11,r13,r16 -> utg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r10",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "utg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r05,r09,r17 -> uth",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r05",
    "input 4": "r09",
    "input 5": "r17",
    "input 6": "vps",
    "output": "uth,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r04,r07,r16 -> utp",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r04",
    "input 4": "r07",
    "input 5": "r16",
    "input 6": "vps",
    "output": "utp,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r06,r09,r10,r17 -> uts",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r06",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r17",
    "input 6": "vps",
    "output": "uts,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r07,r08,r13,r14 -> utu",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r07",
    "input 3": "r08",
    "input 4": "r13",
    "input 5": "r14",
    "input 6": "vps",
    "output": "utu,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r09,r13,r18 -> uuc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r09",
    "input 4": "r13",
    "input 5": "r18",
    "input 6": "vps",
    "output": "uuc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r06,r10,r11,r13 -> uui",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r06",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r13",
    "input 6": "vps",
    "output": "uui,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r06,r09,r10,r15 -> uul",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r06",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r15",
    "input 6": "vps",
    "output": "uul,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r10,r12,r15,r16 -> uvb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r10",
    "input 3": "r12",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "uvb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r10,r11,r18 -> uvc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r18",
    "input 6": "vps",
    "output": "uvc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r02,r06,r14,r17 -> uvg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r02",
    "input 3": "r06",
    "input 4": "r14",
    "input 5": "r17",
    "input 6": "vps",
    "output": "uvg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r09,r12,r13,r15 -> vbl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r09",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "vbl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r05,r12,r13,r18 -> vbt",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r05",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r18",
    "input 6": "vps",
    "output": "vbt,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r10,r11,r15 -> vgl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r15",
    "input 6": "vps",
    "output": "vgl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r14,r15,r18 -> vou",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "vou,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r05,r07,r18 -> wa6",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r05",
    "input 4": "r07",
    "input 5": "r18",
    "input 6": "vps",
    "output": "wa6,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r11,r15,r17 -> wac",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r11",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "wac,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}

if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r07,r09,r10,r14 -> wad",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r07",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r14",
    "input 6": "vps",
    "output": "wad,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}



if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r08,r16,r18 -> wae",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r08",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "wae,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r13,r15,r16 -> waf",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r13",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "waf,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r09,r10,r12,r14 -> wax",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r09",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r14",
    "input 6": "vps",
    "output": "wax,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r10,r14,r15,r16 -> whm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r10",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "whm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r05,r06,r10,r18 -> wnd",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r05",
    "input 3": "r06",
    "input 4": "r10",
    "input 5": "r18",
    "input 6": "vps",
    "output": "wnd,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r08,r09,r12 -> wrb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r08",
    "input 4": "r09",
    "input 5": "r12",
    "input 6": "vps",
    "output": "wrb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r07,r16,r17,r18 -> wsc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r07",
    "input 3": "r16",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "wsc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r08,r11,r12,r13 -> wsd",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r08",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r13",
    "input 6": "vps",
    "output": "wsd,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r09,r11,r13,r16 -> wsp",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "wsp,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r09,r14,r18 -> wst",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r09",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "wst,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r07,r12,r16,r18 -> xap",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r07",
    "input 3": "r12",
    "input 4": "r16",
    "input 5": "r18",
    "input 6": "vps",
    "output": "xap,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r09,r15,r17,r18 -> xar",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r09",
    "input 3": "r15",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "xar,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r07,r08,r10,r18 -> xcl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r07",
    "input 3": "r08",
    "input 4": "r10",
    "input 5": "r18",
    "input 6": "vps",
    "output": "xcl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r08,r14,r16,r17 -> xea",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r08",
    "input 3": "r14",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "xea,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r08,r09,r15,r17 -> xh9",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r08",
    "input 3": "r09",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "xh9,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r12,r13,r17 -> xhb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r17",
    "input 6": "vps",
    "output": "xhb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r08,r09,r13 -> xhg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r08",
    "input 4": "r09",
    "input 5": "r13",
    "input 6": "vps",
    "output": "xhg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r09,r16,r17 -> xhl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r09",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "xhl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r08,r13,r15 -> xhm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r08",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "xhm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r07,r10,r12,r17 -> xhn",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r07",
    "input 3": "r10",
    "input 4": "r12",
    "input 5": "r17",
    "input 6": "vps",
    "output": "xhn,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r04,r08,r09,r16 -> xit",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r04",
    "input 3": "r08",
    "input 4": "r09",
    "input 5": "r16",
    "input 6": "vps",
    "output": "xit,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r07,r09,r11,r17 -> xkp",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r07",
    "input 3": "r09",
    "input 4": "r11",
    "input 5": "r17",
    "input 6": "vps",
    "output": "xkp,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r07,r09,r13,r15 -> xla",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r07",
    "input 3": "r09",
    "input 4": "r13",
    "input 5": "r15",
    "input 6": "vps",
    "output": "xla,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r04,r06,r09,r15 -> xlb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r04",
    "input 3": "r06",
    "input 4": "r09",
    "input 5": "r15",
    "input 6": "vps",
    "output": "xlb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r06,r07,r14,r16 -> xld",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r06",
    "input 3": "r07",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "xld,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r06,r09,r11,r16 -> xlg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r06",
    "input 3": "r09",
    "input 4": "r11",
    "input 5": "r16",
    "input 6": "vps",
    "output": "xlg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r08,r09,r11,r12,r16 -> xlm",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r08",
    "input 2": "r09",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r16",
    "input 6": "vps",
    "output": "xlm,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r09,r14,r18 -> xlt",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r09",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "xlt,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r06,r12,r13,r16 -> xmb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r06",
    "input 3": "r12",
    "input 4": "r13",
    "input 5": "r16",
    "input 6": "vps",
    "output": "xmb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r06,r11,r12,r15 -> xmg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r06",
    "input 3": "r11",
    "input 4": "r12",
    "input 5": "r15",
    "input 6": "vps",
    "output": "xmg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r08,r11,r15,r17 -> xml",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r08",
    "input 3": "r11",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "xml,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r09,r13,r14,r16,r17 -> xng",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r09",
    "input 2": "r13",
    "input 3": "r14",
    "input 4": "r16",
    "input 5": "r17",
    "input 6": "vps",
    "output": "xng,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r09,r10,r15,r17 -> xow",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r09",
    "input 3": "r10",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "xow,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r08,r13,r14,r18 -> xpk",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r08",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r18",
    "input 6": "vps",
    "output": "xpk,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r05,r10,r15,r16 -> xpl",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r05",
    "input 3": "r10",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "xpl,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r05,r08,r17 -> xrg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r05",
    "input 4": "r08",
    "input 5": "r17",
    "input 6": "vps",
    "output": "xrg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r10,r11,r18 -> xrn",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r18",
    "input 6": "vps",
    "output": "xrn,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r09,r10,r12 -> xrs",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r09",
    "input 4": "r10",
    "input 5": "r12",
    "input 6": "vps",
    "output": "xrs,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r08,r10,r11,r17 -> xsh",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r08",
    "input 3": "r10",
    "input 4": "r11",
    "input 5": "r17",
    "input 6": "vps",
    "output": "xsh,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r05,r07,r17,r18 -> xsk",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r05",
    "input 3": "r07",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "xsk,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r08,r11,r12 -> xtb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r08",
    "input 4": "r11",
    "input 5": "r12",
    "input 6": "vps",
    "output": "xtb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r05,r08,r13,r14,r16 -> xtg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r05",
    "input 2": "r08",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r16",
    "input 6": "vps",
    "output": "xtg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r07,r14,r15,r16 -> xth",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r07",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r16",
    "input 6": "vps",
    "output": "xth,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r05,r09,r18 -> xtp",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r05",
    "input 4": "r09",
    "input 5": "r18",
    "input 6": "vps",
    "output": "xtp,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r04,r10,r11,r14,r17 -> xts",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r04",
    "input 2": "r10",
    "input 3": "r11",
    "input 4": "r14",
    "input 5": "r17",
    "input 6": "vps",
    "output": "xts,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r06,r08,r12,r18 -> xtu",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r06",
    "input 3": "r08",
    "input 4": "r12",
    "input 5": "r18",
    "input 6": "vps",
    "output": "xtu,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r05,r07,r08 -> xuc",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r05",
    "input 4": "r07",
    "input 5": "r08",
    "input 6": "vps",
    "output": "xuc,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r03,r05,r13,r14,r17 -> xui",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r03",
    "input 2": "r05",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r17",
    "input 6": "vps",
    "output": "xui,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r06,r12,r13,r14,r15 -> xul",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r06",
    "input 2": "r12",
    "input 3": "r13",
    "input 4": "r14",
    "input 5": "r15",
    "input 6": "vps",
    "output": "xul,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r06,r09,r15 -> xvb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r06",
    "input 4": "r09",
    "input 5": "r15",
    "input 6": "vps",
    "output": "xvb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r07,r11,r14,r17,r18 -> xvg",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r07",
    "input 2": "r11",
    "input 3": "r14",
    "input 4": "r17",
    "input 5": "r18",
    "input 6": "vps",
    "output": "xvg,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r03,r05,r10,r14 -> ywn",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r03",
    "input 3": "r05",
    "input 4": "r10",
    "input 5": "r14",
    "input 6": "vps",
    "output": "ywn,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r04,r05,r06,r08 -> zhb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r04",
    "input 3": "r05",
    "input 4": "r06",
    "input 5": "r08",
    "input 6": "vps",
    "output": "zhb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r03,r04,r07,r15 -> zlb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r03",
    "input 3": "r04",
    "input 4": "r07",
    "input 5": "r15",
    "input 6": "vps",
    "output": "zlb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r05,r09,r15,r17 -> zmb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r05",
    "input 3": "r09",
    "input 4": "r15",
    "input 5": "r17",
    "input 6": "vps",
    "output": "zmb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r01,r06,r07,r08,r15 -> ztb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r01",
    "input 2": "r06",
    "input 3": "r07",
    "input 4": "r08",
    "input 5": "r15",
    "input 6": "vps",
    "output": "ztb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.rawMarket) {
cubemain.rows.push({
    description:
      "r02,r07,r14,r15,r18 -> zvb",
    enabled: 1,
    version: 100,
    numinputs: 6,
    "input 1": "r02",
    "input 2": "r07",
    "input 3": "r14",
    "input 4": "r15",
    "input 5": "r18",
    "input 6": "vps",
    "output": "zvb,nor,eth,sock=1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}



    D2RMM.writeTsv(cubemainFilename, cubemain);
