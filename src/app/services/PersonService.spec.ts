import { PersonService } from './PersonService';
import { getTestBed, TestBed, async, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {

    HttpModule, BaseRequestOptions,
    Http,
    Response,
    ResponseOptions,
    XHRBackend,

} from '@angular/http';

describe("PersonService test ", () => {

    let mockBackEnd: MockBackend;

    beforeEach((async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [PersonService, MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    deps: [MockBackend, BaseRequestOptions],
                    useFactory:
                    (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }]
        })

        mockBackEnd = getTestBed().get(MockBackend);

    }))
);

it("list person", (done : any) => { 

        let personService : PersonService; 

        getTestBed().compileComponents().then(() => {
        mockBackEnd.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: [
                  {
                    id: 26,
                    contentRendered: '<p><b>Hi there</b></p>',
                    contentMarkdown: '*Hi there*'
                  }]
              }
            )));
        });

        personService = TestBed.get(PersonService);
        expect(personService).toBeDefined();

        personService.listPerson().subscribe((x) => {
            expect(x).not.toBeNull();
        })

    });
});

