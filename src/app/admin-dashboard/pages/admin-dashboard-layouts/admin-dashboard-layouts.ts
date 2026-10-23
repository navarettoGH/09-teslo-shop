import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-admin-dashboard-layouts',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-dashboard-layouts.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class AdminDashboardLayouts {

  authService = inject(AuthService);

  user = computed(() => this.authService.user());

}
