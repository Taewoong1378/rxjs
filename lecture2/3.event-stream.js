const { fromEvent } = rxjs;

const obs1$ = fromEvent(document, 'click');
const obs2$ = fromEvent(document.getElementById('myInput'), 'keypress');

obs1$.subscribe((item) => console.log(item));
obs2$.subscribe((item) => console.log(item));
