function getProduct(){
    var productlist = [{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]},{"id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/2/1.jpg","https://i.dummyjson.com/data/products/2/2.jpg","https://i.dummyjson.com/data/products/2/3.jpg","https://i.dummyjson.com/data/products/2/thumbnail.jpg"]},{"id":3,"title":"Samsung Universe 9","description":"Samsung's new variant which goes beyond Galaxy to the Universe","price":1249,"discountPercentage":15.46,"rating":4.09,"stock":36,"brand":"Samsung","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/3/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/3/1.jpg"]},{"id":4,"title":"OPPOF19","description":"OPPO F19 is officially announced on April 2021.","price":280,"discountPercentage":17.91,"rating":4.3,"stock":123,"brand":"OPPO","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/4/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/4/1.jpg","https://i.dummyjson.com/data/products/4/2.jpg","https://i.dummyjson.com/data/products/4/3.jpg","https://i.dummyjson.com/data/products/4/4.jpg","https://i.dummyjson.com/data/products/4/thumbnail.jpg"]},{"id":5,"title":"Huawei P30","description":"Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.","price":499,"discountPercentage":10.58,"rating":4.09,"stock":32,"brand":"Huawei","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/5/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/5/1.jpg","https://i.dummyjson.com/data/products/5/2.jpg","https://i.dummyjson.com/data/products/5/3.jpg"]},{"id":6,"title":"MacBook Pro","description":"MacBook Pro 2021 with mini-LED display may launch between September, November","price":1749,"discountPercentage":11.02,"rating":4.57,"stock":83,"brand":"Apple","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/6/thumbnail.png","images":["https://i.dummyjson.com/data/products/6/1.png","https://i.dummyjson.com/data/products/6/2.jpg","https://i.dummyjson.com/data/products/6/3.png","https://i.dummyjson.com/data/products/6/4.jpg"]},{"id":7,"title":"Samsung Galaxy Book","description":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched","price":1499,"discountPercentage":4.15,"rating":4.25,"stock":50,"brand":"Samsung","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/7/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/7/1.jpg","https://i.dummyjson.com/data/products/7/2.jpg","https://i.dummyjson.com/data/products/7/3.jpg","https://i.dummyjson.com/data/products/7/thumbnail.jpg"]},{"id":8,"title":"Microsoft Surface Laptop 4","description":"Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.","price":1499,"discountPercentage":10.23,"rating":4.43,"stock":68,"brand":"Microsoft Surface","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/8/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/8/1.jpg","https://i.dummyjson.com/data/products/8/2.jpg","https://i.dummyjson.com/data/products/8/3.jpg","https://i.dummyjson.com/data/products/8/4.jpg","https://i.dummyjson.com/data/products/8/thumbnail.jpg"]},{"id":9,"title":"Infinix INBOOK","description":"Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty","price":1099,"discountPercentage":11.83,"rating":4.54,"stock":96,"brand":"Infinix","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/9/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/9/1.jpg","https://i.dummyjson.com/data/products/9/2.png","https://i.dummyjson.com/data/products/9/3.png","https://i.dummyjson.com/data/products/9/4.jpg","https://i.dummyjson.com/data/products/9/thumbnail.jpg"]},{"id":10,"title":"HP Pavilion 15-DK1056WM","description":"HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10","price":1099,"discountPercentage":6.18,"rating":4.43,"stock":89,"brand":"HP Pavilion","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/10/thumbnail.jpeg","images":["https://i.dummyjson.com/data/products/10/1.jpg","https://i.dummyjson.com/data/products/10/2.jpg","https://i.dummyjson.com/data/products/10/3.jpg","https://i.dummyjson.com/data/products/10/thumbnail.jpeg"]},{"id":11,"title":"perfume Oil","description":"Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil","price":13,"discountPercentage":8.4,"rating":4.26,"stock":65,"brand":"Impression of Acqua Di Gio","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/11/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/11/1.jpg","https://i.dummyjson.com/data/products/11/2.jpg","https://i.dummyjson.com/data/products/11/3.jpg","https://i.dummyjson.com/data/products/11/thumbnail.jpg"]},{"id":12,"title":"Brown Perfume","description":"Royal_Mirage Sport Brown Perfume for Men & Women - 120ml","price":40,"discountPercentage":15.66,"rating":4,"stock":52,"brand":"Royal_Mirage","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/12/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/12/1.jpg","https://i.dummyjson.com/data/products/12/2.jpg","https://i.dummyjson.com/data/products/12/3.png","https://i.dummyjson.com/data/products/12/4.jpg","https://i.dummyjson.com/data/products/12/thumbnail.jpg"]},{"id":13,"title":"Fog Scent Xpressio Perfume","description":"Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men","price":13,"discountPercentage":8.14,"rating":4.59,"stock":61,"brand":"Fog Scent Xpressio","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/13/thumbnail.webp","images":["https://i.dummyjson.com/data/products/13/1.jpg","https://i.dummyjson.com/data/products/13/2.png","https://i.dummyjson.com/data/products/13/3.jpg","https://i.dummyjson.com/data/products/13/4.jpg","https://i.dummyjson.com/data/products/13/thumbnail.webp"]},{"id":14,"title":"Non-Alcoholic Concentrated Perfume Oil","description":"Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil","price":120,"discountPercentage":15.6,"rating":4.21,"stock":114,"brand":"Al Munakh","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/14/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/14/1.jpg","https://i.dummyjson.com/data/products/14/2.jpg","https://i.dummyjson.com/data/products/14/3.jpg","https://i.dummyjson.com/data/products/14/thumbnail.jpg"]},{"id":15,"title":"Eau De Perfume Spray","description":"Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality","price":30,"discountPercentage":10.99,"rating":4.7,"stock":105,"brand":"Lord - Al-Rehab","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/15/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/15/1.jpg","https://i.dummyjson.com/data/products/15/2.jpg","https://i.dummyjson.com/data/products/15/3.jpg","https://i.dummyjson.com/data/products/15/4.jpg","https://i.dummyjson.com/data/products/15/thumbnail.jpg"]},{"id":16,"title":"Hyaluronic Acid Serum","description":"L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid","price":19,"discountPercentage":13.31,"rating":4.83,"stock":110,"brand":"L'Oreal Paris","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/16/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/16/1.png","https://i.dummyjson.com/data/products/16/2.webp","https://i.dummyjson.com/data/products/16/3.jpg","https://i.dummyjson.com/data/products/16/4.jpg","https://i.dummyjson.com/data/products/16/thumbnail.jpg"]},{"id":17,"title":"Tree Oil 30ml","description":"Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,","price":12,"discountPercentage":4.09,"rating":4.52,"stock":78,"brand":"Hemani Tea","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/17/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/17/1.jpg","https://i.dummyjson.com/data/products/17/2.jpg","https://i.dummyjson.com/data/products/17/3.jpg","https://i.dummyjson.com/data/products/17/thumbnail.jpg"]},{"id":18,"title":"Oil Free Moisturizer 100ml","description":"Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.","price":40,"discountPercentage":13.1,"rating":4.56,"stock":88,"brand":"Dermive","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/18/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/18/1.jpg","https://i.dummyjson.com/data/products/18/2.jpg","https://i.dummyjson.com/data/products/18/3.jpg","https://i.dummyjson.com/data/products/18/4.jpg","https://i.dummyjson.com/data/products/18/thumbnail.jpg"]},{"id":19,"title":"Skin Beauty Serum.","description":"Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m","price":46,"discountPercentage":10.68,"rating":4.42,"stock":54,"brand":"ROREC White Rice","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/19/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/19/1.jpg","https://i.dummyjson.com/data/products/19/2.jpg","https://i.dummyjson.com/data/products/19/3.png","https://i.dummyjson.com/data/products/19/thumbnail.jpg"]},{"id":20,"title":"Freckle Treatment Cream- 15gm","description":"Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.","price":70,"discountPercentage":16.99,"rating":4.06,"stock":140,"brand":"Fair & Clear","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/20/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/20/1.jpg","https://i.dummyjson.com/data/products/20/2.jpg","https://i.dummyjson.com/data/products/20/3.jpg","https://i.dummyjson.com/data/products/20/4.jpg","https://i.dummyjson.com/data/products/20/thumbnail.jpg"]},{"id":21,"title":"- Daal Masoor 500 grams","description":"Fine quality Branded Product Keep in a cool and dry place","price":20,"discountPercentage":4.81,"rating":4.44,"stock":133,"brand":"Saaf & Khaas","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/21/thumbnail.png","images":["https://i.dummyjson.com/data/products/21/1.png","https://i.dummyjson.com/data/products/21/2.jpg","https://i.dummyjson.com/data/products/21/3.jpg"]},{"id":22,"title":"Elbow Macaroni - 400 gm","description":"Product details of Bake Parlor Big Elbow Macaroni - 400 gm","price":14,"discountPercentage":15.58,"rating":4.57,"stock":146,"brand":"Bake Parlor Big","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/22/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/22/1.jpg","https://i.dummyjson.com/data/products/22/2.jpg","https://i.dummyjson.com/data/products/22/3.jpg"]},{"id":23,"title":"Orange Essence Food Flavou","description":"Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item","price":14,"discountPercentage":8.04,"rating":4.85,"stock":26,"brand":"Baking Food Items","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/23/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/23/1.jpg","https://i.dummyjson.com/data/products/23/2.jpg","https://i.dummyjson.com/data/products/23/3.jpg","https://i.dummyjson.com/data/products/23/4.jpg","https://i.dummyjson.com/data/products/23/thumbnail.jpg"]},{"id":24,"title":"cereals muesli fruit nuts","description":"original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji","price":46,"discountPercentage":16.8,"rating":4.94,"stock":113,"brand":"fauji","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/24/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/24/1.jpg","https://i.dummyjson.com/data/products/24/2.jpg","https://i.dummyjson.com/data/products/24/3.jpg","https://i.dummyjson.com/data/products/24/4.jpg","https://i.dummyjson.com/data/products/24/thumbnail.jpg"]},{"id":25,"title":"Gulab Powder 50 Gram","description":"Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds","price":70,"discountPercentage":13.58,"rating":4.87,"stock":47,"brand":"Dry Rose","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/25/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/25/1.png","https://i.dummyjson.com/data/products/25/2.jpg","https://i.dummyjson.com/data/products/25/3.png","https://i.dummyjson.com/data/products/25/4.jpg","https://i.dummyjson.com/data/products/25/thumbnail.jpg"]},{"id":26,"title":"Plant Hanger For Home","description":"Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf","price":41,"discountPercentage":17.86,"rating":4.08,"stock":131,"brand":"Boho Decor","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/26/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/26/1.jpg","https://i.dummyjson.com/data/products/26/2.jpg","https://i.dummyjson.com/data/products/26/3.jpg","https://i.dummyjson.com/data/products/26/4.jpg","https://i.dummyjson.com/data/products/26/5.jpg","https://i.dummyjson.com/data/products/26/thumbnail.jpg"]},{"id":27,"title":"Flying Wooden Bird","description":"Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm","price":51,"discountPercentage":15.58,"rating":4.41,"stock":17,"brand":"Flying Wooden","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/27/thumbnail.webp","images":["https://i.dummyjson.com/data/products/27/1.jpg","https://i.dummyjson.com/data/products/27/2.jpg","https://i.dummyjson.com/data/products/27/3.jpg","https://i.dummyjson.com/data/products/27/4.jpg","https://i.dummyjson.com/data/products/27/thumbnail.webp"]},{"id":28,"title":"3D Embellishment Art Lamp","description":"3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)","price":20,"discountPercentage":16.49,"rating":4.82,"stock":54,"brand":"LED Lights","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/28/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/28/1.jpg","https://i.dummyjson.com/data/products/28/2.jpg","https://i.dummyjson.com/data/products/28/3.png","https://i.dummyjson.com/data/products/28/4.jpg","https://i.dummyjson.com/data/products/28/thumbnail.jpg"]},{"id":29,"title":"Handcraft Chinese style","description":"Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate","price":60,"discountPercentage":15.34,"rating":4.44,"stock":7,"brand":"luxury palace","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/29/thumbnail.webp","images":["https://i.dummyjson.com/data/products/29/1.jpg","https://i.dummyjson.com/data/products/29/2.jpg","https://i.dummyjson.com/data/products/29/3.webp","https://i.dummyjson.com/data/products/29/4.webp","https://i.dummyjson.com/data/products/29/thumbnail.webp"]},{"id":30,"title":"Key Holder","description":"Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality","price":30,"discountPercentage":2.92,"rating":4.92,"stock":54,"brand":"Golden","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/30/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/30/1.jpg","https://i.dummyjson.com/data/products/30/2.jpg","https://i.dummyjson.com/data/products/30/3.jpg","https://i.dummyjson.com/data/products/30/thumbnail.jpg"]}];
    return productlist;
 }
function getDataFromStorage(){
    var data=localStorage.getItem("productlist");
    data = JSON.parse(data);
    return data;
}


function createHeader(){
var mainDiv =  document.querySelector("#mainDiv");
var header = document.createElement("header");
header.setAttribute("style","width:100%;height:70px;background-color:#232F3E;display:flex;justify-content:space-around");

var logoDiv = document.createElement("div");
logoDiv.setAttribute("style","width:10%;height:70px;");

var logoImg = document.createElement("img");
logoImg.setAttribute("src","download.png");
logoImg.setAttribute("style","width:90%;height:65px;left:7px;margin-top:3px;");
logoDiv.appendChild(logoImg);

var searchDiv = document.createElement("div");
searchDiv.setAttribute("style","height:70px;width:40%;");



var searchInput = document.createElement("input");
searchInput.setAttribute("style","width:100%; height:45px;margin-top:10px;");
searchInput.setAttribute("type","text");
searchInput.setAttribute("placeholder","Search product");
searchInput.setAttribute("id","searchKeyword");
searchInput.addEventListener("keyup",()=>{
     SearchProduct();
    });
    searchDiv.appendChild(searchInput);

var menuDiv = document.createElement("div");
menuDiv.setAttribute("style","width:20%;height:70px;display:flex; justify-content:space-around; align-items:center;");

if(isLoggedIn()){
    var viewCart = document.createElement("span");
    viewCart.innerHTML="View Cart";

    viewCart.setAttribute("style","cursor:pointer; color:black;padding:5px 20px;background:white;")
    
    viewCart.addEventListener("click",()=>{
        var cartDiv= document.querySelector("#cart-container"); 

        cartDiv.innerHTML="";
        var currentUser=sessionStorage.getItem("currentUser");
        var cartList= JSON.parse(localStorage.getItem("cartList"));
        var currentUserCartList= cartList.find((obj)=>{
            return obj.email==currentUser});
            
            var cartItems = currentUserCartList.cartItems;
            var container = document.createElement("div");
            
            container.setAttribute("style","width:100%; height:500px;");
            
            var rowDiv = document.createElement("div");
            rowDiv.setAttribute("class","row");
            
            
            var leftContainer = document.createElement("div");
            leftContainer.setAttribute("class","col-md-8");
            
            // creating table in left container:--
            
            var table = document.createElement("table");
            table.setAttribute("class","table");
            
            var thead= document.createElement("thead");
            
            var tr = document.createElement("tr");
            var sNo= document.createElement("td");
            sNo.innerText= "S.no";
            tr.appendChild(sNo);
            
            var name = document.createElement("td");
            name.innerHTML="Name";
            tr.appendChild(name);
            
            var price = document.createElement("td");
            price.innerHTML="price";
            tr.appendChild(price);
            
            var qty = document.createElement("td");
            qty.innerHTML="Qty";
            tr.appendChild(qty);
            
            var total = document.createElement("td");
            total.innerHTML="Total";
            tr.appendChild(total);
            thead.appendChild(tr);
            
            var tbody = document.createElement("tbody");
            for(var index in cartItems){
                
                let tr = document.createElement("tr");
                let sNo = document.createElement("td");
                sNo.innerText=""+(index*1+1);
                tr.appendChild(sNo);
                
                let name = document.createElement("td");
                name.innerText = cartItems[index].title;
                tr.appendChild(name);
                
                let price = document.createElement("td");
                price.innerText = cartItems[index].price;
                tr.appendChild(price);
                
                let qty = document.createElement("td");
                qty.innerHTML = "<input onchange='updateQty("+cartItems[index].id+","+index+")' style='width:50px' id='qtyChange"+index+"' type='number' min='1' value='1'/>";
                tr.appendChild(qty);
                
                let total = document.createElement("td");
                total.setAttribute("id","total"+index);
                total.innerText = cartItems[index].price;
                tr.appendChild(total);
                tbody.appendChild(tr);
                
            }
            table.appendChild(thead);
            table.appendChild(tbody);
            leftContainer.appendChild(table);
            
            
            var rightContainer = document.createElement("div");
            rightContainer.setAttribute("class","col-md-3 offset-1");
            
       var h1 = document.createElement("h1");
       h1.innerText = "Order Details";
       h1.setAttribute("class","text-center");
       var hr = document.createElement("hr");
       
       var totalItems = document.createElement("p");
       totalItems.innerHTML = "Total Items : "+cartItems.length; 
       
       var totalBillAmount = document.createElement("p");
       totalBillAmount.setAttribute("id","totalBillLabel");
       totalBillAmount.innerHTML = "Total Bill : " +getBillAmount();
       
       var checkoutButton = document.createElement("button");
       checkoutButton.innerHTML="Checkout";
       checkoutButton.setAttribute("class","btn btn-warning");
       checkoutButton.setAttribute("style","width:90%; margin:auto;");

       checkoutButton.addEventListener("click",()=>{
         formDetails();
       });
       
       
       
       rightContainer.appendChild(h1);
       rightContainer.appendChild(hr);
       rightContainer.appendChild(totalItems);
       rightContainer.appendChild(totalBillAmount);
       rightContainer.appendChild(checkoutButton);
       
       
       rowDiv.appendChild(leftContainer);
       rowDiv.appendChild(rightContainer);
       

       container.appendChild(rowDiv);
       cartDiv.appendChild(container);
       
       menuDiv.innerHTML="";
       var home = document.createElement("span");
       home.innerHTML="Home";
       home.setAttribute("style","cursor:pointer; color:black;padding:5px 20px;background:white;");
       menuDiv.appendChild(home);
       
       
       
       home.addEventListener("click",()=>{
           menuDiv.innerHTML="";
           menuDiv.appendChild(viewCart);
           menuDiv.appendChild(signOut);
           
           cartDiv.innerHTML="";
           createCart(data);
        })
    });
    
    var signOut =  document.createElement("span");
    signOut.innerHTML = "Sign out";
    signOut.setAttribute("style","cursor:pointer; color:black;padding:5px 20px;background:white;")
    
    signOut.addEventListener("click",()=>{
        SignOut(menuDiv);
    });
    

  
    
    
    menuDiv.appendChild(viewCart);
    menuDiv.appendChild(signOut);
}


else{

var signIn = document.createElement("span");
signIn.setAttribute("style","cursor:pointer; color:black;padding:5px 20px;background:white;")
signIn.innerHTML="Sign In";
signIn.addEventListener("click",()=>{
SignInComponent();
});

menuDiv.appendChild(signIn);


var signUp = document.createElement("span");
signUp.innerHTML="Sign up";
signUp.setAttribute("style","cursor:pointer; color:black; padding:5px 20px;background:white");
signUp.addEventListener("click",()=>{
SignUpComponent();
});
menuDiv.appendChild(signUp);

}
header.appendChild(logoDiv);
header.appendChild(searchDiv);
header.appendChild(menuDiv);
mainDiv.appendChild(header);
}

function createCart(data){
var mainDiv = document.getElementById("mainDiv");

var cartContainer = document.createElement("div");

cartContainer.setAttribute("style","width:100%;height:auto;margin-top:50px; display:flex; flex-wrap:wrap;justify-content:space-evenly;row-gap:10px;");
cartContainer.setAttribute("id","cart-container");

for(let product of data){
var cartDiv = document.createElement("div");
cartDiv.setAttribute("style","width:30%;height:430px;margin-left:10px; box-shadow:10px 10px 10px grey;");

var productImg =  document.createElement("img");
productImg.setAttribute("src",product.thumbnail);
productImg.setAttribute("style","width:100%;height:60%;")

 var h3= document.createElement("h3");
h3.innerText=product.title;
h3.setAttribute("style","text-align:center;position:relative;top:10px;");

var p = document.createElement("p");
p.innerHTML="Price<span style='color:red';>" +' : '+product.price+"Rs.</span>";

p.setAttribute("style","text-align:center;position:relative;top:20px");

var addToCart = document.createElement("button");
addToCart.innerText="Add to cart";

addToCart.setAttribute("style","width:90%;margin-left:20px;height:40px;position:relative;top:40px;background-color:#232F3E;;color:white;");

addToCart.addEventListener("click",()=>{
    if(isLoggedIn()){
        saveProductInToCart(product);

    }
    else{
        window.alert("Sign in first");
    }
});

cartDiv.appendChild(productImg);
cartDiv.appendChild(h3);
cartDiv.appendChild(p);
cartDiv.appendChild(addToCart);
cartContainer.appendChild(cartDiv);
}
mainDiv.appendChild(cartContainer);


}

function SignInComponent(){
    var mainDiv = document.getElementById("mainDiv");
    mainDiv.innerHTML="";

    var headingDiv = document.createElement("div");
    var heading = document.createElement("h1");
    heading.innerText="Welcome to Shop & Save";
    heading.setAttribute("style","text-align:center;margin-top:100px;");

    var Img = document.createElement("img");
    Img.setAttribute("src","download.png");
    Img.setAttribute("style","margin-left:40%;");
    
    headingDiv.appendChild(heading);
    headingDiv.appendChild(Img);


    mainDiv.appendChild(headingDiv);
    
    
    
    var container = document.createElement("div");
    container.setAttribute("style","width:30%;height:200px;position:absolute;top:60%;border; left:50%;transform:translate(-50%,-50%);box-shadow:10px 10px 10px grey;");
    
    var emailDiv = document.createElement("div");
    emailDiv.setAttribute("style","margin-left:20px;margin-top:20px;")
    var emailInput = document.createElement("input");
    emailInput.setAttribute("type","email");
    emailInput.setAttribute("id","email");
    emailInput.setAttribute("placeholder","Enter your email");
    emailInput.setAttribute("style","width:90%;padding:10px;border-radius:10px;");
    emailDiv.appendChild(emailInput);
    
    var passDiv = document.createElement("div");
    passDiv.setAttribute("style","margin-left:20px;")
    var passInput = document.createElement("input");
    passInput.setAttribute("type","text");
    passInput.setAttribute("id","password");
    passInput.setAttribute("placeholder","Enter your password");
    passInput.setAttribute("style","width:90%;padding:10px;border-radius:10px;margin-top:20px;");
    passDiv.appendChild(passInput);
    
    var signInButton = document.createElement("button");
    signInButton.innerText="Sign In";
    signInButton.setAttribute("style","padding:5px 10px;margin-top:20px;margin-left:22px;");
    signInButton.addEventListener("click",()=>{
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;
        signIn(email,password);
    });
    
    
    
    var signInLabel = document.createElement("span");
    signInLabel.innerHTML="Create new account";
    signInLabel.setAttribute("style","color:red;margin-left:10px;cursor:pointer;");
    
    signInLabel.addEventListener("click",()=>{
        SignUpComponent();
    });
    
    
    
    
    container.appendChild(emailDiv);
    container.appendChild(passDiv);
    container.appendChild(signInButton);
    container.appendChild(signInLabel);

    mainDiv.appendChild(container);

    
}


function SignUpComponent(){
    var mainDiv = document.getElementById("mainDiv");
    mainDiv.innerHTML="";


    var headingDiv = document.createElement("div");
    var heading = document.createElement("h1");
    heading.innerText="Welcome to Shop & Save";
    heading.setAttribute("style","text-align:center;margin-top:200px;");

    var Img = document.createElement("img");
    Img.setAttribute("src","download.png");
    Img.setAttribute("style","margin-left:40%;");
    
    headingDiv.appendChild(heading);
    headingDiv.appendChild(Img);


    mainDiv.appendChild(headingDiv);
    
    
 
    var container = document.createElement("div");
    container.setAttribute("style","width:30%;height:200px;position:absolute;top:75%; left:50%;transform:translate(-50%,-50%);box-shadow:10px 10px 10px grey;");

    var emailDiv = document.createElement("div");
    emailDiv.setAttribute("style","margin-left:20px;margin-top:20px;")
    var emailInput = document.createElement("input");
    emailInput.setAttribute("type","email");
    emailInput.setAttribute("id","email");
    emailInput.setAttribute("placeholder","Enter your email");
    emailInput.setAttribute("style","width:90%;padding:10px;border-radius:10px;");
    emailDiv.appendChild(emailInput);

    var passDiv = document.createElement("div");
    passDiv.setAttribute("style","margin-left:20px;")
    var passInput = document.createElement("input");
    passInput.setAttribute("type","text");
    passInput.setAttribute("id","password");
    passInput.setAttribute("placeholder","Enter your password");
    passInput.setAttribute("style","width:90%;padding:10px;border-radius:10px;margin-top:20px;");
    passDiv.appendChild(passInput);
    
    var signUpButton = document.createElement("button");
    signUpButton.setAttribute("style","padding:5px 10px;margin-top:20px;margin-left:22px;");
    signUpButton.innerText="Sign Up";

    signUpButton.addEventListener("click",()=>{
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;

        if(isUserExist(email,password)){
            window.alert("User Already exist");
        }
        else{
        var user = {email:email,password:password};
        var userList =  JSON.parse(localStorage.getItem("userList"));
        userList.push(user);

        localStorage.setItem("userList",JSON.stringify(userList));
        window.alert("User registered sucessfully"); 

        SignInComponent();
        }
    });
    
    function isUserExist(email,password){
        var userList = localStorage.getItem("userList");
        userList = JSON.parse(userList);

            var user = userList.find((user)=>{return user.email==email});
            console.log(user);
            return !!user;
    }
    var signUpLabel = document.createElement("span");
    signUpLabel.innerHTML="Already have an account";
    signUpLabel.setAttribute("style","color:red;margin-left:10px; cursor:pointer;")

    signUpLabel.addEventListener("click",()=>{
    SignInComponent();
    });

    container.appendChild(emailDiv);
    container.appendChild(passDiv);
    container.appendChild(signUpButton);
    container.appendChild(signUpLabel);
    mainDiv.appendChild(container);

    
}

function signIn(email,password){
var userList = localStorage.getItem("userList");
userList = JSON.parse(userList);

var user = userList.find((user)=>{
    return user.email==email && user.password==password});

    if(user){
        sessionStorage.setItem("isLoggedIn","true");
        sessionStorage.setItem("currentUser",user.email);
        document.querySelector("#mainDiv").innerHTML="";
        createHeader();
        createCart(data);
        
    }
    else{
        window.alert("Incorrect User Name or password");
    }

}

function isLoggedIn(){
    return !!sessionStorage.getItem("isLoggedIn");

}

function SignOut(menuDiv){
sessionStorage.clear();
menuDiv.innerHTML="";

var signInOptions = document.createElement("span");
signInOptions.setAttribute("style","cursor:pointer; color:black;padding:5px 20px;background:white;")
signInOptions.innerHTML="Sign In";
signInOptions.addEventListener("click",()=>{
SignInComponent();
});

menuDiv.appendChild(signInOptions);

var signOutOptions = document.createElement("span");
signOutOptions.setAttribute("style","cursor:pointer; color:black;padding:5px 20px;background:white;")
signOutOptions.innerHTML="Sign up";
signOutOptions.addEventListener("click",()=>{
SignUpComponent();
});
menuDiv.appendChild(signOutOptions);
}

// save data into product list...

function saveProductInToCart(product){
    var currentUser =  sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));

    let currentUserCartItems = cartList.find((obj)=>{return obj.email == currentUser});
    

    if(currentUserCartItems){
       var currentUserItemList = currentUserCartItems.cartItems;
    //    console.log(currentUserItemList);
        var productObj = currentUserItemList.find((obj)=>{
            return obj.id==product.id});
            
    if(productObj){
        window.alert("Product is already added into the cart");
    }
    else{
        var index = cartList.findIndex((obj)=>{
            return obj.email==currentUser
            
        });
        // console.log(index);
        product.qty = 1;
        currentUserCartItems.cartItems.push(product);
        cartList.splice(index,1);
        cartList.push(currentUserCartItems);
        localStorage.setItem("cartList",JSON.stringify(cartList));
        window.alert("product added sucessfully");


    }
 }
   else{
    var obj = {email:currentUser, cartItems:[]};
    product.qty=1;
    obj.cartItems.push(product);
    cartList.push(obj);
    localStorage.setItem("cartList",JSON.stringify(cartList));
    window.alert("Product added successfully");
   }
}



function updateQty(productId,index){
    var qty = document.querySelector("#qtyChange"+index).value;
    var total = document.querySelector("#total"+index);
 
    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    var currentUserCartList = cartList.find((obj)=>{return obj.email == currentUser});
    var cartItems = currentUserCartList.cartItems;
    
    var productIndex = cartItems.findIndex((obj)=>{return obj.id == productId});
    var product = cartItems[productIndex];
    product.qty = qty;

    cartItems.splice(productIndex,1);
    cartItems.splice(productIndex,0,product);

    currentUserCartList.cartItems = cartItems;

    var currentUserCartListIndex = cartList.findIndex((obj)=>{return obj.email == currentUser});
    cartList.splice(currentUserCartListIndex,1);
    cartList.splice(currentUserCartListIndex,0,currentUserCartList);
    localStorage.setItem("cartList",JSON.stringify(cartList));

    total.innerText = ""+(product.price*1 * qty);
    
    var totalBillLabel = document.querySelector("#totalBillLabel");
    totalBillLabel.innerHTML = "<p>Total Bill : "+getBillAmount()+"</p>";
}

function getBillAmount(){
    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    var currentUserCartList = cartList.find((obj)=>{return obj.email == currentUser});
    var cartItems = currentUserCartList.cartItems;
    var totalBill = 0;
    for(var product of cartItems){
        totalBill = totalBill + product.price*1 * product.qty*1;
    }
    return totalBill;
}

function formDetails() {
    var cartDiv = document.querySelector("#cart-container");
    cartDiv.innerHTML = "";


    var headingDiv = document.createElement("div");
        var heading = document.createElement("h1");
        heading.innerHTML="Billing Details";
        heading.setAttribute("style","font-size:40px;margin-bottom:30px;font-style:bold;");
        headingDiv.appendChild(heading);
        
        var formDiv = document.createElement("div");
        formDiv.setAttribute("style", "width: 70%; margin: 0 auto;");
        formDiv.appendChild(headingDiv);
        
        
        var personalDetailsHeading = document.createElement("h3");
        personalDetailsHeading.innerHTML = "Personal Details";
        formDiv.appendChild(personalDetailsHeading);
        
        var nameLabel = document.createElement("label");
        nameLabel.innerHTML = "Full Name:";
        var name = document.createElement("input");
        name.setAttribute("type", "text");
        name.setAttribute("placeholder", "Enter your full name");
        name.setAttribute("style", "width: 100%; margin-bottom: 10px;");
        
        var emailLabel = document.createElement("label");
        emailLabel.innerHTML = "Email:";
        var email = document.createElement("input");
        email.setAttribute("type", "email");
        email.setAttribute("placeholder", "Enter your email");
        email.setAttribute("style", "width: 100%; margin-bottom: 10px;");
        
        var phoneLabel = document.createElement("label");
        phoneLabel.innerHTML = "Phone Number:";
        var phoneNumber = document.createElement("input");
        phoneNumber.setAttribute("type", "tel");
        phoneNumber.setAttribute("placeholder", "Enter your phone number");
    phoneNumber.setAttribute("style", "width: 100%; margin-bottom: 10px;");

    var addressLabel = document.createElement("label");
    addressLabel.innerHTML = "Address:";
    var address = document.createElement("textarea");
    address.setAttribute("placeholder", "Enter your address");
    address.setAttribute("style", "width: 100%; margin-bottom: 10px;");
    
    var dobLabel = document.createElement("label");
    dobLabel.innerHTML = "Date of Birth:";
    var dob = document.createElement("input");
    dob.setAttribute("type", "date");
    dob.setAttribute("style", "width: 100%; margin-bottom: 10px;");
    
    
    formDiv.appendChild(nameLabel);
    formDiv.appendChild(name);
    formDiv.appendChild(emailLabel);
    formDiv.appendChild(email);
    formDiv.appendChild(phoneLabel);
    formDiv.appendChild(phoneNumber);
    formDiv.appendChild(dobLabel);
    formDiv.appendChild(dob);
    formDiv.appendChild(addressLabel);
    formDiv.appendChild(address);
    
    
    var paymentHeading = document.createElement("h2");
    paymentHeading.innerHTML = "Payment Method";
    formDiv.appendChild(paymentHeading);
    
    var codLabel = document.createElement("label");
    codLabel.innerHTML = "Cash on Delivery &nbsp; &nbsp;";
    var codCheckbox = document.createElement("input");
    codCheckbox.setAttribute("type", "checkbox");
    codCheckbox.setAttribute("id", "codCheckbox");
    
    formDiv.appendChild(codLabel);
    formDiv.appendChild(codCheckbox);

    
    var buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("style", "margin-top: 10px;");

    
    var submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("style", "padding: 10px 20px;background-color:black;color:white;");

    buttonDiv.appendChild(submitButton);
    formDiv.appendChild(buttonDiv);

    cartDiv.appendChild(formDiv);
}

function SearchProduct(){
    var keywords = document.querySelector("#searchKeyword").value;
    var productList = JSON.parse(localStorage.getItem("productList"));
    var filterData = productList.filter((product)=>{return product.title.toUpperCase().includes(keywords.toUpperCase())});
    
    document.querySelector("#cart-container").remove();
    if(filterData.length == 0)
      createCart(productList);
    else
      createCart(filterData);  
}