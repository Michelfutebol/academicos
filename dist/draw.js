export function drawTeams(names,count,capacity,random=Math.random){
 if(!Number.isInteger(count)||count<2||count>4||!Number.isInteger(capacity)||capacity<2||capacity>11)throw new Error('Configuração inválida.');
 const players=names.map(x=>x.trim()).filter(Boolean);
 if(players.length< count)throw new Error('Adicione pelo menos um atleta por time.');
 if(players.length>100)throw new Error('Limite de 100 atletas por sorteio.');
 if(players.some(x=>x.length>40))throw new Error('Use apelidos com até 40 caracteres.');
 if(new Set(players.map(x=>x.normalize('NFKC').toLocaleLowerCase('pt-BR'))).size!==players.length)throw new Error('Há apelidos repetidos. Diferencie os atletas antes de sortear.');
 for(let i=players.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[players[i],players[j]]=[players[j],players[i]];}
 const selected=players.slice(0,count*capacity); const teams=Array.from({length:count},()=>[]);
 selected.forEach((name,i)=>teams[i%count].push(name));return {teams,reserves:players.slice(count*capacity),missing:Math.max(0,count*capacity-players.length)};
}
