export function blobRemover(image){
    fetch(image,{
        mode: 'no-cors',
        method: "get",
        headers: {
             "Content-Type": "application/json"
        } 
     }) 
    .then(response => response.blob())
    .then(images => {   
            var blob_url = URL.createObjectURL(images)
            var blobA = blob_url.replace("blob:","") 
            var blobB = blobA.replace('"','')
            return blobB
    })
}