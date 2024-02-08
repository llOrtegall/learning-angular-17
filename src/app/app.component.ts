import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './api/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly productsSvc = inject(ProductsService);
  products$ = this.productsSvc.getAllProducts();
}
