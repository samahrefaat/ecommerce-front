import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from 'rxjs';
import { AccessoriesComponent } from './main-components/accessories/accessories.component';
import { HomeComponent } from './main-components/home/home.component';
import { JewelleryComponent } from './main-components/jewellery/jewellery.component';
import { KidsComponent } from './main-components/kids/kids.component';
import { MenComponent } from './main-components/men/men.component';
import { WomenComponent } from './main-components/women/women.component';


const routes: Routes = [
  {
    path:'home',
   component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home', pathMatch:'full'
  },
  {
path:'',
loadChildren: () => import('./views/auth/auth.module').then(a => a.AuthModule)
  },
  {
    path:'',
    loadChildren: () => import('./views/user/user.module').then(a => a.UserModule)
     
  },
  {
    path:'women',
    component: WomenComponent
  },
  {
    path:'men',
    component: MenComponent
  },
  {
    path:'kids',
    component: KidsComponent
  },
  {
    path:'accessories',
    component : AccessoriesComponent
  },
  {
    path:'jewellery',
    component: JewelleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
