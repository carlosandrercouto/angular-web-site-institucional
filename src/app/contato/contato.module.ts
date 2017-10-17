import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato-routing.Module';

@NgModule({
	imports: [
		CommonModule,
		ContatoRoutingModule,
	],
	declarations: [
		ContatoComponent
	],
	exports: [
		ContatoComponent
	]
})
export class ContatoModule { }
