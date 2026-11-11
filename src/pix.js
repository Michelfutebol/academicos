export function crc16(text){let crc=0xffff;for(const byte of new TextEncoder().encode(text)){crc^=byte<<8;for(let i=0;i<8;i++)crc=(crc&0x8000)?((crc<<1)^0x1021)&0xffff:(crc<<1)&0xffff;}return crc.toString(16).toUpperCase().padStart(4,'0')}
const tlv=(id,value)=>{const size=new TextEncoder().encode(value).length;if(size>99)throw Error('Campo Pix excede 99 bytes.');return id+String(size).padStart(2,'0')+value};
export function pixPayload({key,name,city,cents,txid='***'}){
 key=key.trim();if(!key||key.length>77||/[^\x21-\x7e]/.test(key))throw Error('Informe uma chave Pix válida, sem espaços.');
 if(!Number.isSafeInteger(cents)||cents<=0||cents>999999999)throw Error('Valor inválido.');
 const clean=(x,max)=>x.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase().replace(/[^A-Z0-9 .-]/g,'').trim().slice(0,max);
 name=clean(name,25);city=clean(city,15);if(!name||!city)throw Error('Nome e cidade são obrigatórios.');
 if(txid!=='***'&&!/^[a-zA-Z0-9]{1,25}$/.test(txid))throw Error('Identificador Pix inválido.');
 const body=tlv('00','01')+tlv('26',tlv('00','br.gov.bcb.pix')+tlv('01',key))+tlv('52','0000')+tlv('53','986')+tlv('54',(cents/100).toFixed(2))+tlv('58','BR')+tlv('59',name)+tlv('60',city)+tlv('62',tlv('05',txid))+'6304';return body+crc16(body);
}
export function parseMoney(value){if(!/^\d{1,7}([.,]\d{1,2})?$/.test(value.trim()))throw Error('Use um valor como 25,00.');const [a,b='']=value.trim().replace(',','.').split('.');return Number(a)*100+Number(b.padEnd(2,'0'))}
