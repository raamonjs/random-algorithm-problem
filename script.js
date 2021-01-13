document.getElementById('submit').addEventListener('click', draw);

function drawTriangle(height) {
  let value = '';
  for (let i = 1; i <= height; i++) {
    value += '<p>';
    for (let j = 0; j < height + i; j++) {
      if (j <= height - i) {
        value += '_';
      } else {
        value += '*';
      }
    }
    value += '</p>';
  }
  return value;
}

function drawDiamond(height) {
  let value = drawTriangle(height);
  for (let i = 1; i < height; i++) {
    value += '<p>';
    // subtract 1 to distance everytime you go down a row
    for (let j = 0; j < height * 2 - i; j++) {
      // spaces for row is equal to i
      if (j <= i) {
        value += '_';
      } else {
        value += '*';
      }
    }
    value += '</p>';
  }
  return value;
}

// 12345*
// 1234***
// 123*****
// 12*******
// 1*********
// 12*******
// 123*****
// 1234***
// 12345*

function draw(e) {
  let isTriangle = document.getElementById('shapes').value === 'triangle';
  let value;
  const height = Number(document.getElementById('height').value);
  if (isTriangle) {
    value = drawTriangle(height);
  } else {
    value = drawDiamond(height);
  }

  document.getElementById('result').innerHTML = value;
  e.preventDefault();
}
