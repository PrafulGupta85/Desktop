import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TasksComponent } from './tasks/tasks.component';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  declarations: [AppComponent, TasksComponent, HighlightPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}