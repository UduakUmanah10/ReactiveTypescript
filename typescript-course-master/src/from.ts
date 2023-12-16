import { Observable, from } from "rxjs";

/**
 * The selected code is an example of using the from method in RxJS. 
 * The from method is used to convert a non-iterable value into an Observable.
 *  In this case, the from method is used to convert a Promise into an Observable.
 * The code snippet shows how to create an Observable from an array using the from method.
 *  The from method takes an array as an argument and returns an Observable that emits each element of the array.
 *  The code then subscribes to the Observable and logs each emitted value to the console.
 * The from method is also used to convert a Promise into an Observable. 
 * In this case, the Promise is resolved and the resolved value is emitted by the Observable.
 *  The code then subscribes to the Observable and logs the resolved value to the console.
 * Overall, the from method is a useful tool in RxJS for converting non-iterable values into Observables.
 */


from( ['a', 'b', 'c', 'd', 'e',] ).subscribe(
    
    {

    next: (value)=>{

        console.log(value);

    },

    complete: ()=>{

        console.log('complete');
    }


}


)



const promise  = new Promise(

    (resolve, reject)=>{

        resolve("Resolved");
    }

)




console.log(promise)


const observblePromisis$ =  from(promise)

observblePromisis$.subscribe(

    {


        next: (value)=>{
            console.log(value)
        }




    }



)