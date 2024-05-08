import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../../models/product";
import { environment } from "../../../environments/environment";
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendClient).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError('Error fetching products');
      })
    );
  }

  filterProducts(title: string, origin: string, size: string, type: string): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => {
        if (!title && !origin && !size && !type) {
          return products; // Return all products if all filter criteria are empty
        }
        // Filter products based on the provided criteria
        return products.filter(product =>
          (!title || product.title.includes(title)) &&
          (!origin || product.origin.includes(origin)) &&
          (!size || product.size.includes(size)) &&
          (!type || product.type.includes(type))
        );
      })
    );
  }
}
