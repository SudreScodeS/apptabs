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
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_face/4nW5X9iBrMlHMDcTsEOQWXKu3TZ.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores Ultimato (2019)',
      lancamento: '25/04/2019',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg',
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
