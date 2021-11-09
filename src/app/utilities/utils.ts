//function to take the file and return the base64 representation of that file
export function toBase64(file:File)
{
   return new Promise ((resolve,reject)=>{
     const reader=new FileReader();
     reader.readAsDataURL(file);
     reader.onload = ()=>resolve(reader.result);
     reader.onerror = (error)=> reject(error);

   })
}
