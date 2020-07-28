import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VotarComponent } from "./pages/votar/votar.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { titulo: 'Inicio' } },
  { path: 'votar', component: VotarComponent, data: { titulo: 'Votar' } },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }