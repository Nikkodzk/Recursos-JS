function deleteOneItem(array, item){
  if(array.includes(item)){
    let res = '';
    array.forEach(e => {
      if(e !== item ) res += e;
    })
    return res.split('');     
  }else{
    return 0;
  }
}
