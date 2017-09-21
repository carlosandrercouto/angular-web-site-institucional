import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuemSomosComponent } from './quem-somos.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: 'quem-somos', component: QuemSomosComponent
			}
		])
	],
	declarations: [
		QuemSomosComponent
	],
	exports: [
		QuemSomosComponent
	]
})
export class QuemSomosModule { }
