import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    const currentUrl = this.router.url;
    console.log('Current URL:', currentUrl);
  }


}
