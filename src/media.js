export async function compressWebP(file){
 if(!['image/jpeg','image/png','image/webp'].includes(file.type))throw Error('Envie JPG, PNG ou WebP.');
 if(file.size>12*1024*1024)throw Error('Limite de 12 MB por imagem.');
 const bitmap=await createImageBitmap(file);try{if(bitmap.width*bitmap.height>40000000)throw Error('Imagem excede 40 megapixels.');const scale=Math.min(1,1600/Math.max(bitmap.width,bitmap.height));const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(bitmap.width*scale));canvas.height=Math.max(1,Math.round(bitmap.height*scale));canvas.getContext('2d').drawImage(bitmap,0,0,canvas.width,canvas.height);const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/webp',.82));if(!blob||blob.type!=='image/webp')throw Error('Este navegador não suporta exportação WebP.');return blob;}finally{bitmap.close()}
}
