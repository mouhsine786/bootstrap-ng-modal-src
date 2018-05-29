import { Injectable, EventEmitter, Output } from '@angular/core';
declare var $: any;


@Injectable({
	providedIn: 'root'
})
export class BootstrapNgModalService {

	modalId: string;
	onCloseEvent;
	onCancelEvent;

	@Output() onOpen: EventEmitter<any> = new EventEmitter();

	constructor() { }

	open(options, onCloseEvent?, onCancelEvent?) {
		if (options && Object.keys(options).length > 0) {
			this.modalId = '#' + options.modalId;

			let modalOptions = { ...options };
			delete modalOptions.modalId;

			setTimeout(() => $(this.modalId).modal(modalOptions), 0);
			this.onOpen.emit(options);
		}

		if (onCloseEvent)
			this.onCloseEvent = onCloseEvent;
		else
			this.onCloseEvent = null;

		if (onCancelEvent)
			this.onCancelEvent = onCancelEvent;
		else
			this.onCancelEvent = null;
	}

	cancel(args?) {
		$(this.modalId).modal('hide');
		if (this.onCancelEvent)
			this.onCancelEvent(args);
	}

	close(args?) {
		$(this.modalId).modal('hide');
		if (this.onCloseEvent)
			this.onCloseEvent(args);
	}
}
