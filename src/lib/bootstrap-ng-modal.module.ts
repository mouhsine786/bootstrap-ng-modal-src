import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapNgModalComponent } from './bootstrap-ng-modal.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [BootstrapNgModalComponent],
	exports: [BootstrapNgModalComponent]
})
export class BootstrapNgModalModule { }
