import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { NossaVisaoComponent } from './nossa-visao/nossa-visao.component';

import { ContatoModule } from './contato/contato.module';

@NgModule({
	declarations: [
		AppComponent,
		QuemSomosComponent,
		NossaVisaoComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule,
		ContatoModule,
		RouterModule.forRoot([

		])
	],
	providers: [],
	bootstrap: [AppComponent]
})


export class AppModule { }
