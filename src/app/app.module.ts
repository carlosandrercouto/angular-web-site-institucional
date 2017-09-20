import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageQuemSomosComponent } from './page-quem-somos/page-quem-somos.component';
import { PageContatoComponent } from './page-contato/page-contato.component';
import { PageVisaoComponent } from './page-visao/page-visao.component';

@NgModule({
	declarations: [
		AppComponent,
		PageQuemSomosComponent,
		PageContatoComponent,
		PageVisaoComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
