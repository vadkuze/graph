import { NgModule } from '@angular/core';


import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterseptorService } from './shared/fake-backend-interseptor';


@NgModule({
  imports:      [ SharedModule, HttpClientModule, HomeModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterseptorService, multi: true}
    ]
})
export class AppModule { }
