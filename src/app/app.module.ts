import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { CreateComponent } from './create/create.component';
import { NavibarComponent } from './navibar/navibar.component';
import { PostComponent } from './post/post.component';
import { EditComponent } from './edit/edit.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'create', component: CreateComponent },
  { path: 'posts', component: PostComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    CreateComponent,
    NavibarComponent,
    PostComponent,
    EditComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
