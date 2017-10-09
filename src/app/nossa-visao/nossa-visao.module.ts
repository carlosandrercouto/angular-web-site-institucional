import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NossaVisaoRoutingModule } from './nossa-visao-routing.module';
import { NossaVisaoComponent } from './nossa-visao.component';

@NgModule({
	imports: [
		CommonModule,
		NossaVisaoRoutingModule
	],
	declarations: [
		NossaVisaoComponent
	],
	exports: [
		NossaVisaoComponent
	]
})
export class NossaVisaoModule { }
