var info  = { header: 2048, item: 740 };
var items = {};
var bin   = [];

var types = 
{
    '03': 'weapons',
    '04': 'subweapons',
    '05': 'helmets',
    '06': 'armors',
    '07': 'trinkets',
};

var attrs =
{
    'id':         { offs:  2,  size: 2,  debug: true,  },
    'type':       { offs: 31,  size: 1,  debug: true,  },
    'type_a?':    { offs: 20,  size: 4,  debug: true,  },
    'type_b?':    { offs: 24,  size: 4,  debug: true,  },
    'equip_by':   { offs: 16,  size: 4,  debug: true,  },
    'icon':       { offs: 32,  size: 32, debug: true,  },
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
    'price':      { offs: 8,   size: 4,  debug: true,  },
    'empty?':     { offs: 12,  size: 4,  debug: true,  },
    'synth_l_1':  { offs: 482, size: 2,  debug: false,  },
    'synth_p_1':  { offs: 484, size: 4,  debug: false,  },
    'synth_t_1':  { offs: 542, size: 2,  debug: false,  },
    'synth_l_2':  { offs: 546, size: 2,  debug: false,  },
    'synth_p_2':  { offs: 548, size: 4,  debug: false,  },
    'synth_t_2':  { offs: 606, size: 2,  debug: false,  },
    'synth_i1_1': { offs: 492, size: 4,  debug: false,  },
    'synth_c1_1': { offs: 496, size: 4,  debug: false,  },
    'synth_i1_2': { offs: 556, size: 4,  debug: false,  },
    'synth_c1_2': { offs: 560, size: 4,  debug: false,  },
};

for (let j = 1; j <= 2; j++)
{
    for (let i = 2; i <= 5; i++)
    {
        attrs['synth_i' + i + '_' + j] = 
        {
            offs:  attrs['synth_c' + (i - 1) + '_' + j].offs + attrs['synth_c1_' + j].size,
            size:  attrs['synth_i1_' + j].size,
            debug: attrs['synth_i1_' + j].debug,
        };
        
        
        attrs['synth_c' + i + '_' + j] =
        {
            offs:  attrs['synth_i' + i + '_' + j].offs + attrs['synth_i1_' + j].size,
            size:  attrs['synth_c1_' + j].size,
            debug: attrs['synth_c1_' + j].debug,
        };
    }
}

function handleFileSelect(evt)
{
    var reader = new FileReader();
    var file   = evt.target.files[0];
    
    if (file.name != 'item.svo')
    {
        alert('Wrong file. Must be item.svo');
        
        ui.init();
        
        return;
    }
    
    reader.onload = function()
    {
        processBinary(reader.result);
        
        ui.loaded();
    };
    
    ui.loading();
    
    reader.readAsArrayBuffer(file);
}

function processBinary(result)
{
    bin   = new Uint8Array(result);
    items = { total: 0 };
    
    for (let i in types)
    {
        if (!types.hasOwnProperty(i))
        continue;
        
        items[types[i]] = 0;
    }
    
    items.list = [];
    
    while(processItem(items.total))
    items.total++;
}

function processItem(index)
{
    var offset = info.header + (index * info.item);
    var id     = getAttr('id', offset).d;
    var type   = types[getAttr('type', offset).h];
    
    if (items.total && !id)
    return false;

    if (typeof type == 'undefined')
    return true;
    
    items.list.push({ });
    
    for (let a in attrs)
    {
        if (!attrs.hasOwnProperty(a))
        continue;
        
        items.list[items.list.length - 1][a]       = getAttr(a, offset);
        items.list[items.list.length - 1]['index'] = items.total;
    }
    
    items[type]++;
    
    return true;
}

function getAttr(a, offset)
{
    var ret = '';
    
    for (let i = 0; i < attrs[a].size; i++)
    ret += toHex(bin[offset + attrs[a].offs + i], 2);
        
    if (a == 'icon')
    return { h: hex2ascii(ret), d: ''};
        
    return { h: ret, d: toInt(ret) };
}

function setAttrs(key, data)
{
    var index  = items.list[key].index;
    var offset = info.header + (index * info.item);
    
    for (let a in data)
    {
        if (!data.hasOwnProperty(a) || !attrs[a])
        continue;
        
        if (data[a] < 0)
        {
            if (attrs[a].size == 4)
            data[a] = new Uint32Array([data[a]])[0];
            
            else if (attrs[a].size == 2)
            data[a] = new Uint16Array([data[a]])[0];
        }
        
        let v = toHex(data[a], attrs[a].size * 2);
        
        for (let i = 0; i < attrs[a].size; i++)
        bin[offset + attrs[a].offs + i] = parseInt(v.substr(i * 2, 2), 16);
        
        items.list[key][a] = getAttr(a, offset);
    }
}

function toHex(val, length)
{
    var pad = '';
    
    for (let i = 0; i < length; i++)
    pad += '0';
    
    return (pad + Number(val).toString(16)).slice(-length);
}

function toInt(hex)
{
    var val = parseInt(hex, 16);
    
    if (hex.length == 8)
    val = new Int32Array([val])[0];
    
    else if (hex.length == 4)
    val = new Int16Array([val])[0];
    
    return val;
}

function hex2ascii(str1)
{
    var hex  = str1.toString();
    var str = '';

    for (var n = 0; n < hex.length; n += 2)
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));

    return str;
}
