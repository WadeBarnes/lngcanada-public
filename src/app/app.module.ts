import { NgModule } from '@angular/core';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

// modules
import { SharedModule } from 'app/shared.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { ApplicationsModule } from 'app/applications/applications.module';
import { ProjectModule } from 'app/project/project.module';

// components
import { HomeProxyComponent } from 'app/home-proxy.component';
import { ApplicationsProxyComponent } from 'app/applications-proxy.component';
import { AppComponent } from 'app/app.component';
import { CommentModalComponent } from 'app/comment-modal/comment-modal.component';
import { ConfirmComponent } from 'app/confirm/confirm.component';
import { ContactComponent } from 'app/contact/contact.component';
import { HeaderComponent } from 'app/header/header.component';
import { FooterComponent } from 'app/footer/footer.component';
import { HomeComponent } from 'app/home/home.component';

// services
import { ApiService } from 'app/services/api';
import { ApplicationService } from 'app/services/application.service';
import { CommentService } from 'app/services/comment.service';
import { CommentPeriodService } from 'app/services/commentperiod.service';
import { ConfigService } from 'app/services/config.service';
import { DecisionService } from 'app/services/decision.service';
import { DocumentService } from 'app/services/document.service';
import { FeatureService } from 'app/services/feature.service';
import { ProjectsComponent } from './projects/projects.component';
import { UrlService } from 'app/services/url.service';
import { DataService } from 'app/services/data.service';
import { FaqComponent } from 'app/faq/faq.component';

@NgModule({
  imports: [
    TagInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    NgxPageScrollCoreModule.forRoot({ scrollOffset: 50, easingLogic: easingLogic }),
    NgxPageScrollModule,
    SharedModule,
    ApplicationsModule,
    ProjectModule,
    AppRoutingModule, // <-- module import order matters - https://angular.io/guide/router#module-import-order-matters
    BootstrapModalModule.forRoot({ container: document.body })
  ],
  declarations: [
    HomeProxyComponent,
    ApplicationsProxyComponent,
    AppComponent,
    CommentModalComponent,
    ConfirmComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    FaqComponent,
    HomeComponent
  ],
  providers: [
    ApiService,
    ApplicationService,
    CommentService,
    CommentPeriodService,
    ConfigService,
    DecisionService,
    DocumentService,
    FeatureService,
    UrlService,
    DataService
  ],
  entryComponents: [CommentModalComponent, ConfirmComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function easingLogic(t: number, b: number, c: number, d: number): number {
  // easeInOutExpo easing
  if (t === 0) {
    return b;
  }
  if (t === d) {
    return b + c;
  }
  t /= d / 2;
  if (t < 1) {
    return (c / 2) * Math.pow(2, 8 * (t - 1)) + b;
  }
  return (c / 2) * (-Math.pow(2, -8 * --t) + 2) + b;
}
