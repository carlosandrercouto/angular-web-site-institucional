import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContatoComponent } from './page-contato.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild({
			{path: 'page-contato', component: PageContatoComponent }
		})
	],
	declarations: []
})
export class PageContatoModule { }
