const commentload=()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => displayComment(json))
}
commentload();

const displayComment = comments =>
{
    console.log(comments)
    const commentsdiv = document.getElementById('comment-element');
    for (const comment of comments)
    {       
        
            const p = document.createElement('p');
        p.textContent = ` Body:${ comment.body } , <h1>name:${comment.name}</h1>
            `; 
        commentsdiv.appendChild(p);
        
    }
}