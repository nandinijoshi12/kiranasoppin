export default function(context) {
    console.log(window);
    if(window.localStorage.getItem("shToken") === null)
    {
        context.redirect('/login')
    }
    else
    {
        return true;
    }
}