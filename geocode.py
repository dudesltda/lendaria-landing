import urllib.request
import json
import time

hubs_json = '{"success":true,"data":[{"cidade":"Alegrete","estado":"RS","membros":8,"embaixador":"N\\u00e3o"},{"cidade":"An\\u00e1polis","estado":"GO","membros":14,"embaixador":"N\\u00e3o"},{"cidade":"Arax\\u00e1","estado":"MG","membros":8,"embaixador":"Sim"},{"cidade":"Baixada Santista","estado":"SP","membros":24,"embaixador":"N\\u00e3o"},{"cidade":"Balne\\u00e1rio Cambori\\u00fa","estado":"SC","membros":45,"embaixador":"N\\u00e3o"},{"cidade":"Bauru","estado":"SP","membros":18,"embaixador":"N\\u00e3o"},{"cidade":"Bel\\u00e9m","estado":"PA","membros":19,"embaixador":"N\\u00e3o"},{"cidade":"Belo Horizonte","estado":"MG","membros":67,"embaixador":"N\\u00e3o"},{"cidade":"Bento Gon\\u00e7alves","estado":"RS","membros":16,"embaixador":"N\\u00e3o"},{"cidade":"Blumenau","estado":"SC","membros":26,"embaixador":"N\\u00e3o"},{"cidade":"Boa Vista","estado":"RR","membros":11,"embaixador":"N\\u00e3o"},{"cidade":"Boituva","estado":"SP","membros":7,"embaixador":"N\\u00e3o"},{"cidade":"Bras\\u00edlia","estado":"DF","membros":59,"embaixador":"N\\u00e3o"},{"cidade":"Cabo Frio","estado":"RJ","membros":13,"embaixador":"N\\u00e3o"},{"cidade":"Campinas","estado":"SP","membros":65,"embaixador":"Sim"},{"cidade":"Cascavel","estado":"PR","membros":22,"embaixador":"N\\u00e3o"},{"cidade":"Cuiab\\u00e1","estado":"MT","membros":23,"embaixador":"N\\u00e3o"},{"cidade":"Curitiba","estado":"PR","membros":87,"embaixador":"Sim"},{"cidade":"Florian\\u00f3polis","estado":"SC","membros":163,"embaixador":"Sim"},{"cidade":"Fortaleza","estado":"CE","membros":64,"embaixador":"Sim"},{"cidade":"Goi\\u00e2nia","estado":"GO","membros":66,"embaixador":"Sim"},{"cidade":"Governador Valadares","estado":"MG","membros":8,"embaixador":"N\\u00e3o"},{"cidade":"Indaiatuba","estado":"SP","membros":21,"embaixador":"N\\u00e3o"},{"cidade":"Joinville","estado":"SC","membros":22,"embaixador":"N\\u00e3o"},{"cidade":"Juiz de Fora","estado":"MG","membros":13,"embaixador":"Sim"},{"cidade":"Jundia\\u00ed","estado":"SP","membros":23,"embaixador":"N\\u00e3o"},{"cidade":"Lisboa","estado":"LX","membros":36,"embaixador":"Sim"},{"cidade":"Londrina","estado":"PR","membros":25,"embaixador":"Sim"},{"cidade":"Maca\\u00e9","estado":"RJ","membros":15,"embaixador":"N\\u00e3o"},{"cidade":"Macei\\u00f3","estado":"AL","membros":14,"embaixador":"Sim"},{"cidade":"Maring\\u00e1","estado":"PR","membros":31,"embaixador":"N\\u00e3o"},{"cidade":"Natal","estado":"RN","membros":17,"embaixador":"Sim"},{"cidade":"Niter\\u00f3i","estado":"RJ","membros":24,"embaixador":"N\\u00e3o"},{"cidade":"Nova Lima","estado":"MG","membros":20,"embaixador":"N\\u00e3o"},{"cidade":"Orlando","estado":"FL","membros":0,"embaixador":"Sim"},{"cidade":"Osasco","estado":"SP","membros":19,"embaixador":"N\\u00e3o"},{"cidade":"Paulo Afonso","estado":"BA","membros":5,"embaixador":"N\\u00e3o"},{"cidade":"Ponta Grossa","estado":"PR","membros":12,"embaixador":"N\\u00e3o"},{"cidade":"Porto Alegre","estado":"RS","membros":71,"embaixador":"Sim"},{"cidade":"Resende","estado":"RJ","membros":8,"embaixador":"N\\u00e3o"},{"cidade":"Ribeir\\u00e3o Preto","estado":"SP","membros":39,"embaixador":"Sim"},{"cidade":"Rio de Janeiro","estado":"RJ","membros":103,"embaixador":"Sim"},{"cidade":"Salvador","estado":"BA","membros":34,"embaixador":"Sim"},{"cidade":"S\\u00e3o Jos\\u00e9 do Rio Preto","estado":"SP","membros":30,"embaixador":"Sim"},{"cidade":"S\\u00e3o Lu\\u00eds","estado":"MA","membros":12,"embaixador":"N\\u00e3o"},{"cidade":"S\\u00e3o Paulo","estado":"SP","membros":352,"embaixador":"Sim"},{"cidade":"Sinop","estado":"MT","membros":10,"embaixador":"N\\u00e3o"},{"cidade":"Sorocaba","estado":"SP","membros":16,"embaixador":"Sim"},{"cidade":"Teresina","estado":"PI","membros":5,"embaixador":"N\\u00e3o"},{"cidade":"Ub\\u00e1","estado":"MG","membros":6,"embaixador":"N\\u00e3o"},{"cidade":"Uberaba","estado":"MG","membros":10,"embaixador":"N\\u00e3o"},{"cidade":"Uberl\\u00e2ndia","estado":"MG","membros":17,"embaixador":"N\\u00e3o"},{"cidade":"Valinhos","estado":"SP","membros":10,"embaixador":"N\\u00e3o"},{"cidade":"Vit\\u00f3ria","estado":"ES","membros":35,"embaixador":"Sim"},{"cidade":"Volta Redonda","estado":"RJ","membros":11,"embaixador":"N\\u00e3o"}],"count":55}'
hubs = json.loads(hubs_json)["data"]

results = []
for h in hubs:
    query = f"{h['cidade']}, {h['estado']}, Brazil".replace(" ", "+")
    if h['cidade'] == 'Lisboa' and h['estado'] == 'LX':
        query = 'Lisbon, Portugal'
    elif h['cidade'] == 'Orlando' and h['estado'] == 'FL':
        query = 'Orlando, FL, USA'
    elif h['cidade'] == 'Baixada Santista':
        query = 'Santos, SP, Brazil'
        
    req = urllib.request.Request(f"https://nominatim.openstreetmap.org/search?q={urllib.parse.quote(query.replace('+', ' '))}&format=json&limit=1", headers={'User-Agent': 'Mozilla/5.0 Lendaria/1.0'})
    try:
        resp = urllib.request.urlopen(req)
        data = json.loads(resp.read())
        if data:
            lat = float(data[0]['lat'])
            lon = float(data[0]['lon'])
            results.append({
                "id": h['cidade'].lower().replace(" ", "-"),
                "location": [lat, lon],
                "name": h['cidade'],
                "users": h.get('membros', 0)
            })
            print(f"OK: {h['cidade']}")
        else:
            print(f"NOT FOUND: {h['cidade']}")
    except Exception as e:
        print(f"Error on {h['cidade']}: {e}")
    time.sleep(1.1)

with open('hubs_coords.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
