import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/errors/not-found/not-found.component';
import { PlayComponent } from './play/play.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'play', component: PlayComponent },
    // Implementşng lazy loading by the following format
    {
        path: 'account', loadChildren: () => import('./account/account.module')
            .then(module => module.AccountModule)
    },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

