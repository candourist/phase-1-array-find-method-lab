// code your solution here


function superbowlWin(record) {
    
    const win = record.find(
    //silly mistake, I didn't add "const".
        function (obj)
        //another silly mistake is I forgot to add (obj)
        {
    
            return obj.result === "W"; }
            //my mistake is I added ";" here... I fixed it.
    )
    
    return win ? win.year : undefined;

} 