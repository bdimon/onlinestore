import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: '/aboutus', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
