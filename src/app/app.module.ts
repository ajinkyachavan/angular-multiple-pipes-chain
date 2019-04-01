import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SortPipe } from './search/sort.pipe';
import { SearchDirective } from './search/search.directive';
import { InputDirectiveDirective } from './search/input-directive.directive';
import { AsyncObsFilterPipe } from './search/async-obs-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SortPipe,
    SearchDirective,
    InputDirectiveDirective,
    AsyncObsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SortPipe, AsyncObsFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
