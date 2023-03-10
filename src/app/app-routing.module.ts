import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieComplexComponent } from './movie-complex/movie-complex.component';
import { MyPurchasesBackupComponent } from './my-purchases-backup/my-purchases-backup.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { ChildView1Component } from './child-view1/child-view1.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'movies', component: MoviesComponent, data: { text: 'Movies' } },
  { path: 'movie-complex', component: MovieComplexComponent, data: { text: 'Movie Complex' } },
  { path: 'my-purchases-backup', component: MyPurchasesBackupComponent, data: { text: 'My Purchases - Backup' } },
  { path: 'my-purchases', component: MyPurchasesComponent, data: { text: 'My Purchases' } },
  { path: 'child-view', component: ChildViewComponent, data: { text: 'Child View' } },
  { path: 'child-view1', component: ChildView1Component, data: { text: 'Child View 1' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
