import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [{
    path: '',
    redirectTo: 'lists',
    pathMatch: 'full'
}];

// export const routes: Routes = [{
//     path: 'lists',
//     redirectTo: 'lists'
// }];

export const routing = RouterModule.forRoot(routes);