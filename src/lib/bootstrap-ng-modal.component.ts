import { Component, OnInit } from '@angular/core';
import { BootstrapNgModalService } from './bootstrap-ng-modal.service';

@Component({
	selector: 'bootstrap-ng-modal',
	template: '<ng-content></ng-content>',
	styles: []
})
export class BootstrapNgModalComponent implements OnInit {

	component;

	constructor(private modalService: BootstrapNgModalService) { }

	ngOnInit() {
		let self = this;
		this.modalService.onOpen.subscribe(option => {
			self.component = option.component;
		})
	}

}