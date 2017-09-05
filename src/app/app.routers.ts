import { Routes, RouterModule } from "@angular/router";
import { ListCardComponent } from "./list/list-card/list-card.component";

export const routes: Routes = [{
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
},{
    path: 'list',
    redirectTo: 'list'
}];

// export const routes: Routes = [{
//     path: '',
//     component: ListCardComponent
// }];

export const routing = RouterModule.forRoot(routes);