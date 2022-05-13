function parseChangelog(data)
{
    //console.log(data);
    parsed = data.split('##');

    for(i=1;i<parsed.length-1;i++)
    {
        //console.log(parsed[i]);
        //console.log("parse "+ i);
        temp=parsed[i+1].split('-');
        var paragraph = "";
        for(j=0;j<temp.length;j++)
        {
            if(temp[j] == "undefined"){
                
            }
            else
            {
                //console.log(temp[j].includes('#'));
                if(temp[j].includes('#'))
                {
                    paragraph+="<br></br>"+temp[j]+"<br></br>";
                }else
                {
                    paragraph+="-"+temp[j]+"<br></br>";
                }
                
            }
        }
        $("#accordion").append('<h3 style="font-family: var(--ff-primary);">Changelog'+parsed[i]+'</h3><div><p style="font-size: .8em; margin-bottom: .5em; line-height:.8; font-family: var(--ff-primary);">'+paragraph+'</p></div>');
        //console.log(paragraph);
        i++;
    }
    
    
    $("#accordion").accordion({active: false,collapsible: true,heightStyle: "content"});
    $("#accordion").accordion("refresh");

}