var inventors = [
    { name: 'Матвей', birth: '1643', death: '1727', good:'Да', love:'Да' },
    { name: 'Елизавета', birth: '1564', death: '1642', good:'Нет',love:'Нет'  },
    { name: 'Адам', birth: '1867', death: '1934', good:'Нет',love:'Да'  },
    { name: 'Альбус', birth: '1571', death: '1630', good:'Да',love:'Да'  },
    { name: 'Гарри', birth: '1473', death: '1543', good:'Да',love:'Да'  },
];
 
buildTable(inventors);

function buildTable(data)
{
    var table = document.getElementById('table');
    
    table.innerHTML = '';
    for(var i=0; i<data.length; i++)
    {
        var row = `<tr>
           <td>${data[i].name}</td>
           <td>${data[i].birth}</td>
           <td>${data[i].death}</td>
           <td>${data[i].good}</td>
           <td>${data[i].love}</td>
        </tr>`;
        table.innerHTML += row;
    }
}

var headers = document.getElementsByName('header');
headers.forEach(header => {
    header.addEventListener('click', (e)=>{
        let column = e.target.attributes[0].textContent;
        let order = e.target.attributes[1].textContent;
        let text = e.path[0].textContent;
        text = text.substring(0, text.length-1)
        if(order == 'descending')
        {
            e.target.attributes[1].textContent = 'ascending';
            inventors = inventors.sort((a, b) => a[column] > b[column] ? 1 : -1) 
            text += '&#9660';
        }
        else
        {
            e.target.attributes[1].textContent = 'descending';
            inventors = inventors.sort((a, b) => a[column] < b[column] ? 1 : -1)
            text += '&#9650';
        }
        e.path[0].innerHTML=text;
        buildTable(inventors);
    })
})

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', function(){
    var value = this.value
    var data = searchTable(value, inventors)
    buildTable(data)
    
})

function searchTable(value, data)
{
    var filteredData = [];
    for(var n = 0; n<data.length; n++)
    {
        
        var name = data[n].name.toLowerCase()
        if(name.includes(value.toLowerCase()))
        {   
            filteredData.push(data[n])
            console.log(data[n])
       
        }
    }
    
    console.log(filteredData)
    return filteredData
    
}