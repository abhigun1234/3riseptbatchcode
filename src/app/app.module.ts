import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { MypipePipe } from './mypipe.pipe';
import { CountlengthPipe } from './countlength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    MypipePipe,
    CountlengthPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
