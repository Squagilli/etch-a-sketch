const container = document.querySelector('#container');

let grid = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 
'g10', 'g11', 'g12', 'g13', 'g14', 'g15', 'g16', 'g17', 'g18',
 'g19', 'g20', 'g21', 'g22', 'g23', 'g24', 'g25', 'g26', 'g27',
  'g28', 'g29', 'g30', 'g31', 'g32'];



grid.textContent = 'bruh';

for (i = 0; i < grid.length; i++) {
    container.append(grid);
}