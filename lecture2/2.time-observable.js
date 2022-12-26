import { interval, timer } from 'rxjs';

const obs1$ = interval(1000); // setInterval
const obs2$ = timer(3000); // setTimeout

// 1번
obs1$.subscribe((item) => console.log(`interval: ${item}`));
// 2번
// obs2$.subscribe((item) => console.log(`timer: ${item}`));
