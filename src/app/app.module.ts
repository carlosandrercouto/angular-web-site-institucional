import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NossaVisaoComponent } from './nossa-visao/nossa-visao.component';

import { ContatoModule } from './contato/contato.module';
import { QuemSomosModule } from './quem-somos/quem-somos.module';

@NgModule({
	declarations: [
		AppComponent,
		NossaVisaoComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule,
		ContatoModule,
		QuemSomosModule,
		RouterModule.forRoot([

		])
	],
	providers: [],
	bootstrap: [AppComponent]
})


export class AppModule { }
