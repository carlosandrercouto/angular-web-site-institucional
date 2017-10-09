import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{path: 'contato', component: ContatoComponent}
		])
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule{

}
