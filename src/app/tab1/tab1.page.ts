import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { IFilme } from '../model/Filme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController
  ) { }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: "Meus Favoritos",
      message: "Deseja realmente favoritar o filme?",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            filme.favorito = false;
          }
        }, {
          text: 'Sim, favoritar',
          handler: () => {
            filme.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/movie/460465-mortal-kombat?language=pt-BR#',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores Ultimato (2019)',
      lancamento: '25/04/2019',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/movie/299534-avengers-endgame?language=pt-BR#',
      generos: ['Ação', 'Ficção cientifica', 'Aventura'],
      pagina: '/avengers',
      favorito: false
    }
  ]

  exibirFilme(filme: IFilme) {
    const navigationExtras: NavigationExtras = { state: { paramFilme: filme } };
    this.router.navigate(['filme-detalhe'], navigationExtras)
  }
}
