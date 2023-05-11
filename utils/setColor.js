export default function setColor(img_url, id){

  try{

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    const image = new Image();
    image.crossOrigin = "Anonymous";
  
    image.src = img_url
  
    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, 1, 1);
  
        console.log(`color is rgba(${context.getImageData(0, 0, 1, 1).data.join(',')})`);
  
        const r = parseInt(context.getImageData(0, 0, 1, 1).data[0]) 
        const g = parseInt(context.getImageData(0, 0, 1, 1).data[1] ) 
        const b = parseInt(context.getImageData(0, 0, 1, 1).data[2]) 
  
        const elm = document.getElementById(id)
  
  
        elm.style.backgroundColor = RGBAToHexA(r, g, b, 0.5)
    };

  } catch(err) {
    console.log(err)
  }


}


function RGBAToHexA(r,g,b,a) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    a = Math.round(a * 255).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
    if (a.length == 1)
      a = "0" + a;
  
    return "#" + r + g + b + a;
  }