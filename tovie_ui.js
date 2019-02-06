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
        $('file').disabled = false;
        $('search').style.display = 'none';
        $('results').style.display = 'none';
        $('item_info').style.display = 'none';
        $('file').value = '';
        $('s_cat').innerHTML = '';
		$('download').style.display='none';
		
		if ($('skill1').options.length > 1)
		return;
		
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
        $('file').disabled = false;
        
        $('search').style.display = 'block';
        $('file').value = '';
        
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
    
    searchCat: function()
    {
        var cat   = $('s_cat').value;
        var results = [];
        
        items.list.forEach((e, k) =>
        {
            if (e.type.h == cat)
            results.push(k);
        });
        
        return this.results(results);
    },
    
    results: function(results)
    {
        $('results').style.display = 'block';
        $('sel_item').innerHTML = '';
        $('item_info').style.display = 'none';
		$('download').style.display='';
        
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
    
    displayItem: function(k)
    {
        var v 		= items.list[k];
		var el_type = '';
        
        if (!v)
        return;
		
        $('title').innerHTML = `${db.items[v.id.h]} (${v.id.h})`;
        $('item_info').style.display = 'block';
		
		$('ele_res').style.display = 'none';
		$('atk_aff').style.display = 'none';
		$('skills').style.display = 'none';
		
		$$('.ele_input').forEach(e =>
		{
			if (!e.getAttribute('id_orig'))
			e.setAttribute('id_orig', e.getAttribute('id'));
			
			e.setAttribute('id', '');
		});
		
		if (types[v.type.h] == 'weapons')
		el_type = 'atk_aff';
		
		else if (types[v.type.h] != 'subweapons')
		el_type = 'ele_res';
		
		if (types[v.type.h] == 'weapons' || types[v.type.h] == 'subweapons')
		$('skills').style.display = 'table-row';
		
		if (el_type)
		{
			$(el_type).style.display = 'table-row';
			
			$$('#' + el_type + ' input').forEach(e => { e.setAttribute('id', e.getAttribute('id_orig')) });
		}
		
		$('debug').innerHTML = '<tr><td colspan="2"><b>Debug info:</b></td></tr>';
        
        for (let i in attrs)
        {
            if (!attrs.hasOwnProperty(i))
            continue;
			
			if (attrs[i].debug)
			$('debug').innerHTML += `<tr><td>${i}:</td><td>${v[i].h}</td></tr>`;
            
            let p = $(i);
            
            if (!p)
            continue;
            
            if (i == 'elef' || i == 'elei' || i == 'elew' || i == 'elee' || i == 'eled' || i == 'elel')
			{
				if (types[v.type.h] == 'weapons')
				p.checked = Boolean(v[i].d);
				
				else if (types[v.type.h] != 'subweapons')
				{
					if (v[i].d > 0)
					p.value = '+' + v[i].d;
					
					else
					p.value = v[i].d;
				}
			}
            
			else
            p.value = v[i].d;
        }
    },
	
	apply: function()
	{
		var k    = $('sel_item').value;
		var v 	 = items.list[k];
		var data = { };
		
		for (let i in attrs)
        {
            if (!attrs.hasOwnProperty(i))
            continue;
            
            let p = $(i);
            
            if (!p)
            continue;
			
			if (types[v.type.h] != 'weapons' && types[v.type.h] != 'subweapons')
			{
				if (i.includes('skill'))
				continue;
			}
			
            if (i == 'elef' || i == 'elei' || i == 'elew' || i == 'elee' || i == 'eled' || i == 'elel')
			{
				if (types[v.type.h] == 'weapons')
				data[i] = Number(p.checked);
				
				else if (types[v.type.h] != 'subweapons')
				data[i] = Number(p.value);
			}
            
			else
            data[i] = p.value;
        }
		
		setAttrs(v.index, k, data);
		
		this.displayItem(k);
	},
	
	download: function()
	{
		var out = new Blob([bin], { type: "application/octet-stream" });
		
		saveAs(out, "item.svo");
	},
};