const container1 = document.querySelector('.container901');
// בחירת כל הכיסאות הפנויים 
const seats1 = document.querySelectorAll('.row90 .seat45:not(.occupied1)');
const count1 = document.getElementById('count988');
const price1 = document.getElementById('price988');

// פונקציה לחישוב מחיר הכרטיסים לפי כמות המושבים שנבחרים
const updateCount1 = () => {
  const selectedSeats1 = document.querySelectorAll('.row90 .selected1');

  const seatsIndex1 = [...selectedSeats1].map(seat => [...seats].indexOf(seat));

 
  const selectedSeatsCount1 = selectedSeats1.length;

  count1.innerText = selectedSeatsCount1;
  price1.innerText = selectedSeatsCount1 * 120;
};
// המטרה של הקוד בלמטה כדי שהלקוח כאר הוא לוחץ בכיסא הכפתור תהיה לחיצה ועובדת
container1.addEventListener('click', e => {
  if (e.target.classList.contains('seat45') && !e.target.classList.contains('occupied1'))
   {
    e.target.classList.toggle('selected1');

    updateCount1();
  }
});

