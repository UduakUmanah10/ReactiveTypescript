import {from } from 'rxjs';
import { filter} from 'rxjs/operators';



const  observable$ = from([1,2,3,4,5,6,7,8,9])

.pipe(

    filter(
        num => num === 2
    )
)


const subscribed = observable$.subscribe(value =>console.log(value))

