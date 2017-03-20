"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CursosComponent = (function () {
    function CursosComponent() {
        this.nome = 'MBA Java Soa';
        this.disciplinas = ['Persistencia', 'Java Web', 'EJB 3.0', 'Responsive Design'];
    }
    CursosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cursos-lista',
            /*
            template: `
                <p>Curso: {{ nome }}</p>
                <p>Lista de Disciplinas</p>
                <ul>
                    <li *ngFor="let disciplina of disciplinas">
                        {{ disciplina }}
                    </li>
                </ul>
                `
            */
            templateUrl: 'cursos.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CursosComponent);
    return CursosComponent;
}());
exports.CursosComponent = CursosComponent;
//# sourceMappingURL=cursos.component.js.map