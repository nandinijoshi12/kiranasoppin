export default function(context) {
    console.log(window);
    if(window.localStorage.getItem("shToken") != null)
    {
        context.redirect('/')
    }
    else
    {
        context.redirect('/login')
    }
}