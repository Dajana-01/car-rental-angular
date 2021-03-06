import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllCarsComponent} from './model/all-cars/all-cars.component';
import {ManageComponent} from './model/all-cars/manage/manage.component';
import {HomePageComponent} from './model/home-page/home-page.component';
import {ClientComponent} from './model/client/client.component';
import {BrandComponent} from './model/brand/brand.component';
import {BrandManageComponent} from './model/brand/brand-manage/brand-manage.component';
import {ReservationComponent} from './model/reservation/reservation.component';
import {ReservationManageComponent} from './model/reservation/reservation-manage/reservation-manage.component';
import {BannerComponent} from './model/banner/banner.component';
import {BannerManageComponent} from './model/banner/banner-manage/banner-manage.component';
import { BlogComponent } from './model/blog/blog.component';
import { BlogManageComponent } from './model/blog/blog-manage/blog-manage.component';
import {CommentComponent} from './model/comment/comment.component';
import {CommentManageComponent} from './model/comment/comment-manage/comment-manage.component';


const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'cars', component: AllCarsComponent},
  {path: 'cars/manage', component: ManageComponent},
  {path: 'cars/manage/:id', component: ManageComponent},
  {path: 'clients', component: ClientComponent},
  {path: 'brands', component: BrandComponent},
  {path: 'brands/manage', component: BrandManageComponent},
  {path: 'brands/manage/:id', component: BrandManageComponent},
  {path: 'reservations', component: ReservationComponent},
  {path: 'reservations/manage', component: ReservationManageComponent},
  {path: 'banners', component: BannerComponent},
  {path: 'banners/manage', component: BannerManageComponent},
  {path: 'banners/manage/:id', component: BannerManageComponent},
  {path: 'blogs', component: BlogComponent},
  {path: 'blogs/manage', component: BlogManageComponent},
  {path: 'blogs/manage/:id', component: BlogManageComponent},
  {path: 'comments', component: CommentComponent},
  {path: 'comments/manage', component: CommentManageComponent},
  {path: 'comments/manage/:id', component: CommentManageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
