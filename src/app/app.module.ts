import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PageQuemSomosComponent } from './page-quem-somos/page-quem-somos.component';
import { PageContatoComponent } from './page-contato/page-contato.component';
import { PageContatoModule } from './page-contato/page-contato.module';
import { PageVisaoComponent } from './page-visao/page-visao.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		AppComponent,
		PageQuemSomosComponent,
		PageContatoComponent,
		PageVisaoComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule,
		PageContatoModule,
		RouterModule.forRoot([

		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
