var arr= [
    {dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D"
    },
    {dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHwxfDB8fHww",
    story:"https://images.unsplash.com/photo-1517246375798-77649c539a8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxtb2RlbHxlbnwwfDF8MHx8fDA%3D"
    },
    {dp:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
    story:"https://images.unsplash.com/photo-1613763968264-444a4909b1fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxtb2RlbHxlbnwwfDF8MHx8fDA%3D"
    },
    {dp:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
    story:"https://images.unsplash.com/photo-1523260578934-e9318da58c8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxtb2RlbHxlbnwwfDF8MHx8fDA%3D"
    },
    {dp:"https://images.unsplash.com/photo-1534679949574-9c91880cf453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
    story:"https://images.unsplash.com/photo-1596602549485-90a066ad2f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxtb2RlbHxlbnwwfDF8MHx8fDA%3D"
    }







]

var storiyan =document.querySelector("#storiyan")
var clutter=""
arr.forEach(function(elem,id){

    clutter += ` <div class="story">
    <img id="${id}" src="${elem.dp}" alt="">
</div>`
    
})

storiyan.innerHTML=clutter

storiyan.addEventListener("click",function(dets){

    document.querySelector("#full").style.display="block"
    document.querySelector("#full").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full").style.display="none"

    },3000)
});