import { mergeMap, pluck, range, retry, toArray } from 'rxjs';
import { ajax } from 'rxjs/ajax';

range(1, 20)
  .pipe(
    mergeMap(
      (index) =>
        ajax(`http://127.0.0.1:3000/people/quarter-error/${index}`).pipe(
          pluck('response', 'first_name'),
          retry(3)
        ),
      4
    ),
    toArray()
  )
  .subscribe(console.log);
