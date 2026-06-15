import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Iator } from '../model/ator';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController
  ) { }

  async exibirAlertaFavorito(ator: Iator) {
    const alert = await this.alertController.create({

      header: "Meus Favoritos",
      message: "Deseja realmente favoritar o ator?",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            ator.favorito = false;
          }
        }, {
          text: 'Sim, favoritar',
          handler: () => {
            ator.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'ator adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  listaatores: Iator[] = [
{
  nome: 'Robert Downey Jr.',
  idade: 61,
  nota: 10,
  foto: 'https://media.themoviedb.org/t/p/w300_and_h450_face/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg',
  generos: ['Ação', 'Ficção Científica', 'Drama'],
  pagina: '/robert-downey-jr',
  favorito: false
},
{
  nome: 'Tom Holland',
  idade: 30,
  nota: 9,
  foto: 'https://media.themoviedb.org/t/p/w300_and_h450_face/xKBAaPIa1c7tzZD3Y0MhBLv4hPE.jpg',
  generos: ['Ação', 'Aventura', 'Drama'],
  pagina: '/tom-holland',
  favorito: false
},
{
  nome: 'Scarlett Johansson',
  idade: 41,
  nota: 9,
  foto: 'https://media.themoviedb.org/t/p/w300_and_h450_face/xCr7ahGmwxQEjYNDXR09QfXWgEz.jpg',
  generos: ['Ação', 'Drama', 'Ficção Científica'],
  pagina: '/scarlett-johansson',
  favorito: false
},
{
  nome: 'Keanu Reeves',
  idade: 62,
  nota: 10,
  foto: 'https://media.themoviedb.org/t/p/w300_and_h450_face/kEoUZKEG7dzbCESDjd0CKAN1r0n.jpg',
  generos: ['Ação', 'Ficção Científica', 'Suspense'],
  pagina: '/keanu-reeves',
  favorito: false
},
{
  nome: 'Margot Robbie',
  idade: 36,
  nota: 8,
  foto: 'https://media.themoviedb.org/t/p/w300_and_h450_face/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg',
  generos: ['Comédia', 'Drama', 'Ação'],
  pagina: '/margot-robbie',
  favorito: false
}
  ]

  exibirator(ator: Iator) {
    const navigationExtras: NavigationExtras = { state: { paramator: ator } };
    this.router.navigate(['ator-detalhe'], navigationExtras)
  }

}
