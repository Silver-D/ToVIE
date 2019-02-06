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
    'id':       { offs:  2,  size: 2,  debug: false, },
    'type':     { offs: 31,  size: 1,  debug: true,  },
    'type_a?':  { offs: 20,  size: 4,  debug: true,  },
	'type_b?':  { offs: 24,  size: 4,  debug: true,  },
    'equip_by': { offs: 16,  size: 4,  debug: true,  },
    'icon':     { offs: 32,  size: 32, debug: true,  },
    'patk':     { offs: 76,  size: 4,  debug: false, },
    'matk':     { offs: 80,  size: 4,  debug: false, },
    'pdef':     { offs: 84,  size: 4,  debug: false, },
    'mdef':     { offs: 88,  size: 4,  debug: false, },
	'agl2?':    { offs: 92,  size: 4,  debug: true,  },
	'agl':      { offs: 100, size: 4,  debug: false, },
    'elef':     { offs: 112, size: 4,  debug: false, },
	'elei':		{ offs: 116, size: 4,  debug: false, },
	'elew':		{ offs: 120, size: 4,  debug: false, },
	'elee':		{ offs: 124, size: 4,  debug: false, },
	'elel':		{ offs: 128, size: 4,  debug: false, },
	'eled':		{ offs: 132, size: 4,  debug: false, },
	'skill1':	{ offs: 136, size: 4,  debug: false, },
	'skill1_r':	{ offs: 140, size: 4,  debug: false, },
	'skill2':	{ offs: 144, size: 4,  debug: false, },
	'skill2_r':	{ offs: 148, size: 4,  debug: false, },
	'skill3':	{ offs: 152, size: 4,  debug: false, },
	'skill3_r':	{ offs: 156, size: 4,  debug: false, },
	'price':	{ offs: 8,   size: 4,  debug: true,  },
	'empty?':	{ offs: 12,  size: 4,  debug: true,  },
};

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

function processItem(item)
{
    item = info.header + (item * info.item);
    
    var id    = getAttr('id', item).d;
    var type  = getAttr('type', item).h;
    var cat   = types[type];
    
    if (items.total && !id)
    return false;

    if (typeof cat == 'undefined')
    return true;
    
    items.list.push({ });
    
    for (let i in attrs)
    {
        if (!attrs.hasOwnProperty(i))
        continue;
        
        items.list[items.list.length - 1][i]       = getAttr(i, item);
        items.list[items.list.length - 1]['index'] = items.total;
    }
    
    items[cat]++;
    
    return true;
}

function getAttr(a, item)
{
    var ret = '';
    
    for (let i = 0; i < attrs[a].size; i++)
        ret += toHex(bin[item + attrs[a].offs + i], 2);
        
    if (a == 'icon')
    return { h: hex2ascii(ret), d: ''};
        
    return { h: ret, d: toInt(ret) };
}

function setAttrs(item, key, data)
{
    item = info.header + (item * info.item);
    
    for (let i in data)
    {
        if (!data.hasOwnProperty(i) || !attrs[i])
        continue;
		
		if (data[i] < 0)
		{
			if (attrs[i].size == 4)
			data[i] = new Uint32Array([data[i]])[0];
			
			if (attrs[i].size == 2)
			data[i] = new Uint16Array([data[i]])[0];
		}
        
        let v = toHex(data[i], attrs[i].size * 2);
        
        for (let j = 0; j < attrs[i].size; j++)
        bin[item + attrs[i].offs + j] = parseInt(v.substr(j * 2, 2), 16);
        
        items.list[key][i] = getAttr(i, item);
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
	
	if (hex.length == 4)
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
