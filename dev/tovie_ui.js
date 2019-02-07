var $  = function(id) { return document.getElementById(id) };
var $$ = function(q) { return document.querySelectorAll(q) };

if (!FileReader || !Uint8Array)
document.write("<span style='font-weight:bold'>Browser not supported.</span>");

else
$('file').addEventListener('change', handleFileSelect, false);

var ui = 
{
    init: function()
    {
        $('file').value      = '';
        $('file').disabled   = false;
        $('s_cat').innerHTML = '';
        
        $('search').style.display    = 'none';
        $('results').style.display   = 'none';
        $('item_info').style.display = 'none';
        $('download').style.display  = 'none';
        
        if ($('skill1').options.length > 1)
		return;

        var synth = $('synth_').cloneNode(true);

        $('synth_block_2').appendChild(synth);
    
        for (let i = 1; i <= 2; i++)
        {
            let els = $('synth_block_' + i).getElementsByClassName('synth');
        
            for (let j = 0; j < els.length; j++)
            {
                let e = els[j];
            
                e.setAttribute('id', e.getAttribute('id') + i)
            }
            
            $('synth_num_' + i).innerHTML = i;
        }
		
		for (s in db.skills)
		{
			if (!db.skills.hasOwnProperty(s))
			continue;
			
			for (let i = 1; i <= 3; i++)
			{
				let o = document.createElement("OPTION");
				
				o.text  = db.skills[s];
				o.value = parseInt(s, 16);
					
				$('skill' + i).options.add(o);
				$('skill' + i + '_r').value = 100;
			}
		}
    },
    
    loading: function()
    {
        this.init();
        
        $('file').disabled = true;
    },
    
    loaded: function()
    {
        $('file').value    = '';
        $('file').disabled = false;
        
        $('search').style.display = 'block';
        
        $('w_cnt').innerHTML = items.weapons;
        $('s_cnt').innerHTML = items.subweapons;
        $('h_cnt').innerHTML = items.helmets;
        $('a_cnt').innerHTML = items.armors;
        $('t_cnt').innerHTML = items.trinkets;
        
        for (let i in types)
        {
            if (!types.hasOwnProperty(i))
            continue;
            
            let o = document.createElement("OPTION");
            
            o.text  = types[i];
            o.value = i;
            
            $('s_cat').options.add(o);
        }
    },
    
    searchTitle: function()
    {
        var title   = $('s_title').value.toLowerCase().trim();
        var results = [];
        
        if (title == '')
        return this.results(results);
        
        items.list.forEach((e, k) =>
        {
            if (db.items[e.id.h].toLowerCase().includes(title))
            results.push(k);
        });
        
        return this.results(results);
    },
    
    searchType: function()
    {
        var type    = $('s_cat').value;
        var results = [];
        
        items.list.forEach((e, k) =>
        {
            if (e.type.h == type)
            results.push(k);
        });
        
        return this.results(results);
    },
    
    results: function(results)
    {
        $('results').style.display   = 'block';
        $('item_info').style.display = 'none';
		$('download').style.display  = '';
		
		$('sel_item').innerHTML = '';
        
        results.forEach(r =>
        {
            let o = document.createElement("OPTION");
            
            o.text  = db.items[items.list[r].id.h];
            o.value = r;
            
            $('sel_item').options.add(o);
        });
        
        if (results)
		{
			this.displayItem(results[0]);
			$('sel_item').value = results[0];
		}
    },
    
    displayItem: function(key)
    {
        var item = items.list[key];
        
        if (!item)
        return;
        
        var type    = types[item.type.h];
		var el_type = '';
		
        $('title').innerHTML = `${db.items[item.id.h]}`;
        
        $('item_info').style.display = 'block';
		$('ele_res').style.display   = 'none';
		$('atk_aff').style.display   = 'none';
		$('skills').style.display    = 'none';
		
		if (type == 'weapons')
		el_type = 'atk_aff';
		
		else if (type != 'subweapons')
		el_type = 'ele_res';
		
		if (el_type)
		$(el_type).style.display = 'table-row';
		
		if (type == 'weapons' || type == 'subweapons')
		$('skills').style.display = 'table-row';
		
		$('debug').innerHTML = '<tr><td colspan="2"><b>Debug info:</b></td></tr>';
        
        for (let a in attrs)
        {
            if (!attrs.hasOwnProperty(a))
            continue;
			
			if (attrs[a].debug)
			$('debug').innerHTML += `<tr><td>${a}:</td><td>${item[a].h}</td></tr>`;
            
            let e = $(a);
            
            if (!e)
            continue;
            
            if (['elef', 'elei', 'elew', 'elee', 'eled', 'elel'].indexOf(a) != -1)
			{
				if (type == 'weapons')
				$('a' + a).checked = Boolean(item[a].d);
				
				else if (type != 'subweapons')
				e.value = (item[a].d > 0) ? '+' + item[a].d : item[a].d;
			}
            
			else
            e.value = item[a].d;
        }
        
        $('debug').innerHTML += "<tr><td colspan='2'><a href='#' onClick='console.log( { " + key + ": items.list[$(\"sel_item\").value] }); return false;'>Dump item to console.log</a></td></tr>";
    },
	
	apply: function()
	{
		var key  = $('sel_item').value;
		var item = items.list[key];
		var type = types[item.type.h];
		var data = { };
		
		for (let a in attrs)
        {
            if (!attrs.hasOwnProperty(a))
            continue;
            
            let e = $(a);
            
            if (!e)
            continue;
		
			if (type != 'weapons' && type != 'subweapons')
			{
				if (a.includes('skill'))
				continue;
			}
			
			let value = parseInt(e.value.trim())|| 0;
			
            if (['elef', 'elei', 'elew', 'elee', 'eled', 'elel'].indexOf(a) != -1)
			{
				if (type == 'weapons')
				data[a] = Number($('a' + a).checked);
				
				else if (type != 'subweapons')
				data[a] = value;
			}
            
			else
            data[a] = value;
        }
		
		setAttrs(key, data);
		
		this.displayItem(key);
	},
	
	download: function()
	{
		var out = new Blob([bin], { type: "application/octet-stream" });
		
		saveAs(out, "item.svo");
	},
};