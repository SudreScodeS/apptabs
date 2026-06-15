import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Iserie } from '../model/serie';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController
  ) { }

  async exibirAlertaFavorito(serie: Iserie) {
    const alert = await this.alertController.create({

      header: "Meus Favoritos",
      message: "Deseja realmente favoritar o serie?",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            serie.favorito = false;
          }
        }, {
          text: 'Sim, favoritar',
          handler: () => {
            serie.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'serie adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  listaseries: Iserie[] = [
{
  nome: 'Breaking Bad (2008)',
  lancamento: '20/01/2008',
  episodios: '62 episódios',
  classificacao: 10,
  cartaz: 'https://www.themoviedb.org/tv/1396-breaking-bad?language=pt-BR',
  generos: ['Drama', 'Crime', 'Suspense'],
  pagina: '/breaking-bad',
  favorito: false
},
{
  nome: 'Stranger Things (2016)',
  lancamento: '15/07/2016',
  episodios: '34 episódios',
  classificacao: 9,
  cartaz: 'https://www.themoviedb.org/tv/66732-stranger-things?language=pt-BR',
  generos: ['Ficção Científica', 'Drama', 'Mistério'],
  pagina: '/stranger-things',
  favorito: false
},
{
  nome: 'The Last of Us (2023)',
  lancamento: '15/01/2023',
  episodios: '9 episódios',
  classificacao: 9,
  cartaz: 'https://www.themoviedb.org/tv/100088-the-last-of-us?language=pt-BR',
  generos: ['Drama', 'Ação', 'Aventura'],
  pagina: '/the-last-of-us',
  favorito: false
},
{
  nome: 'Dark (2017)',
  lancamento: '01/12/2017',
  episodios: '26 episódios',
  classificacao: 8,
  cartaz: 'https://www.themoviedb.org/tv/70523-dark?language=pt-BR',
  generos: ['Ficção Científica', 'Mistério', 'Drama'],
  pagina: '/dark',
  favorito: false
},
{
  nome: 'The Boys (2019)',
  lancamento: '26/07/2019',
  episodios: '32 episódios',
  classificacao: 8,
  cartaz: 'https://www.themoviedb.org/tv/76479-the-boys?language=pt-BR',
  generos: ['Ação', 'Comédia', 'Ficção Científica'],
  pagina: '/the-boys',
  favorito: false
}
  ]

  exibirserie(serie: Iserie) {
    const navigationExtras: NavigationExtras = { state: { paramserie: serie } };
    this.router.navigate(['serie-detalhe'], navigationExtras)
  }

}
