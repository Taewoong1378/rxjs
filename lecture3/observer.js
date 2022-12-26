import { from } from 'rxjs';
const observable$ = from([1, 2, 3, 4, 5]);

const observer = {
  next: console.log,
  error: (err) => console.error('발행중 오류', err),
  complete: () => console.log('발행물 완결'),
};

observable$.subscribe(observer);

// observable$.subscribe(
//   console.log,
//   (err) => console.error('발행중 오류', err),
//   (_) => console.log('발행물 완결')
// );
