import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {Cus5Component} from './cus5.component';
import {NameListService} from '../../shared/services/name-list.service';


export function main() {
  describe('cus5 component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then(rootTC => {
            rootTC.detectChanges();

            let cus5Instance = rootTC.debugElement.children[0].componentInstance;
            let cus5DOMEl = rootTC.debugElement.children[0].nativeElement;
            let nameListLen = function () {
              return cus5Instance.nameListService.names.length;
            };

            expect(cus5Instance.nameListService).toEqual(jasmine.any(NameListService));
            expect(nameListLen()).toEqual(4);
            expect(DOM.querySelectorAll(cus5DOMEl, 'li').length).toEqual(nameListLen());

            cus5Instance.newName = 'Minko';
            cus5Instance.addName();
            rootTC.detectChanges();

            expect(nameListLen()).toEqual(5);
            expect(DOM.querySelectorAll(cus5DOMEl, 'li').length).toEqual(nameListLen());

            expect(DOM.querySelectorAll(cus5DOMEl, 'li')[4].textContent).toEqual('Minko');
          });
      }));
  });
}

@Component({
  providers: [NameListService],
  selector: 'test-cmp',
  template: '<sd-cus5></sd-cus5>',
  directives: [Cus5Component]
})
class TestComponent {}
