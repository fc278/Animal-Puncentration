var pictures = ['https://s-media-cache-ak0.pinimg.com/736x/da/86/1d/da861d11a9267f97ace57dd269b77a93.jpg', // puma
                
  'http://fb-troublemakers.com/wp-content/uploads/2013/01/animal-puns.jpg', // hawk
                
  'http://www.discoverity.com/wp-content/uploads/2014/08/CarGotToad.jpg', // toad
                
  'https://s-media-cache-ak0.pinimg.com/736x/79/26/29/7926293d28384462052154641d0c583d.jpg', // koala
  'http://bestpunsever.com/sites/default/files/styles/medium/public/animal-puns.jpg?itok=TfGrWzNd', // duck 
  'http://www.quickmeme.com/img/58/58d286b6e01f2b7e2b3048f5b7818e6599321758a01140d0b5539fdbf08687a9.jpg', // elephant
                
  'http://i.imgur.com/EsySKnR.png', // pug
                
  'https://s-media-cache-ak0.pinimg.com/236x/ca/cf/34/cacf341bbf68761879f2596096529025.jpg', // mouse
                
  'https://s-media-cache-ak0.pinimg.com/736x/da/86/1d/da861d11a9267f97ace57dd269b77a93.jpg', // puma
                
  'http://fb-troublemakers.com/wp-content/uploads/2013/01/animal-puns.jpg', // hawk
  
  'http://www.discoverity.com/wp-content/uploads/2014/08/CarGotToad.jpg', // toad
                
  'https://s-media-cache-ak0.pinimg.com/736x/79/26/29/7926293d28384462052154641d0c583d.jpg', // koala
  'http://bestpunsever.com/sites/default/files/styles/medium/public/animal-puns.jpg?itok=TfGrWzNd', // duck 
  'http://www.quickmeme.com/img/58/58d286b6e01f2b7e2b3048f5b7818e6599321758a01140d0b5539fdbf08687a9.jpg', // elephant
                
  'http://i.imgur.com/EsySKnR.png', // pug
                
  'https://s-media-cache-ak0.pinimg.com/236x/ca/cf/34/cacf341bbf68761879f2596096529025.jpg',  // mouse
                
  'https://s-media-cache-ak0.pinimg.com/736x/da/86/1d/da861d11a9267f97ace57dd269b77a93.jpg']; // puma

function loadImages() {
  for ( var i = 0; i < pictures.length; i++ ) {
    new Image().src = pictures[i];
  }
}

var selected = [];

function check (image) {
 
  alert (image.id);
  image.src = pictures[image.id];
  
  selected.push(image);
  
  if (selected.length === 2) {
    
    console.log("Image 0 is "+selected[0].id);
    console.log("Image 1 is "+selected[1].id);
    
    if (selected[0].src !== selected[1].src) {
      alert("You otter be ashamed of yourself.");
      image.src = "http://i.imgur.com/N4yzqvS.jpg";
      
      selected[0].src = "http://i.imgur.com/N4yzqvS.jpg";
      
    } else if (selected[0] === selected[1]) {
      alert("No. Don't be a cheetah.");
      image.src = "http://i.imgur.com/N4yzqvS.jpg";
      
    } 
    
    selected = [];
  
  }
  
} 
