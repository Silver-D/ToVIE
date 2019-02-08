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
        
        $('search').style.display    	= 'none';
        $('results').style.display   	= 'none';
        $('item_info').style.display 	= 'none';
        $('download').style.display  	= 'none';
		$('item_window').style.display = 'none';
        
        if ($('skill1').options.length > 1)
		return;
		
		for (let i = 1; i <= map.info.synth_ing; i++)
		{
			let t = '';
			
			t += '<tr>';
			t += '<td><a href="#" data-synth-sel="' + i + '" class="synth" id="synth_sel' + i + '_"></a>';
			t += '<input class="synth" type="hidden" id="synth_i' + i + '_"></td>';
			t += '<td style="width:24px;"><input class="synth" type="text" style="width:20px;" maxlength="2" id="synth_c' + i + '_">';
			
			if (i == map.info.synth_ing)
			t += '<input class="synth" type="hidden" id="synth_t_">';
			
			t += '</td></tr>';
			
			$('synth_ing_block_').innerHTML += t;
		}

        var synth = $('synth_').cloneNode(true);

        $('synth_block_2').appendChild(synth);
    
        for (let i = 1; i <= 2; i++)
        {
            let els = $('synth_block_' + i).getElementsByClassName('synth');
        
            for (let j = 0; j < els.length; j++)
            {
                let e = els[j];
				let s = e.getAttribute('data-synth-sel');
            
                e.setAttribute('id', e.getAttribute('id') + i);
				
				if (s)
				e.onclick = function() { ui.itemWindow({ search: 'synth', i: s, j: i });  return false; };
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
        
        for (let i in map.types)
        {
            if (!map.types.hasOwnProperty(i))
            continue;
            
            let o = document.createElement("OPTION");
            
            o.text  = map.types[i];
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
        
        for (k in items.list)
        {
			if (!items.list.hasOwnProperty(k))
			continue;
			
			let e = items.list[k];
			
            if (db.items[e.id.h].toLowerCase().includes(title))
            results.push(k);
        };
        
        return this.results(results);
    },
    
    searchType: function()
    {
        var type    = $('s_cat').value;
        var results = [];
        
        for (k in items.list)
        {
			if (!items.list.hasOwnProperty(k))
			continue;

            if (items.list[k].type.h == type)
            results.push(k);
        };
        
        return this.results(results);
    },
    
    results: function(results)
    {
        $('results').style.display     = 'block';
        $('item_info').style.display   = 'none';
		$('download').style.display    = '';
		$('item_window').style.display = 'none';
		
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
        
        var type    = map.types[item.type.h];
		var el_type = '';
		
        $('title').innerHTML      = `${db.items[item.id.h]}`;
		$('apply_warn').innerHTML = '&nbsp;';
        
        $('item_info').style.display   = 'block';
		$('ele_res').style.display     = 'none';
		$('atk_aff').style.display     = 'none';
		$('skills').style.display      = 'none';
		$('item_window').style.display = 'none';
		
		if (type == 'weapons')
		el_type = 'atk_aff';
		
		else if (type != 'subweapons')
		el_type = 'ele_res';
		
		if (el_type)
		$(el_type).style.display = 'table-row';
		
		if (type == 'weapons' || type == 'subweapons')
		$('skills').style.display = 'table-row';
		
		$('debug').innerHTML    = '';
		$('unmapped').innerHTML = '';
		
		let num_d = 0;

        for (let a in map.attrs)
        {
            if (!map.attrs.hasOwnProperty(a))
            continue;
			
			if (map.attrs[a].debug)
			{
			    $('debug').innerHTML += `<tr><td>${a}:</td><td>${map.attrs[a].offs}:</td><td>${item[a].h}</td></tr>`;
			    
			    num_d++;
			}
			
			if (a == 'synth_show')
			{
				$('synth_on_1').checked = (item[a].d >= 1);
				$('synth_on_2').checked = (item[a].d == 2);
			}
			
			else if (a == 'icon')
			$('replace_icon').checked = (db.icons[db.models[item.model.h]] == item.icon.h)
            
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
			
			if (a == 'model')
			{
				if (item[a].d > -1)
				{
					let t = '';
					
					t = `<a href="#" onClick="ui.itemWindow({ search: 'models', target: '${item.id.h}' }); return false;">${db.items[db.models[item[a].h]]}`;
					
					// TODO: needs a new default map
					//if (item.model.h == db.default_models[item.id.h])
					//t += ' (Default)';
					
					t += '</a>';
					
					$('replace_model').innerHTML = t;
				}
				
				else
				$('replace_model').innerHTML = "N/A";
			}
        }
        
        let c = 1;
        let t = '';
        
        for (let a in item.unmapped)
        {
            if (!item.unmapped.hasOwnProperty(a))
            continue;
            
            if (c == 1)
            t += '<tr>';
            
            t += `<td>${a}:</td><td>${item.unmapped[a].h}</td><td>(${item.unmapped[a].d})</td>`;
            
            if (c == 3)
            {
                t += '</tr>';
                
                c = 0;
            }
            
            c++;
        }
        
        $('unmapped').innerHTML = t;
		
		for (let j = 1; j <= 2; j++)
		{
			for (let i = 1; i <= map.info.synth_ing; i++)
			this.synthSetIng($('synth_i' + i + '_' + j).value, i, j, false);
		}
        
        $('debug').innerHTML += "<tr><td colspan='3'><a href='#' onClick='console.log(items.list[$(\"sel_item\").value]); return false;'>Dump item to console.log</a></td></tr>";
    },
	
	synthSetIng: function(id, i, j, manual)
	{
		var id_h = toHex(id, 4);
		
		if (manual)
		{
            if (Number(id) > 0 && i == 1 && Number($('synth_i1_' + j).value) == 0)
            {
                if (j == 1)
                $('synth_on_1').checked = true;
            
                if (j == 2 && Number($('synth_t_1').value) > 0 && $('synth_on_1').checked)
                $('synth_on_2').checked = true;
            }
            
            if (Number(id) == 0)
            $('synth_c' + i + '_' + j).value = '0';
        
            else if (Number($('synth_c' + i + '_' + j).value) == 0)
		    $('synth_c' + i + '_' + j).value = '1';
        }
		
		$('synth_i' + i + '_' + j).value = id;
		$('synth_sel' + i + '_' + j).innerHTML = db.mats[id_h] || db.items[id_h];
		
		let num = 0;
		
		for (let k = 1; k <= map.info.synth_ing; k++)
		{
			if (Number($('synth_i' + k + '_' + j).value) > 0)
			num++;
		}

		$('synth_t_' + j).value = num;
	},
	
	itemWindow: function(opts)
	{
		$('item_window').style.display = 'block';
		$('item_search').focus();
		
		$('item_search').oninput = function() { ui.itemSearch(this.value, opts); };
		
		if ($('item_search').value)
		$('item_search').value = '';
		
		this.itemSearch($('item_search').value, opts);
	},
	
	itemSearch: function(str, opts)
	{
		var results = [];
		
		str = str.toLowerCase().trim();
		
		if (opts.search == 'synth')
		{
			for (let m in db.mats)
			{
				if (!db.mats.hasOwnProperty(m))
				continue;
				
				if (!str.length || db.mats[m].toLowerCase().includes(str))
				results.push(m);
			}
			
			for (let m in db.items)
			{
				if (!db.items.hasOwnProperty(m))
				continue;
				
				if (!str.length || db.items[m].toLowerCase().includes(str))
				results.push(m);
			}
		}
		
		else if (opts.search == 'models')
		{
			for (let m in db.models)
			{
				if (!db.models.hasOwnProperty(m))
				continue;
				
				let item = items.list[db.models[m]];
				
				if (item.subtype.d == items.list[opts.target].subtype.d &&
					items.list[opts.target].equip_by.d == (items.list[opts.target].equip_by.d & item.equip_by.d) &&
					(!str.length || db.items[db.models[m]].toLowerCase().includes(str)))
				results.push(db.models[m]);
			}
		}
		
		let c = 1;
		let t = '';

		results.forEach((v, k) =>
		{
			let id = parseInt(v, 16);
			
			if (c == 1)
			t += '<tr>';
			
			t += '<td><a href="#" onclick="';
			
			if (opts.search == 'synth')
			t += `ui.synthSetIng(${id}, ${opts.i}, ${opts.j}, true);`;
			
			else if (opts.search == 'models')
			{
				t += `$('model').value = '${parseInt(db.default_models[v], 16)}'; $('replace_model').getElementsByTagName('a')[0].innerHTML = this.innerHTML;`;
			}
			
			t += " $('item_window').style.display = 'none'; return false;\">" + (db.mats[v] || db.items[v]) + '</a></td>';
			
			if (c == 3)
			{
				t += '</tr>';
				c = 0;
			}
			
			c++;
		});
		
		$('item_results').innerHTML = t;
	},
	
	apply: function()
	{
		var key  = $('sel_item').value;
		var item = items.list[key];
		var type = map.types[item.type.h];
		var data = { };
		
		for (let a in map.attrs)
        {
            if (!map.attrs.hasOwnProperty(a))
            continue;
			
			if (a == 'synth_show')
			{
				if ($('synth_on_2').checked && Number($('synth_t_2').value) > 0 && $('synth_on_1').checked && Number($('synth_t_1').value) > 0)
				data[a] = 2;
				
				else if ($('synth_on_1').checked && Number($('synth_t_1').value) > 0)
				data[a] = 1;
				
				else
				data[a] = 0;
			}
			
			if (a == 'icon' && item.model.d >= 0)
			{
				if ($('replace_icon').checked)
				data[a] = db.icons[db.models[toHex($('model').value, map.attrs.model.size * 2)]];
				
				else
				data[a] = db.icons[item.id.h];
			}
            
            let e = $(a);
            
            if (!e)
            continue;
		
			if (type != 'weapons' && type != 'subweapons')
			{
				if (a.includes('skill'))
				continue;
			}
			
			let value = parseInt(e.value) || 0;
			
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
		
		let warn = '';
		let hi_lvl = false;
		
		for (j = 1; j <= 2; j++)
		{
			let last = 0;
			let no_c = false;
			
			for (i = 1; i <= map.info.synth_ing; i++)
			{
				if (Number(data['synth_i' + i + '_' + j]) > 0)
				{
					last = Math.max(last, i);
					
					if (Number(data['synth_c' + i + '_' + j]) == 0)
					no_c = true;
				}
			}
			
			if (data['synth_l_' + j] > 17)
			hi_lvl = true;
			
			if (last > Number(data['synth_t_' + j]))
			warn = "Apparently you have gaps in your synth ingredient list. Can't promise this will work.";
			
			else if (no_c)
			warn = "Some ingredients have an amount of 0. Can't promise this will work.";	
		}
		
		if (!warn && hi_lvl)
		warn = "The maximum attainable synth level in the game is 17. But I won't stop you.";
		
		$('apply_warn').innerHTML = (warn) ? warn : '&nbsp;';
	},
	
	download: function()
	{
		var out = new Blob([bin], { type: "application/octet-stream" });
		
		saveAs(out, "item.svo");
	},
};