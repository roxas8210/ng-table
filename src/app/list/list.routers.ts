import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { ListDetailsComponent } from "./list-details/list-details.component";

export const routers: Routes = [{
    path: 'lists',
    component: ListComponent
},{
    path: 'list/:id',
    component: ListDetailsComponent
}];

export const routing = RouterModule.forChild(routers);