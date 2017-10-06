import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { ContatoModule } from './contato/contato.module';
import { QuemSomosModule } from './quem-somos/quem-somos.module';
import { NossaVisaoModule } from './nossa-visao/nossa-visao.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ContatoModule,
		QuemSomosModule,
		NossaVisaoModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})


export class AppModule { }
