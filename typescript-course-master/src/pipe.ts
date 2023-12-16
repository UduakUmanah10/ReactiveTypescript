import { Observable, map, from } from "rxjs";

/*****
 * 
 * 
 * . In RxJS, the pipe operator is used to chain together multiple operators to transform the input Observable 
 * into the desired output Observable.
 * 
 * 

 * 
 * ***/


const observable$ = from([12,13,14,15,16 ,17,18,19,20])
.pipe(
    map(
        (val:any)=> val * 2
    
    )
)


observable$.subscribe(value=>{console.log(value)})
