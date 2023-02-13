const container = document.querySelector('.container');
// בחירת כל הכיסאות הפנויים 
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const price = document.getElementById('price');

// פונקציה לחישוב מחיר הכרטיסים לפי כמות המושבים שנבחרים
const updateCount = () => {
  const selectedSeats = document.querySelectorAll('.row .selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  price.innerText = selectedSeatsCount * 55;
 
  
};
// המטרה של הקוד בלמטה כדי שהלקוח כאר הוא לוחץ בכיסא הכפתור תהיה לחיצה ועובדת
container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
   {
    e.target.classList.toggle('selected');

    updateCount();
    
    
  }

  
}); 









