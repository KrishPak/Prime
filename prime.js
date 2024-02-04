
function ok(){
    let a=parseInt(document.getElementById("yes").value)
    let b=parseInt(document.getElementById("oa").value)
    
    for(let i=a;i<=b;i++){
    for(let j=2;j<=i-1;j++){
    if(i%j==0){
    document.write(i," ")
    break
    }
    }
    }
    }
    
    function no(){
    let a=parseInt(document.getElementById("yes").value)
    let b=parseInt(document.getElementById("oa").value)
    let c=0
    for(i=a;i<=b;i++){
        for(j=2;j<=i-1;j++){
            alert(j)
            if(i%j==0){
                c++
                break
            }
                           }
        }
        if(c==0){
        document.write(i)
        }
    }