

import { Observable, of, subscribeOn } from "rxjs"

/******
 * it is used for getting values out of the observable to operate on it
 * the of operator shows you how to turn  something you 
 * pass into it to an observable 
 * 
 * 
 * ******/




var observable$=of("teddy","is", "cool")



observable$.subscribe(
    
    {


        next: values => {
            /**
             * The `next` function is called every time the Observable emits a value.
             * 
             * @param {T} value - The value emitted by the Observable.
             * @returns {void}
             */
            console.log(values);
        },

        error:(err) =>{ console.log("error");
        },

        complete: ()=>{

            console.log("complete");

        }
        
        
}

)


/**
 * The `of` operator creates an Observable that emits a single value.
 *
 * <span class="informal">Just like `of` function in JavaScript.</span>
 *
 * <img src="./img/of.png" width="100%">
 *
 * This operator is useful for creating a simple Observable that emits only one
 * value, and then completes. It can be used for testing or for converting a
 * synchronous value into an Observable.
 *
 * ## Examples
 *
 * Emit only one value:
 * ```js
 * import { of } from 'rxjs';
 *
 * of(100).subscribe(x => console.log(x));
 * ```
 *
 * Convert a synchronous value into an Observable:
 * ```js
 * import { of } from 'rxjs';
 *
 * const numbers = [10, 20, 30, 40, 50];
 * const numbersObservable = of(...numbers);
 *
 * numbersObservable.subscribe(x => console.log(x));
 * ```
 *
 * @param {...T} values - Items emitted by the resulting Observable.
 * @return {Observable<T>} An Observable that emits the given `values`.
 */




function check(...args: any):Observable<string>{

    return new Observable(
        subscribe=>{
            for (let index = 0; index < args.length; index++) {
                subscribe.next(args[index])    
            }
            subscribe.complete()
        }
    
    )
}




check("should","f","go").subscribe(values=>console.log(values))