# Angular CrudStudents 2
Para arrancar el servidor que mantiene el Crud deberas abrir docker y ejecutar el siguiente comando:
## 🐋 Docker
```
docker run -p49155:80 jpromeropereira/students-crud:latest
```
⚠️ Si quieres utilizar este docker para tu prouyecto asegurate de poner tu puerto en lugar del **49155**

## Funcionamiento
Este Angular esta pensado para funcionar con un servidor .NET creado en C# que es el que se ejecuta con el comando de doker.
Permite hacer varias gestiones con un JSON de datos:
- Peticiones tipo get: ``http://localhost:49155/students/list``
- Peticiones tipo post: ``http://localhost:49155/students/add``
- Peticiones tipo delete: ``http://localhost:49155/students/delete/{id}``
- Peticiones tipo update: ``http://localhost:49155/students/update``

Cada tipo de peticion devuelve un observable, que es enviado hasta los componentes para tratarlos como es debido.
Se crea un [SnakBar](https://material.angular.io/components/snack-bar/overview) por cada tipo de peticion, indicando la accion al usuario.
La información se actualiza "En tiempo real" al crear, modificar o borrar los elementos.

## Multimodulo
Se ha creado un modulo aparte para crear todos los elementos utilizados en Angular Material.
Para ello se ejecuta:
````
ng g module modules/angular-material
````
En el nuevo modulo cargamos todo lo necesario para Angular Material y se declara tanto en import como en export:
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
  ],
})
export class AngularMaterialModule {}

```
Para utilizar este modulo en nuestro app module importamos el nuevo modulo y lo introducimos en imports.
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './components/container/container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './modules/angular-material/angular-material.module'; // 👈 Aqui importamos el modulo
import { StudentCardComponent } from './components/student-card/student-card.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [AppComponent, ContainerComponent, StudentCardComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule, // 👈 Aqui introducimos el modulo que hemos creado
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

```
