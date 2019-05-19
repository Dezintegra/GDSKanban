import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';

declare var document: any;
declare var gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, AfterViewInit {
  
  @Input()
  public signedIn?: boolean; 

  @Output()
  public authorized: EventEmitter<any> = new EventEmitter<any>();;

  constructor(
    private cd: ChangeDetectorRef
  ) { 
  }


  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.loadScript('https://apis.google.com/js/api.js').then(()=>{
      gapi.load('client:auth2', () => { 
        console.log('auth module loaded');
        this.initClient() 
      });
    })
  }


  private initClient() {
    gapi.client.init({
      apiKey: this.API_KEY,
      clientId: this.CLIENT_ID,
      discoveryDocs: this.DISCOVERY_DOCS,
      scope: this.SCOPES
    }).then(() => {

      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen((isSignedIn)=> {
        console.log('SIGNED IN:', isSignedIn);
        this.signedIn = isSignedIn
        if(this.signedIn){
          this.authorized.emit();
        }   
        this.cd.detectChanges();
      });

      this.signedIn = gapi.auth2.getAuthInstance().isSignedIn.get();

      if(this.signedIn){
        this.authorized.emit();
      }      

    }, function(error) {
      console.error(JSON.stringify(error, null, 2));
    });
  }

  public handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  /**
   *  Sign out the user upon button click.
   */
  public handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }

  loadScript(scriptSrc: string) {
    return new Promise((resolve, reject) => {

      //load script
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = scriptSrc;
      if (script.readyState) {  //IE
        script.onreadystatechange = () => {
          if (script.readyState === "loaded" || script.readyState === "complete") {
            script.onreadystatechange = null;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          }
        };
      } else {  //Others
        script.onload = () => {
          resolve({ script: name, loaded: true, status: 'Loaded' });
        };
      }
      script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
      document.getElementsByTagName('head')[0].appendChild(script);

    });
  }

  public CLIENT_ID = '371180133084-577pqf4jajrhkd7rdfvhiajqekib7c28.apps.googleusercontent.com';
  public API_KEY = 'AIzaSyDorodP3fHDgi3uiWg8Yf1le-5y1y0EcCM';

  // Array of API discovery doc URLs for APIs used by the quickstart
  public DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  public SCOPES = "https://www.googleapis.com/auth/spreadsheets";

}
