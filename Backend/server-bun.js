import {serve} from 'bun'
serve({
    fetch(request){
        const url = new URL(request.url);
        if (url.pathname === '/') {
            return new Response(`Hello Ice Tea`,{status:200})
        }else if (url.pathname === '/icetea') {
            return new Response(`Hello Ice Tea, from LOkI`,{status:200})
        }else{
            return new Response('404 nhi mil rha hai',{status:404})
        }
    },
    port:3000,
    hostname:'127.0.0.1'
})