function getData(){
    let fname=$('#fname').val();//document.getElementById("fname").value;
    let email=$('#email').val();//document.getElementById("email").value;
    console.log(fname,email);
    }
    var data="abc";
    setTimeout(()=>{
           $.ajax({
                type: "GET",
                url: "https://jsonplaceholder.typicode.com/todos/1",
                dataType: "json",
    
                //if received a response from the server
                success: function( datas, textStatus, jqXHR) {
                console.log("datas",datas);
    
                },
                
            }); },1500);
            console.log("hello1");
    console.log("hello2");
    
               console.log("hello");
                          for(let i=0;i<=3000;i++){
               console.log("synchronous",i);
               }
    