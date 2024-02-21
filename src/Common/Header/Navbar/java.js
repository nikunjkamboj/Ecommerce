var arr=['red','blue','green','orange'];
        var i=0
        function col(){
            document.querySelector("#blink").style.color=arr[i]
           
            i++
            if(i>3){
                i=0
            }
         
        }
        setInterval(col,200)