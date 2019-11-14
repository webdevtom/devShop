import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { JobsComponent } from './jobs/jobs.component';
import { StaffComponent } from './staff/staff.component';
import { StoreComponent } from './store/store.component';


const routes: Routes = [
  {path: '', component: BoardComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'store', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
