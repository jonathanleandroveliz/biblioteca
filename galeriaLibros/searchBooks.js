var app = angular.module('libreriaApp', []);
app.controller('LibreriaController', function ($scope) {
  $scope.libros = [
    {
      titulo: 'Marx',
      descripcion: 'Descripción breve del libro 1...',
      imagen: './img/marx.jpg',
      enlace: 'enlace_libro1.pdf'
    },
    {
      titulo: 'Harry Potter Y la Piedra Filosofal',
      descripcion: 'Descripción breve del libro 2...',
      imagen: './img/harrypiedrafilosofal.jpg',
      enlace: 'enlace_libro2.pdf'
    },
    {
      titulo: 'Harry Potter Caliz de Fuego',
      descripcion: 'Descripción breve del libro 2...',
      imagen: './img/harrypotter.jpg',
      enlace: 'https://www.w3schools.com/angular/ng_ng-href.asp'
    },
    {
      titulo: 'Maquiavelo',
      descripcion: 'Descripción breve del libro 2...',
      imagen: './img/maquiavelo.jpg',
      enlace: 'enlace_libro2.pdf'
    },
    {
      titulo: 'Adam Smith',
      descripcion: 'Descripción breve del libro 2...',
      imagen: './img/adam.jpg',
      enlace: 'enlace_libro2.pdf'
    }
  ];

});
