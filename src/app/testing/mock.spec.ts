import { Observable, Subject } from 'rxjs';
import CreateSpy = jasmine.createSpy;

/**
 * MockSwUpdate mocks the SwUpdate
 */
export class MockSwUpdate {
	/**
	 * $availableSubj mocked Subject of SwUpdate
	 */
	$availableSubj: Subject<any> = new Subject<{
		/**
		 * available Object with a hash as string
		 */
		available: {
			/**
			 * hash returns a string
			 */
			hash: string;
		};
	}>();
	/**
	 * $activatedSubj mocked Subject of SwUpdate
	 */
	$activatedSubj: Subject<any> = new Subject<{
		/**
		 * current Object with a hash as string
		 */
		current: {
			/**
			 * hash returns a string
			 */
			hash: string;
		};
	}>();

	/**
	 * available mocked Observable of SwUpdate
	 */
	available: Observable<any> = this.$availableSubj.asObservable();
	/**
	 * activated mocked Observable of SwUpdate
	 */
	activated: Observable<any> = this.$activatedSubj.asObservable();

	/**
	 * activateUpdate mocked function of SwUpdate
	 */
	activateUpdate: any = CreateSpy(
		'MockSwUpdate.activateUpdate',
	).and.callFake(() => Promise.resolve());

	/**
	 * checkForUpdate mocked function of SwUpdate
	 */
	checkForUpdate: any = CreateSpy(
		'MockSwUpdate.checkForUpdate',
	).and.callFake(() => Promise.resolve());

	constructor() {}
}
