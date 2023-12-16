import { Observable } from 'rxjs';

/**
 * the observable lifecycle methods are defined in as
 * subscribe()
 * next()
 * complete()
 * error()
 * unsubscribe()
 * 
 * **/


let observable$ = new  Observable(
    
    (subscriber)=>{
        subscriber.next("hello world");
        subscriber.complete()
        subscriber.error()
    }

 )



    let observer = {
        next:(value:any)=>{
                        console.log(value)

        },

        complete: ()=>{
            console.log("complete")
        },

        error: ()=>{
            console.log("this is broken")
        },
    }



 observable$.subscribe(observer);
 