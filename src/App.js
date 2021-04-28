
function Food({name, picture}){
  return(
    <div>
      <h2>I like {name}</h2>
      <img src={picture}/>
    </div>
  );
}

const foodILike = [{name : "kimchi", image : "http://www.ricenflour.com/wp-content/uploads/2017/03/Vegan-kimchi-recipe-770x440.jpg"},
{name : "doncatsu", image : "https://www.thespruceeats.com/thmb/_Z40TEJfYCnCyKJvHwcAPdGF-P8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tonkatsu-recipe-japanese-breaded-and-deep-fried-pork-2031274-hero-01-13c2048cc4a04aa087d472787430867e.jpg"},
{name : "sushi", image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1024px-Sushi_platter.jpg"},
{name : "steak", image : "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_913/k%2Farchive%2Fe3ce4eb1741bd76cc083424453c0e3f39d147f9b"}];

function App() {
  return (
    <div>
      {foodILike.map(dish => 
        <Food name={dish.name} picture={dish.image}/>
      )}
    </div>
  );
}

export default App;
