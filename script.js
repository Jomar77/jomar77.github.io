const art = document.querySelector('.art');

document.querySelector('.art-container').addEventListener('mousemove', (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const moveX = (x - centerX) / 20;
    const moveY = (y - centerY) / 20;

    art.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

document.querySelector('.art-container').addEventListener('mouseleave', () => {
    art.style.transform = 'translate(0, 0)';
});

document.querySelector('.no').addEventListener('mouseover', function() {
  const button = this;
  const viewportWidth = 980;
  const viewportHeight = 700;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  const randomX = Math.floor(Math.random() * (viewportWidth - buttonWidth));
  const randomY = Math.floor(Math.random() * (viewportHeight - buttonHeight));

  // Ensure the button stays within the viewport
  button.style.left = `${Math.min(randomX, viewportWidth - buttonWidth)}px`;
  button.style.top = `${Math.min(randomY, viewportHeight - buttonHeight)}px`;
});

document.querySelector('.yes').addEventListener('click', function() {
    const questionElement = document.querySelector('.question h1');
    questionElement.textContent = 'Happy monthsary, baby girl! Thank you for sticking with me despite my kapalpakan and weakass traits. I pray you good things in life '
        + 'always. I`m still learning about you and is enjoying every little moment of it. Don`t worry kung hindi kita matiis sa ugali mo kasi wala yan sa para sa akin. I love you just the way you are <3.'
        + 'I miss you na kahit di wala pa tayo next week btw HAHAHHA. here`s another gift for you mal. Ngayon ko lang rin ginawa sana magustohan mo <33.';

    // Change the image
    art.style.backgroundImage = "url('image.png')"; // Replace with your new image path

    // Remove the "No" button
    const noButton = document.querySelector('.no');
    noButton.parentNode.removeChild(noButton);

    // Change the "Yes" button text to "Click Me"
    const yesButton = document.querySelector('.yes');
    yesButton.textContent = 'Click Me';

    yesButton.style.transform = 'translate(-350px, 150px)';
    // Change the layout
    document.querySelector('.container').classList.add('changed-layout');
    document.querySelector('.art-container').classList.add('changed-layout');
    document.querySelector('.question').classList.add('changed-layout');

    yesButton.addEventListener('click', function() {
      window.location.href = 'screen.html';
  });
});

