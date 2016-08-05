import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {Cus6Component} from './cus6.component';
import {NameListService} from '../../shared/services/name-list.service';


export function main() {
  describe('cus6 component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then(rootTC => {
            rootTC.detectChanges();

            let cus6Instance = rootTC.debugElement.children[0].componentInstance;
            let cus6DOMEl = rootTC.debugElement.children[0].nativeElement;
            let nameListLen = function () {
              return cus6Instance.nameListService.names.length;
            };

            expect(cus6Instance.nameListService).toEqual(jasmine.any(NameListService));
            expect(nameListLen()).toEqual(4);
            expect(DOM.querySelectorAll(cus6DOMEl, 'li').length).toEqual(nameListLen());

            cus6Instance.newName = 'Minko';
            cus6Instance.addName();
            rootTC.detectChanges();

            expect(nameListLen()).toEqual(5);
            expect(DOM.querySelectorAll(cus6DOMEl, 'li').length).toEqual(nameListLen());

            expect(DOM.querySelectorAll(cus6DOMEl, 'li')[4].textContent).toEqual('Minko');
          });
      }));
  });
}

@Component({
  providers: [NameListService],
  selector: 'test-cmp',
  template: '<sd-cus6></sd-cus6>',
  directives: [Cus6Component]
})
class TestComponent {}
