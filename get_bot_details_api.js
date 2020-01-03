exports.handler =(event,context,callback) => {
   const type=event.type;
   if(type==='all'){
      callback(null,'ALL DATA') ;
   }else if(type==='single'){
       callback(null,'Single Data');
       
   }else{
       callback(null,'Hello from lamda');
   }
};
