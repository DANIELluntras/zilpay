import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item.component';
import { NewItemsComponent } from './components/new-items/new-items.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ListItemsResolver } from './utils/services';

const routes: Routes = [
  {
    path: '',
    component: ItemComponent,
    data: {
      breadCrumb: 'Items',
    },

    children: [
      {
        path: '',
        component: ListItemsComponent,
        data: {
          breadCrumb: 'List items',
        },
      },
      {
        path: 'new',
        component: NewItemsComponent,
        data: {
          breadCrumb: 'New item',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppItemRouting {}
