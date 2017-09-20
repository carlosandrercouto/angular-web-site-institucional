import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageQuemSomosComponent } from './page-quem-somos/page-quem-somos.component';

@NgModule({
	declarations: [
		AppComponent,
		PageQuemSomosComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
