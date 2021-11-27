
var table=document.getElementById("myTable");

let tablegrocery=document.getElementById("tablegrocery");
let th=document.querySelectorAll("th");



function ajax(){
    gorcery.style.display="none";




    var xhttp=new XMLHttpRequest();
    // event listener
    xhttp.onreadystatechange=function(){
        // condition
        if(this.readyState==4&& this.status==200){
    // for converting JSON format to normal         
    
    var response=JSON.parse(this.responseText); 
    // console.log(response);
    var output="";
    output+=`<tr>`
    output+=`<th>Status</th>`;
    output+=`<th>Check????</th>`;
    ;
        output+=`<tr>`
    for(var i=0;i<response.length;i++){
       
    if(response[i].completed==true){
        output+=`<tr style="background-color: white;">`;
        
     output+=`<td ><input type="checkbox" class="largerCheckbox" id="inline" disabled="disabled" checked="true"></td>`;
     
     output+=`<td>${response[i].title}</td>`;
     output+=`<tr>`;
    }
     else{
        output+=`<tr style="background-color:pink;">`;
        output+=`<td class="cell" ><input type="checkbox" class="cells"></td>`;
   
    
    output+=`<td>${response[i].title}</td>`;
   
    output+=`<tr>`;
    }
    
    


       
    output+=`</tr>`;
    }
      table.innerHTML=output;
      
      
      
      $(document).ready(function(){
        var counter=0;
        console.log(counter);
        $(".cell").on('change', ':checkbox', function() {
        const promise=new Promise(function(resolve,reject){
            console.log(counter);
            counter = $(':checkbox:checked').length-90;
            $('.cells:checkbox:checked').parent().parent().css("background-color", "#E0FFFF");
          $('.cells:checkbox:not(:checked)').parent().parent().css("background-color", "pink");
            console.log(counter);
        if(counter>=5){
          
            $('.cells:checkbox:not(:checked)').attr("disabled", "disabled");
             resolve();
        }
         
        })
        promise
   .then(function()
   {
       console.log(counter);
       alert("Congrats! 5 Tasks have been successfully completed")});
   


    });

});

    

}


    }

     
    
xhttp.open("GET","todo.json",true);
xhttp.send();


}