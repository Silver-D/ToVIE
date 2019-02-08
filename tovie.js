var bin   = [];
var items = {};

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
    
    for (let i in map.types)
    {
        if (!map.types.hasOwnProperty(i))
        continue;
        
        items[map.types[i]] = 0;
    }
    
    items.list = [];
    
    while(processItem(items.total))
    items.total++;
}

function processItem(index)
{
    var offset = map.info.header + (index * map.info.item);
    var id     = getAttr('id', offset).d;
    var type   = map.types[getAttr('type', offset).h];
    
    if (items.total && !id)
    return false;

    if (typeof type == 'undefined')
    return true;
    
    items.list.push({ });
    
    let i = items.list.length - 1;
    
    for (let a in map.attrs)
    {
        if (!map.attrs.hasOwnProperty(a))
        continue;
        
        items.list[i][a]       = getAttr(a, offset);
        items.list[i]['index'] = items.total;
    }
    
    items.list[i].unmapped = {};
    
    for (let a in map.unmapped)
    {
        if (!map.unmapped.hasOwnProperty(a))
        continue;
        
        items.list[i].unmapped[a] = getData(offset, map.unmapped[a].offs, map.unmapped[a].size, a);
    }
    
    items[type]++;
    
    return true;
}

function getAttr(a, offset)
{
    return getData(offset, map.attrs[a].offs, map.attrs[a].size, a)
}

function getData(e_offset, a_offset, a_size, a_name)
{
    var ret = '';
    
    for (let i = 0; i < a_size; i++)
    ret += toHex(bin[e_offset + a_offset + i], 2);
        
    if (a_name == 'icon')
    return { h: hex2ascii(ret), d: ''};
        
    return { h: ret, d: toInt(ret) };
}

function setAttrs(key, data)
{
    var index  = items.list[key].index;
    var offset = map.info.header + (index * map.info.item);
    
    for (let a in data)
    {
        if (!data.hasOwnProperty(a) || !map.attrs[a])
        continue;
        
        if (data[a] < 0)
        {
            if (map.attrs[a].size == 4)
            data[a] = new Uint32Array([data[a]])[0];
            
            else if (map.attrs[a].size == 2)
            data[a] = new Uint16Array([data[a]])[0];
        }
        
        let v = toHex(data[a], map.attrs[a].size * 2);
        
        for (let i = 0; i < map.attrs[a].size; i++)
        bin[offset + map.attrs[a].offs + i] = parseInt(v.substr(i * 2, 2), 16);
        
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
