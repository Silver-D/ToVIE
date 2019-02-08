var map = {};

map.info  = { header: 2048, item: 740, synth_ing: 5 };

map.types = 
{
    '03': 'weapons',
    '04': 'subweapons',
    '05': 'helmets',
    '06': 'armors',
    '07': 'trinkets',
};

map.attrs =
{
    'id':         { offs:  2,  size: 2,  debug: true,  },
    'type':       { offs: 31,  size: 1,  debug: true,  },
    'sometype?':  { offs: 20,  size: 4,  debug: true,  },
    'subtype':    { offs: 24,  size: 4,  debug: true,  },
    'equip_by':   { offs: 16,  size: 4,  debug: true,  },
    'icon':       { offs: 32,  size: 32, debug: false, },
	'model':	  { offs: 700, size: 4,  debug: false, },
    'patk':       { offs: 76,  size: 4,  debug: false, },
    'matk':       { offs: 80,  size: 4,  debug: false, },
    'pdef':       { offs: 84,  size: 4,  debug: false, },
    'mdef':       { offs: 88,  size: 4,  debug: false, },
    'agl2?':      { offs: 92,  size: 4,  debug: true,  },
    'agl':        { offs: 100, size: 4,  debug: false, },
    'elef':       { offs: 112, size: 4,  debug: false, },
    'elei':       { offs: 116, size: 4,  debug: false, },
    'elew':       { offs: 120, size: 4,  debug: false, },
    'elee':       { offs: 124, size: 4,  debug: false, },
    'elel':       { offs: 128, size: 4,  debug: false, },
    'eled':       { offs: 132, size: 4,  debug: false, },
    'skill1':     { offs: 136, size: 4,  debug: false, },
    'skill1_r':   { offs: 140, size: 4,  debug: false, },
    'skill2':     { offs: 144, size: 4,  debug: false, },
    'skill2_r':   { offs: 148, size: 4,  debug: false, },
    'skill3':     { offs: 152, size: 4,  debug: false, },
    'skill3_r':   { offs: 156, size: 4,  debug: false, },
    'price':      { offs: 8,   size: 4,  debug: false, },
    'synth_l_1':  { offs: 482, size: 2,  debug: false, },
    'synth_p_1':  { offs: 484, size: 4,  debug: false, },
    'synth_t_1':  { offs: 542, size: 2,  debug: true,  },
    'synth_l_2':  { offs: 546, size: 2,  debug: false, },
    'synth_p_2':  { offs: 548, size: 4,  debug: false, },
    'synth_t_2':  { offs: 606, size: 2,  debug: true,  },
    'synth_i1_1': { offs: 492, size: 4,  debug: false, },
    'synth_c1_1': { offs: 496, size: 4,  debug: false, },
    'synth_i1_2': { offs: 556, size: 4,  debug: false, },
    'synth_c1_2': { offs: 560, size: 4,  debug: false, },
	'synth_show': { offs: 675, size: 1,  debug: false, },
};

for (let j = 1; j <= 2; j++)
{
    for (let i = 2; i <= map.info.synth_ing; i++)
    {
       map. attrs['synth_i' + i + '_' + j] = 
        {
            offs:  map.attrs['synth_c' + (i - 1) + '_' + j].offs + map.attrs['synth_c1_' + j].size,
            size:  map.attrs['synth_i1_' + j].size,
            debug: map.attrs['synth_i1_' + j].debug,
        };
        
        
        map.attrs['synth_c' + i + '_' + j] =
        {
            offs:  map.attrs['synth_i' + i + '_' + j].offs + map.attrs['synth_i1_' + j].size,
            size:  map.attrs['synth_c1_' + j].size,
            debug: map.attrs['synth_c1_' + j].debug,
        };
    }
}

map.irrelevant = 
{
    'seq_ind1': { offs: 4,   size: 4, },
    'seq_ind2': { offs: 68,  size: 4, },
    'seq_ind3': { offs: 172, size: 4, },
	
	'seq_ind4': { offs: 704, size: 4, },
    
    'static1':  { offs: 64,  size: 4 }, // 0023
    'static2':  { offs: 72,  size: 4 }, // 0001
    'static3':  { offs: 72,  size: 4 }, // 0001
    'static4':  { offs: 712, size: 4 }, // 0001
    'static5':  { offs: 716, size: 4 }, // 0001
    'static6':  { offs: 720, size: 4 }, // 0002
    'static7':  { offs: 724, size: 4 }, // 0003
    'static8':  { offs: 728, size: 4 }, // 0004
    'static9':  { offs: 732, size: 4 }, // 0005
    'static10': { offs: 736, size: 4 }, // 0006
};

map.empty = [12, 96, 108, 160, 164, 168, 188, 192, 196, 200, 204, 208, 212, 216, 220, 224, 228, 232, 236, 252, 256, 260, 264, 268, 272, 276, 280, 284, 288, 292, 296, 300, 308, 312, 316, 320, 324, 328, 332, 336, 340, 344, 348, 352, 356, 360, 364, 372, 376, 380, 384, 388, 392, 396, 400, 404, 408, 412, 416, 420, 424, 428, 444, 448, 452, 456, 460, 464, 468, 472, 476, 488, 532, 536, 552, 596, 600, 608, 612, 616, 620, 624, 628, 632, 636, 640, 644, 648, 652, 656, 660, 664, 668, 708];

map.empty.forEach((o, k) =>
{
    map.irrelevant['empty' + (k + 1)] = { offs: o, size: 4 };
});

map.mapped   = { offs: [], attrs: Object.assign({}, map.attrs, map.irrelevant) };
map.unmapped = { };

for (let a in map.mapped.attrs)
{
    let size = map.mapped.attrs[a].size;
    let offs = map.mapped.attrs[a].offs;
    
    if (size < 4)
    {
        offs -= (4 - size);
        size = 4;
    }
    
    for (let i = 0; i < size; i += 4)
    map.mapped.offs.push(offs + i);
}

for (let i = 0; i < map.info.item; i+= 4)
{
    if (map.mapped.offs.indexOf(i) == -1)
    map.unmapped[i] = { offs: i, size: 4 };
}

delete map.mapped;
delete map.empty;
