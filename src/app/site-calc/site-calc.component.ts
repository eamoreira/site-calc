import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-site-calc',
  templateUrl: './site-calc.component.html',
  styleUrls: ['./site-calc.component.css']
})
export class SiteCalcComponent {
  rectangleWidth: string = "";
  rectangleHeight: string = "";
  triangleWidth: string = "";
  triangleHeight: string = "";
  toneladas: number = 0;
  valorPorTonelada: number = 0;
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  ladoD: number = 0;
  formGroup: FormGroup;

  test: string = "/assets/img/retangulo.png";

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.calculateRectangleDimensions();
  }

  ngOnInit() {
    this.calculateRectangleDimensions();
    this.calculateTriangleDimensions();
  }

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      toneladas: [''],
      valorPorTonelada: [''],
      ladoA: [''],
      ladoB: [''],
      ladoC: [''],
      ladoD: ['']
    });
  }

  submitForm() {
    console.log("Test")
    console.log("FORM", this.formGroup)
    if (this.formGroup.valid) {
      // Perform calculations or other actions here
      console.log('Form submitted!');
      console.log(this.formGroup.value);
    }
  }

  calculateRectangleDimensions() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    this.rectangleWidth = `${windowWidth * 0.3}px`;
    this.rectangleHeight = `${windowHeight * 0.5}px`;
  }
  

  calculateTriangleDimensions() {
    const rectangleWidth = parseFloat(this.rectangleWidth);
    const rectangleHeight = parseFloat(this.rectangleHeight);
    
    // Faça cálculos para definir as dimensões proporcionais do triângulo com base no tamanho da janela
    // Por exemplo, você pode usar uma fórmula para definir a largura e altura em relação à largura da janela
    
    this.triangleWidth = `${rectangleWidth * 0.5}px`; // Exemplo: 0% da largura da janela
    this.triangleHeight = `${rectangleHeight * 0.5}px`; // Exemplo: 15% da largura da janela
  }
}
