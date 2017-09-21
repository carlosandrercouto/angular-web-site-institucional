import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContatoComponent } from './contato.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: 'contato', component: ContatoComponent
			}
		])
	],
	declarations: [
		ContatoComponent
	],
	exports: [
		ContatoComponent
	]
})
export class ContatoModule { }
