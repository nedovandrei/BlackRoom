import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { GalleryComponent } from "./gallery/gallery.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "gallery", component: GalleryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
