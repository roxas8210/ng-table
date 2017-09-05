import { Routes, RouterModule } from "@angular/router";
import { ListCardComponent } from "./list-card/list-card.component";

export const routers: Routes = [{
    path: 'list',
    component: ListCardComponent
}];

export const routing = RouterModule.forChild(routers);