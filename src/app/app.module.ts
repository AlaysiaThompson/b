import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { IgxButtonModule, IgxRippleModule, IgxTabsModule, IgxCardModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxDatePickerModule, IgxListModule, IgxAvatarModule, IgxNavigationDrawerModule, IgxToggleModule, IgxDropDownModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MovieComplexComponent } from './movie-complex/movie-complex.component';
import { MyPurchasesBackupComponent } from './my-purchases-backup/my-purchases-backup.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { ChildView1Component } from './child-view1/child-view1.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComplexComponent,
    MyPurchasesBackupComponent,
    MyPurchasesComponent,
    ChildViewComponent,
    ChildView1Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxTabsModule,
    IgxCardModule,
    IgxIconModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxDatePickerModule,
    IgxListModule,
    IgxAvatarModule,
    FormsModule,
    IgxNavigationDrawerModule,
    IgxToggleModule,
    IgxDropDownModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
