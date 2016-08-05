import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {Cus234Component} from './cus234.component';
import {NameListService} from '../../shared/services/name-list.service';


export function main() {
  describe('cus234 component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then(rootTC => {
            rootTC.detectChanges();

            let cus234Instance = rootTC.debugElement.children[0].componentInstance;
            let cus234DOMEl = rootTC.debugElement.children[0].nativeElement;
            let nameListLen = function () {
              return cus234Instance.nameListService.names.length;
            };

            expect(cus234Instance.nameListService).toEqual(jasmine.any(NameListService));
            expect(nameListLen()).toEqual(4);
            expect(DOM.querySelectorAll(cus234DOMEl, 'li').length).toEqual(nameListLen());

            cus234Instance.newName = 'Minko';
            cus234Instance.addName();
            rootTC.detectChanges();

            expect(nameListLen()).toEqual(5);
            expect(DOM.querySelectorAll(cus234DOMEl, 'li').length).toEqual(nameListLen());

            expect(DOM.querySelectorAll(cus234DOMEl, 'li')[4].textContent).toEqual('Minko');
          });
      }));
  });
}

@Component({
  providers: [NameListService],
  selector: 'test-cmp',
  template: '<sd-cus234></sd-cus234>',
  directives: [Cus234Component]
})
class TestComponent {}
