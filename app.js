// ---- ---- Const ---- ---- //
const stars = document.querySelectorAll('.stars i');

// ---- ---- Stars ---- ---- //
stars.forEach((star, index1) => {
  star.addEventListener('click', () => {
    console.log(index1);
    stars.forEach((star, index2) => {
      console.log(index2);
      // ---- ---- Active Star ---- ---- //
      index1 >= index2
        ? star.classList.add('active')
        : star.classList.remove('active');
    });
  });
});
