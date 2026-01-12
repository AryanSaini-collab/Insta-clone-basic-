const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "/instagram/assests/avatar-vangogh.jpg",
        post: "/instagram/assests/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "/instagram/assests/avatar-courbet.jpg",
        post: "/instagram/assests/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "/instagram/assests/avatar-ducreux.jpg",
        post: "/instagram/assests/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

likes=document.getElementById('no')
document.querySelector('.heart').addEventListener('click',function(){
    likes.innerHTML=`21,492 likes`

})


likes=document.getElementById('no1')
document.querySelector('.heart').addEventListener('click',function(){
    likes.innerHTML=`15,124 likes`

})


