import { ajax } from 'rxjs/ajax';

const obs$ = ajax(`http://127.0.0.1:3000/people/1`);
obs$.subscribe((result) => console.log(result.response));
