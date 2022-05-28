function sendRequest (name, phone, address, goods, sum) {

  let data = {client: {name, phone}, order: {address, sum}, goods: [title, count]};
    
  let countOfGoods = goods.length;
  
  for (let i = 0; i < countOfGoods; i += 1) { 
    data.goods.push ({title: goods[i].title, count: goods[i].count});
    }
  let jsonData = JSON.stringify({data: data}); 
  return jsonData;
  }
  


//  data.goods.push ({title: goods[i].title, count: goods[i].count});       
   // let jsonData = JSON.stringify({data: data});
  
  // return jsonData;};
  

  
